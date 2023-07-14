import pandas as pd

def population_density_sort(model_raindf_rf_predict):
    elevation = pd.read_csv('../Disaster prediction/Elevation and rainfall_general.csv')
    kozhikode_district = pd.read_csv('../Disaster prediction/kozhikode_district.csv')
    flood_lst = []
    for rain_i in range(len(model_raindf_rf_predict)):
        s_range = 100000000
        for i in range(len(elevation)):
            sr_range = int(elevation.iloc[i]['Rainfall Range for Potential Flooding (mm)'].split()[0])
            er_range = int(elevation.iloc[i]['Rainfall Range for Potential Flooding (mm)'].split()[2])
            if model_raindf_rf_predict[rain_i] >= sr_range and model_raindf_rf_predict[rain_i] <= er_range:
                print('in range')
                s_range = int(elevation.iloc[i]['Elevation Range (m)'].split()[0])
        for district_i in range(len(kozhikode_district)):
            elev_dist = kozhikode_district.iloc[district_i]['Elevation']
            if elev_dist <= s_range:
                flood_lst.append([kozhikode_district.iloc[district_i]['Pop_den'], kozhikode_district.iloc[district_i]['Name']])
    flood_lst = sorted(flood_lst, reverse=True)
    return flood_lst