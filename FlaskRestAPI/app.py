# pip install flask
# pip install flask_restful
# pip install flask_sqlalchemy
from flask import Flask,request, render_template
from flask_restful import Api,Resource,request
from models import db,FitnessClass
from flask_cors import CORS
import pandas as pd
import os
import matplotlib.pyplot as plt
from io import BytesIO
import base64

app = Flask(__name__)

from flask_cors import CORS,cross_origin

CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///fitness.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

api = Api(app)
db.init_app(app)

with app.app_context():
    db.create_all()

class FitnessClassView(Resource):

    '''
    parser = reqparse.RequestParser()
    parser.add_argument('name',type=str,required=True,help='can't leave blank')
    parser.add_argument('trainer',type=str,required=True,help='can't leave blank')
    parser.add_argument('category',type=str,required=True,help='can't leave blank')
    parser.add_argument('duration',type=int,required=True,help='can't leave blank')
    parser.add_argument('capacity',type=int,required=True,help='can't leave blank')
    '''

    def get(self):
        fitness = FitnessClass.query.all()
        return {'Fitness':list(x.json() for x in fitness)}
    
    def post(self):
        data = request.get_json()
        new_fitness = FitnessClass(name=data['name'], trainer=data['trainer'], category=data['category'], duration=data['duration'], capacity=data['capacity'])
        db.session.add(new_fitness)
        db.session.flush()
        db.session.commit()
        return new_fitness.json(), 201
    
class SingleFitnessview(Resource):
    def get(self,id):
        fitness = FitnessClass.query.filter_by(id=id).first()
        if fitness:
            return fitness.json()
        return {'message':'Fitness id not found'},404


    def delete(self,id):
        fitness = FitnessClass.query.filter_by(id=id).first()
        if fitness:
            db.session.delete(fitness)
            db.session.commit()
            return {'message':'Fitness deleted successfully'}
        return {'message':'Fitness id not found'},404
    
    def put(self,id):
        data = request.get_json()
        fitnes = FitnessClass.query.filter_by(id=id).first()
        if fitnes:
            fitnes.name = data['name']
            fitnes.trainer = data['trainer']
            fitnes.category = data['category']
            fitnes.duration = data['duration']
            fitnes.capacity = data['capacity']
        else:
            fitnes = FitnessClass(id=id,**data)
            
        db.session.add(fitnes)
        db.session.commit()
        return fitnes.json(),201
    
api.add_resource(FitnessClassView,'/fitness')
api.add_resource(SingleFitnessview, '/fitnes/<int:id>')

@app.route('/dashboard')
def show_dashboard():
    try:
        # Specify the full path to your CSV file
        csv_path = os.path.join(os.path.dirname(__file__), 'attendance_data.csv')
        
        # Read and analyze attendance data
        df = pd.read_csv(csv_path)
        
        # Calculate statistics
        stats = {
            'category_averages': df.groupby('class_name')['attendees'].mean().round(2).to_dict(),
            'top_classes': df.nlargest(3, 'attendees')[['class_name', 'attendees']].to_dict('records'),
            'bottom_classes': df.nsmallest(3, 'attendees')[['class_name', 'attendees']].to_dict('records')
        }

        # Create bar chart
        plt.figure(figsize=(10, 6))
        plt.bar(stats['category_averages'].keys(), stats['category_averages'].values())
        plt.title('Average Attendance by Category')
        plt.xlabel('Class Category')
        plt.ylabel('Average Attendees')
        plt.xticks(rotation=45)
        
        # Save plot to base64 string
        img = BytesIO()
        plt.savefig(img, format='png', bbox_inches='tight')
        img.seek(0)
        plot_url = base64.b64encode(img.getvalue()).decode()
        plt.close()
        
        return render_template('dashboard.html', stats=stats, plot_url=plot_url)
    except Exception as e:
        return f"Error: {str(e)}", 500

app.debug = True
if __name__ == '__main__':
    app.run(host='localhost',port=5000)









