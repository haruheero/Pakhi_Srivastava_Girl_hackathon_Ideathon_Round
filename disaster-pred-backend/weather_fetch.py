import requests
import json

def weather_fetch_api():
    res = requests.get('INSERT_YOU_WEARTHER_VISUAL_CROSSING_API_HERE')
    response = json.loads(res.text)
    response = response['days'][:3]
    data_arr = [ response[2]['tempmax'],
                response[2]['dew'],
                response[2]['humidity'],
                response[2]['pressure'],
                response[2]['cloudcover'],
                response[2]['visibility'],
                response[1]['humidity'],
                response[1]['pressure'],
                response[1]['cloudcover'],
                response[1]['visibility'],
                response[0]['pressure'],
                ]
    return {'weather': response, 'pred_data': [data_arr]}