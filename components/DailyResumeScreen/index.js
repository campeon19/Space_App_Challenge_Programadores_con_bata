import { Text, View, StyleSheet, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location"

import Axios from 'axios';

const getLocation = async () => {
  let coords
  try {
      await Location.requestForegroundPermissionsAsync()
      const data = await Location.getCurrentPositionAsync()
      coords = data.coords
  } catch (e) {
      coords = { isLocationRequested: true, latitude: 29.559346, longitude: -95.090022 }
  }
  return coords
}

const request = async () => {
    var config = {
        method: 'get',
        url: 'https://power.larc.nasa.gov/api/temporal/daily/point?parameters=ALLSKY_SFC_SW_DWN&community=RE&longitude=-90.6071&latitude=14.5120&start=20210101&end=20210331&format=JSON',
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }
  ;

export default function DailyResumeScreen({ navigation }) 
{

const [coordinates, setCoordinates] = useState({isLocationRequested: false, latitude: 0, longitude: 0 })
const [isDataFormated]
  useEffect(() => {
    getLocation()
        .then(coords => {
          setCoordinates({
                isLocationRequested: true,
                latitude: coords.latitude,
                longitude: coords.longitude,
            })
        })
}, [])

useEffect(() =>{

  //Only if the location is right
  if(coordinates.isLocationRequested){

  }

}, [coordinates])

    return (
        <View style={styles.container}>
            <Text>Estadisticas Diarias</Text>

            {coordinates.isLocationRequested?<Text>Ya hay datos de localizacion</Text>:<Text>Cargando...</Text>}
            <StatusBar style="auto" />
            <Button
                onPress={() => navigation.navigate('Introduction')}
                title="Return"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
