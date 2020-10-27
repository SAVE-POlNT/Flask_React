import datetime  
import time
from flask import Flask

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': datetime.datetime.now(),'secTime':time.time()}

if __name__ == "__main__":
	app.run()