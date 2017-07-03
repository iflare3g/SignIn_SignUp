from flask import Flask,jsonify,render_template,url_for,request,session,redirect
from app import app
from app.config.utilities import *
from app.views_methods.login import *
from app.views_methods.forgot import *


@app.route('/',methods = ['GET','POST'])
def index():
  return login()
  
@app.route('/forgot',methods = ['GET','POST'])
def reset_pwd():
  return forgot()

@app.route('/checkMail',methods = ['GET'])
def check():
  return checkEmailOnRegistering()