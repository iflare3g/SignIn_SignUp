from app.config.utilities import *

def reset(pwd,email):
  res = None
  connection = connect()
  data = [pwd,email]
  query = 'update User set pwd=%s where email=%s'
  res = safety_update_query(connection,query,data)
  return res