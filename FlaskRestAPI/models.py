from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class FitnessClass(db.Model):
    __tablename__ = 'Fitness'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(80))  
    trainer = db.Column(db.String(80))  
    category = db.Column(db.String(80))  
    duration = db.Column(db.Integer)  
    capacity = db.Column(db.Integer)  

    def __init__(self, name, trainer, category, duration, capacity):
        self.name = name
        self.trainer = trainer
        self.category = category
        self.duration = duration
        self.capacity = capacity

    def json(self):
        return {'id': self.id,'name': self.name, 'trainer': self.trainer, 'category': self.category, 'duration': self.duration, 'capacity': self.capacity}

