import {Text, View, StyleSheet, Button} from "react-native";
import { useState, useEffect } from 'react';
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    LineChart,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import Axios from 'axios';
import { TEMPORALDAILY } from '../utils/rutas'


  export default function StatisticsScreen({ navigation }) {

    const screenWidth = Dimensions.get("window").width;
    const [datos, setDatos] = useState({
    x_axis: ["January", "February", "March", "April", "May", "June"],
    y_axis: [20, 45, 28, 80, 99, 43]
    });

    // Consumo de datos del API
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
    console.log('new')
    setDatos({
      x_axis: Object.keys(data.properties.parameter.CLOUD_AMT),
      y_axis: Object.values(data.properties.parameter.CLOUD_AMT)
    });
    console.log(datos)
    console.log(datos)
    } catch (e) {
    console.log(e);
    }
    };

    useEffect(() => {
    acceptAccountRequest();
    }, []);

    const data = {
        labels: datos.x_axis,
        datasets: [
            {
                data: datos.y_axis,
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                strokeWidth: 2
            }
        ],
        legend: ['Rainy Days']
    }

    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
    };

    return (
      <View style={styles.container}>
        <View style={styles.container}>
            <LineChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                bezier
            />
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
