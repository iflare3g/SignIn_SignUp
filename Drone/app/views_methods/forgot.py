from flask import Flask,jsonify,render_template,url_for,request,session,redirect
from app import app
from app.database.forgot import *


def forgot():
  if request.method == 'POST':
      email = request.form["email"]
      pwd = request.form["pwd"]
      msg = ""
      res = reset(pwd,email)
      print(res)
      if res:
        msg = "Hai aggiornato correttamente la tua password!"
        return render_template("reset_pwd.html",msg=msg)
  else:
    return render_template('reset_pwd.html')
  return render_template('reset_pwd.html')
  