from flask import Flask, jsonify
import joblib
from weather_fetch import * 
from sorting_by_density import *

app = Flask(__name__)


@app.route("/model")
def predict():
    weather_predict = (weather_fetch_api())
    modelfile = joblib.load('../model.pkl')
    predict = modelfile.predict(weather_predict['pred_data'])
    sorted_danger = population_density_sort(predict)
    return jsonify({
        'day1': {
            'date': weather_predict['weather'][0]['datetime'],
            'maxtemp': weather_predict['weather'][0]['tempmax'],
            'mintemp': weather_predict['weather'][0]['tempmin'],
            'precip': weather_predict['weather'][0]['precip'],
            'humidity': weather_predict['weather'][0]['humidity'],
            'sealevelpressure': weather_predict['weather'][0]['pressure'],
            'dew': weather_predict['weather'][0]['dew'],
            'cloudcover': weather_predict['weather'][0]['cloudcover'],
        },
        'day2': {
            'date': weather_predict['weather'][1]['datetime'],
            'maxtemp': weather_predict['weather'][1]['tempmax'],
            'mintemp': weather_predict['weather'][1]['tempmin'],
            'precip': weather_predict['weather'][1]['precip'],
            'humidity': weather_predict['weather'][1]['humidity'],
            'sealevelpressure': weather_predict['weather'][1]['pressure'],
            'dew': weather_predict['weather'][1]['dew'],
            'cloudcover': weather_predict['weather'][1]['cloudcover'],
        },
        'day3': {
            'date': weather_predict['weather'][2]['datetime'],
            'maxtemp': weather_predict['weather'][2]['tempmax'],
            'mintemp': weather_predict['weather'][2]['tempmin'],
            'precip': weather_predict['weather'][2]['precip'],
            'humidity': weather_predict['weather'][2]['humidity'],
            'sealevelpressure': weather_predict['weather'][2]['pressure'],
            'dew': weather_predict['weather'][2]['dew'],
            'cloudcover': weather_predict['weather'][2]['cloudcover'],
        },
        'precip_pred': predict[0],
        'danger_zones': sorted_danger
    })

if __name__ == '__main__':
    app.run(debug=True)
