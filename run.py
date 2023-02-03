from flask import *
import plotly.express as px
import pandas as pd
import json
import plotly
import plotly.graph_objs as go
import numpy as np
import os
app = Flask(__name__)


def uploadDataSet():
    dir = 'static/data/'
    contenido = os.listdir(dir)
    dataCsv = []
    for fichero in contenido:
        if os.path.isfile(os.path.join(dir, fichero)) and fichero.endswith('.csv'):
            dataCsv.append(fichero)
    return dataCsv

@app.route('/readDataset',methods=['GET'])
def readDataSet(path):
    if not path:
        path=request.data
    dat=pd.read_csv(path)
    createTable(dat)

def dataSetFilter(dataPath, filter):
    data = readDataSet(dataPath)


def grafictCreater():
    data = []
    graphJSON = json.dumps(data, cls=plotly.utils.PlotlyJSONEncoder)
    return graphJSON

def createTable(data):
    df = pd.DataFrame(data)
    for d in df:
        print(d)


@app.route('/')
def home():
    return render_template('index.html',data=uploadDataSet())


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=45001, debug=True)
