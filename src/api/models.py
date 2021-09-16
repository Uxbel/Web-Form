from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    city_id = db.Column(db.Integer, db.ForeignKey('city.id'))
    
    def __repr__(self):
        return '<User %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Country(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    country_name = db.Column(db.String(120), unique=True, nullable=False)
    cities = db.relationship('City', backref='country', lazy=True)

    def __repr__(self):
        return '<Country %r>' % self.country_name

    def serialize(self):
        return {
            "id": self.id,
            "country_name": self.country_name,
            # do not serialize the password, its a security breach
        }

class City(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    city = db.Column(db.String(120), unique=True, nullable=False)
    country_id = db.Column(db.Integer, db.ForeignKey('country.id'), nullable=False)
    users = db.relationship('User', backref='city', lazy=True)


    def __repr__(self):
        return '<City %r>' % self.city

    def serialize(self):
        return {
            "id": self.city,
            "city": self.city,
            # do not serialize the password, its a security breach
        }