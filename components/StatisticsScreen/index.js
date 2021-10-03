import {Text, View, StyleSheet, Button} from "react-native";
import {useState, useEffect} from 'react';
import {StatusBar} from "expo-status-bar";
import React from "react";
import {
    LineChart,
} from "react-native-chart-kit";
import {Dimensions} from "react-native";
import Axios from 'axios';
import {TEMPORALDAILY} from '../utils/rutas'
import {Rect, Text as TextSVG, Svg, Polygon} from "react-native-svg";
import Icon from 'react-native-vector-icons/Ionicons';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default function StatisticsScreen({ navigation }) {

    const screenWidth = Dimensions.get("window").width;
    const [datos, setDatos] = useState({
        x_axis: [0],
        y_axis: [0],
        labels: [0],
    });
    const [tooltipPos, setTooltipPos] = useState({
        x: 0,
        y: 0,
        visible: false,
        value: []
    })

    // Consumo de datos del API
    const acceptAccountRequest = async () => {
        try {
            const {data} = await Axios.get(TEMPORALDAILY,
                {
                    headers: {
                        'Cookie': '72433e29e5a9aabda23011a87312c9f6=95caff22feff53d170254d75a7038a05',
                    },
                    params: {
                        parameters: "CLOUD_AMT,ALLSKY_SFC_SW_DWN",
                        community: "RE",
                        longitude: -90.9587,
                        latitude: 14.7156,
                        start: "20201201",
                        end: "20201231",
                        format: "JSON",
                    },
                });
            const labels = []
            const formatLabel = []
            const labelRadix = Math.max(Math.floor(datos.x_axis.length / 4), 1)
            Object.keys(data.properties.parameter.CLOUD_AMT).map((item, index)=>{
                const year = item.slice(0, 4)
                const month = parseInt(item.slice(4, 6), 10) - 1
                const day = item.slice(6, 9)
                const date = months[month] + ' ' + day + ' ' + year
                labels.push(date)
                if (index% labelRadix === 0)
                    formatLabel.push(date)
                else
                    formatLabel.push('')
            })
            await setDatos({
                ...datos,
                x_axis: labels,
                y_axis: Object.values(data.properties.parameter.CLOUD_AMT),
                labels: formatLabel
            });
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        acceptAccountRequest();
    }, []);


    const data = {
        labels: datos.labels,
        datasets: [
            {
                data: datos.y_axis,
            }
        ],
        legend: ['Rainy Days']
    }

    const chartConfig = {
        backgroundGradientFrom: '#FFF',
        backgroundGradientFromOpacity: '#FFF',
        backgroundGradientTo: "#FFF",
        backgroundGradientToOpacity: 2,
        decimalPlaces: 2,
        color: (opacity = 0) => `rgba(255, 0, 0, ${opacity})`,
        labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
        propsForDots:{
            r: '3',
            strokeWidth: '2',
            stroke: 'red',
        },
        style:{
            borderRadius: 16,
        },
        propsForLabels:{
            fontSize: 10,
        }
    };

    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.title}> IDK </Text>
                <View style={styles.card}>
                    <Icon name="location" size={35} color="#25166B" />
                    <View style={styles.column}>
                        <Text style={styles.text}> Latitude: </Text>
                        <Text style={styles.text}> Longitude: </Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Text style={styles.subtitle}> Time </Text>
                    <View style={styles.column}>
                        <Text style={styles.text}> Start: </Text>
                        <Text style={styles.text}> End: </Text>
                    </View>
                </View>
            </View>
            <View  style={styles.container}>
                <LineChart
                    data={data}
                    width={screenWidth - 10}
                    height={330}
                    chartConfig={chartConfig}
                    withInnerLines={false}
                    decorator={() => {
                        return tooltipPos.visible
                            ? <View>
                                <Svg>
                                    <Rect x={tooltipPos.x - 25}
                                          y={tooltipPos.y - 30}
                                          rx={3}
                                          ry={3}
                                          width="50"
                                          height="20"
                                          fill="rgb(224, 228, 231)"
                                    />
                                    <Polygon
                                        points={`${tooltipPos.x},${tooltipPos.y - 5} ${tooltipPos.x + 5},${tooltipPos.y - 10} ${tooltipPos.x - 5},${tooltipPos.y - 10}`}
                                        fill="rgb(224, 228, 231)"

                                    />
                                    <TextSVG
                                        x={tooltipPos.x}
                                        y={tooltipPos.y - 22.5}
                                        fill="black"
                                        fontSize="7"
                                        textAnchor="middle">
                                        {tooltipPos.value[0]}
                                    </TextSVG>
                                    <TextSVG
                                        x={tooltipPos.x}
                                        y={tooltipPos.y - 13}
                                        fill="black"
                                        fontSize="8"
                                        fontWeight="bold"
                                        textAnchor="middle">
                                        {tooltipPos.value[1]}
                                    </TextSVG>
                                </Svg>
                            </View>
                            : null
                    }}
                    onDataPointClick={(data) => {
                        let isSamePoint = (tooltipPos.x === data.x
                            && tooltipPos.y === data.y)
                        let labelIndex = datos.y_axis.indexOf(data.value)
                        let label = datos.x_axis[labelIndex]

                        isSamePoint ? setTooltipPos((previousState) => {
                                return {
                                    ...previousState,
                                    value: [label, data.value],
                                    visible: !previousState.visible
                                }
                            })
                            : setTooltipPos({ x: data.x, value: [label, data.value], y: data.y, visible: true });
                    }}
                    bezier
                />
            </View>
            <Text>This is the Statistics Screen!</Text>
            <StatusBar style="auto"/>
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
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        padding:10,
        width: Dimensions.get("window").width - 20,
        flexDirection: 'row'
    },

    title:{
       color: '#6A706E',
       width: 100,
       fontSize: 18,
       fontWeight: 'bold'
    },
    subtitle:{
        color: "#25166B",
        fontSize: 14,
        fontWeight: 'bold'
    },

});
