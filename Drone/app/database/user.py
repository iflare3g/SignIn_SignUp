from app.config.utilities import *

def valid_login(email,password):
  res = None
  connection = connect()
  data = [email,password]
  query='select * from User where email=%s and pwd=%s;'
  res = safety_get_query(connection,query,data)
  return res
  
def signup(nome,cognome,email,password):
  res = None
  connection = connect()
  data = [nome,cognome,email,password]
  query = 'insert into User(nome,cognome,email,pwd) values(%s,%s,%s,%s);'
  res = safety_insert_query(connection,query,data)
  return res

def checkEmail(email):
  res = None
  connection = connect()
  data = email
  query = "select count(*) as result_code from User where email= %s;"
  res = safety_get_query(connection,query,data)
  return res
