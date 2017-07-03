import hashlib
import pymysql as mysql
import pymysql.cursors
from app.config.config import access_data
import random,string

def random_pwd():
    chars = string.ascii_uppercase + string.ascii_lowercase + string.digits
    size = 4
    return ''.join(random.choice(chars) for i in range(size,10))

def return_md5_pwd(pwd):
    md5_pwd = hashlib.md5()
    md5_pwd.update(pwd.encode('utf-8'))
    hashed_pwd = md5_pwd.hexdigest()[0:10]
    return hashed_pwd

def connect():
    db = None
    try:
        db = mysql.connect(user=access_data.get('user'),password=access_data.get('password'), db=access_data.get('db'), host=access_data.get('host'),cursorclass=pymysql.cursors.DictCursor)
        #print("Connected!")
    except:
        print('error no connection')
    return db



#-----------------------------------------------------------------------------------------------Inserimento Query

def safety_insert_query(connection,query_to_do,data_to_be_inserted):
    res = None
    error = ''
    try:
        with connection.cursor() as cursor: #cursor.close() automatico alla fine del try o except...
            query = query_to_do
            try:
                cursor.execute(query,(data_to_be_inserted))
                connection.commit()
                error = 'Success!'
                print(error)
            except (mysql.err.IntegrityError,mysql.err.ProgrammingError) as err:
                print('Error! Closing connection...' + str(err))
                error = 'Something went wrong...'
                pass
    finally:
        
        if connection is not None:
            connection.close()
        else:
            print("Is MySQL Server running ?")
            return "Is MySQL Server running ?"
           
    return error
  

def safety_get_query(connection,query_to_do,args):
    res = None
    try:
        with connection.cursor() as cursor: #cursor.close() automatico alla fine del try o except...
            query = query_to_do
            try:
                if args is None:
                    cursor.execute(query)
                    res = cursor.fetchall()
                    #for row in res:
                        #print(row)
                else:
                    cursor.execute(query,(args))
                    res = cursor.fetchall()
                    #for row in res:
                       # print(row)
            except (mysql.err.InterfaceError,mysql.err.OperationalError) as err:
                print('Error! Closing connection...'  + str(err))
                cursor.close()
    finally:
        if connection is not None:
            connection.close()
        else:
            print("Is MySQL Server running ?")
            return "Is MySQL Server running ?"
           
        #print('connection closed!')
    return res
    
    
    
def safety_update_query(connection,query_to_do,data_to_be_inserted):
    res = None
    error = ''
    try:
        with connection.cursor() as cursor: #cursor.close() automatico alla fine del try o except...
            query = query_to_do
            try:
                cursor.execute(query,(data_to_be_inserted))
                connection.commit()
                error = 'Updated!'
                print(error)
            except (mysql.err.IntegrityError,mysql.err.ProgrammingError) as err:
                print('Error! Closing connection...' + str(err))
                error = 'Something went wrong...'
                pass
    finally:
        if connection is not None:
            connection.close()
        else:
            print("Is MySQL Server running ?")
            return "Is MySQL Server running ?"
    return error
    
def is_not_empty(my_string):
    return bool(my_string and my_string.strip())
    
def is_empty(items):
    if type(items) is list:
        for string in items:
            return not bool(string)
    else:
        return not bool(string)
        
    