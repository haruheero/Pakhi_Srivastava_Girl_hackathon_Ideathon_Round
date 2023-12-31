# Pakhi_Srivastava_Girl_hackathon_Ideathon_Round
## Problem Statement
In the face of growing environmental challenges, there is a pressing need to leverage AI technologies to monitor, analyze, and mitigate environmental issues. By harnessing the power of AI, we can gain valuable insights into environmental data, predict and prevent natural disasters, and promote sustainable practices. This will enable us to make informed decisions and take proactive measures to protect our planet for future generations. Problem Statement: The objective is to develop an AI-powered system that addresses the critical aspects of environmental conservation. The system should have the capability to monitor and analyze environmental data, predict and prevent natural disasters, and promote sustainable practices. 
* Natural Disaster Prediction: Develop AI algorithms and models that utilize environmental data to predict and identify potential natural disasters, such as hurricanes, floods, wildfires, and earthquakes. The system should be able to provide early warnings and assist in disaster preparedness and response efforts.
## Solution
Development of an AI model which takes environmental variables of the past few days and based on that data gives the prediction of one or more dominant factors which can be the primary cause of the natural disaster and then compares those factors against a threshold to determine which areas can be most affected by the disaster. Since the model takes into account data of multiple days in advance, it can be used to predict a disaster well before it happens and aid in the evacuation efforts. Along with the environmental factors of a particular place (example elevation for flood, seismic zone for earthquake), socio economic factors such as area’s population density, and area distribution based on other factors(for example distribution based on wealth, divide of rural vs urban) can be used to determine which areas will be most critically hit and will affect how much population. This can help in evacuation efforts. Additionally predictive data of months of a year can be used to judge the seasonality of the disaster, i.e, prediction of whether the disaster is likely to happen that particular year or not based on the established seasonality of disaster in the preceding years.
### Floods prediction AI model
Flood prediction model can be explained by taking the example of a city in Kerala -> Kozhikode
A heavy rainfall can be defined as rainfall greater than 100 mm in 24 hours. If a lot of rainfall is received in an area with low elevation such as Kozhikode (1 m - 50 m approx) that can potentially lead to flooding if the drainage system is not adequate. Rainfall depends on other environmental factors such as humidity, max. temperature, dew, cloud cover, visibility, sea level pressure, wind direction, wind speed to name a few. By taking into account the data of previous (7 days) (3 days in implementation) a prediction for the rainfall that can occur after 7 days can be made. This can give an idea about whether flooding is possible in the region or not (if it is greater than a threshold then flooding is possible). After the rainfall prediction, by using the data from the elevation of different areas of the district, it is possible to evaluate which areas are at risk of flooding. Furthermore using the socio economic distribution data (population density, rural vs urban areas, slums etc.) the impact can be measured on that area & hence proper arrangements can be made.
### Sentiment Analysis using insta posts
By web scraping the insta posts or any other social media the severity of flood can be determined. If there are a lot of posts with negative sentiments such as death, destruction, loss of life etc the negative sentiment will be high. First the scraping of posts is done, then searching for information about the area from where it was made & then grouping according to it. Then sentiment analysis on these groups can tell us about the severity of floods. The steps taken for training this model are:
1. Punctuation removal
2. Stopword Removal
3. Lemmatization
4. Analyzation through word cloud
5. Using pipelines to pass through NLP transformers for sentiment analysis.
## Setup of local environment
1. Fork this repo
2. Run the command `git clone https://github.com/haruheero/Pakhi_Srivastava_Girl_hackathon_Ideathon_Round.git`
3. All the data used for training and testing the models (flood prediction & insta post sentoment analysis) is in the folder Disaster prediction.
4. Run the jupyter notebook `Pakhi_Srivastava_Girl_Hackathon_Ideathon_Round.ipynb`
5. The model is saved in model.pkl
6. Navigate to `disaster-pred-backend` repo.
7. Run command python Apis.py
8. The backend will start to run on `localhost:5000/model`
9. Naviagte to `disaster-pred-frontend` repo.
10. First install all dependencies by running `npm i`.
11. Run command npm start.
12. The frontend will start to run on `localhost:3000`.
13. Go to mapbox, create a new token & put it in `disaster-pred-frontend/src/Components/Map/Map.js`
14. Check out the predictions.
### Setup for sentiment analysis model
1. Run the jupyter notebook `disaster-text-analysis.ipynb`
## Demo
https://drive.google.com/file/d/1NaFPajzAUuInDLo04azrwljS5jFZUZhQ/view?usp=sharing
