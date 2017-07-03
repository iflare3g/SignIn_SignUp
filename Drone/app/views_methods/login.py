from flask import Flask,jsonify,render_template,url_for,request,session,redirect
from app import app
from app.database.user import *
from app.config.utilities import *

def login():
  nome = None
  email = None
  pwd = None
  pwd_login = None
  msg = ""

  if request.method == 'POST':
    request_param = request.form.to_dict()
    print(request_param)
    
    nome = request.form.get('nome',None)
    cognome = request.form.get('cognome',None)
    email = request.form.get('email',None)
    email_register = request.form.get('email_up',None)
    pwd_login = request.form.get('pwd_in',None)
    pwd = request.form.get('pwd',None)
    conf_pwd = request.form.get('conf_pwd',None)
    
    
    if is_not_empty(email) and is_empty([nome,cognome,conf_pwd]):
      res = valid_login(email,pwd_login)
      print('login')
      
      if res:
          return '<h1><center>Benvenuto del tuo sito!</center></h1>'
      else:
        msg = 'Username o password non corretti!'
        return render_template("index.html",msg=msg)
        
    else:
     res = signup(nome,cognome,email_register,pwd)
     print("register")
     if res:
       return "<h1>thanks for registering! Log in here --> <a href='/'>Login here!</a></h1>"
     else:
       msg = 'There are some problems in your registering...'
       return render_template("index.html",msg=msg)
  else:
    return render_template('index.html')
    
def checkEmailOnRegistering():
  try:
    email = request.args.get('email')
    res = checkEmail(email)
    if res:
      return jsonify(res)
    else:
      print("Error on checking select!")
  except TypeError as err:
    print('Something went wrong...ERROR --> {}'.format(err))
    return redirect(url_for(".index"))


