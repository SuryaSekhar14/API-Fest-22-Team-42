import pyrebase
import os
from dotenv import load_dotenv
import datetime

t = datetime.datetime.now()

load_dotenv()				#Load config from .env file

firebaseConfig = {
  "apiKey": os.getenv('apiKey'),
  "authDomain": os.getenv('authDomain'),
  "databaseURL": os.getenv('databaseURL'),
  "projectId": os.getenv('projectId'),
  "storageBucket": os.getenv('storageBucket'),
  "messagingSenderId": os.getenv('messagingSenderId'),
  "appId": os.getenv('appId'),
  "measurementId": os.getenv('measurementId')
}

firebase = pyrebase.initialize_app(firebaseConfig)

storage = firebase.storage()
database = firebase.database()