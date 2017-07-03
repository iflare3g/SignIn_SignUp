from flask import Flask
from flask_cors import CORS
import os
from datetime import timedelta

app = Flask(__name__)
CORS(app)
app.secret_key = os.urandom(24)
app.permanent_session_lifetime = timedelta(minutes=15)

from app import views

