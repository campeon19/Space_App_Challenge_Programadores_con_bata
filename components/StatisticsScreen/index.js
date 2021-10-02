import {Text, View, StyleSheet, Button} from "react-native";
import { useState, useEffect } from 'react';
import { StatusBar } from "expo-status-bar";
import React from "react";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import Axios from 'axios';
import { TEMPORALDAILY } from '../utils/rutas'

var respuesta = [
    { quarter: "aa", earnings: 13000 },
    { quarter: "as", earnings: 16500 },
    { quarter: "av", earnings: 14250 },
    { quarter: "aw", earnings: 19000 }
  ];
  export default function StatisticsScreen({ navigation }) {
    const [datos, setDatos] = useState(
        {}
        );
        const acceptAccountRequest = async () => {
          try {
            const { data } = await Axios.get(TEMPORALDAILY,
              {
                  headers: { 
                      'Cookie': '72433e29e5a9aabda23011a87312c9f6=95caff22feff53d170254d75a7038a05',
                  },
                  params: {
                      parameters: "CLOUD_AMT,ALLSKY_SFC_SW_DWN",
                      community: "RE",
                      longitude: -90.9587,
                      latitude: 14.7156,
                      start: "20201230",
                      end: "20201231",
                      format: "JSON",
                      } ,
              });
              /* fechas = Object.keys(data.properties.parameter.CLOUD_AMT)
              datos = Object.values(data.properties.parameter.CLOUD_AMT)
              console.log(fechas)
              console.log(datos) */
              // TODO Esto hay meterlo en una lista que tiene diccionarios con llaves y valores de igual nombre
              console.log(data.properties.parameter.CLOUD_AMT)
              setDatos(data.properties.parameter.CLOUD_AMT)
              console.log(respuesta)
          } catch (e) {
            console.log(e);
          }
        };
    useEffect(() => {
        acceptAccountRequest();
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <VictoryChart width={350} theme={VictoryTheme.material}>
                <VictoryBar data={respuesta} x="quarter" y="earnings" />
                </VictoryChart>
      </View>
            <Text>This is the Statistics Screen!</Text>
            <StatusBar style="auto" />
            <Button
                onPress={() => acceptAccountRequest()}
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
