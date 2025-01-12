from flask import Flask, render_template, jsonify
import pandas as pd
import matplotlib.pyplot as plt
from io import BytesIO
import base64

app = Flask(__name__)

def load_and_analyze_data():
    """Load and analyze attendance data from CSV"""
    try:
        # Read the CSV file
        df = pd.read_csv('attendance_data.csv')
        
        # Calculate average attendance per category
        category_averages = df.groupby('class_name')['attendees'].mean().round(2)
        
        # Get top and bottom 3 classes
        top_classes = df.groupby('class_name')['attendees'].mean().nlargest(3)
        bottom_classes = df.groupby('class_name')['attendees'].mean().nsmallest(3)
        
        return {
            'category_averages': category_averages.to_dict(),
            'top_classes': [{'class_name': k, 'attendees': v} for k, v in top_classes.items()],
            'bottom_classes': [{'class_name': k, 'attendees': v} for k, v in bottom_classes.items()]
        }
    except Exception as e:
        print(f"Error analyzing data: {str(e)}")
        return None

@app.route('/')
def dashboard():
    """Render the dashboard with attendance analysis"""
    stats = load_and_analyze_data()
    if not stats:
        return "Error loading data", 500
    
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
    
    return render_template('dashboard.html', 
                         stats=stats,
                         plot_url=plot_url)

@app.route('/api/stats')
def get_stats():
    """API endpoint for attendance statistics"""
    stats = load_and_analyze_data()
    if not stats:
        return jsonify({'error': 'Failed to load data'}), 500
    return jsonify(stats)

