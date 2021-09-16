"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/', methods=['POST', 'GET'])
def handle_home():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route('/login', methods=['POST'])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email = User.email).first()
    if(user is None):
        return "user not exist", 404
    #generar token y retornar el "access token"

    response_body = {
        "m": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route('/register', methods=['POST'])
def register():
    name = request.json.get("name", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    city_id = request.json.get("city_id", None)
    user = User.query.filter_by(email = User.email).first()
    if(user):
        return "user exist", 400
    new_user = User(name = name, email = email, password = password, city_id = city_id)
    db.session.add(new_user)
    db.session.commit()
    #generar token y retornar el "access token"
       # return "user created successfully", 200

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route('/user', methods=['GET'])
def user_info():
    user = User.query.filter_by(id = User.id).first()

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200