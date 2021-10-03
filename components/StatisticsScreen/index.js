import {Text, View, StyleSheet, Button} from "react-native";
import {useState, useEffect} from 'react';
import {StatusBar} from "expo-status-bar";
import React from "react";
import {
    LineChart,
} from "react-native-chart-kit";
import {Dimensions} from "react-native";
import {Rect, Text as TextSVG, Svg, Polygon} from "react-native-svg";
import Icon from 'react-native-vector-icons/MaterialIcons';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default function StatisticsScreen({ route, navigation }) {
    const { location } = route.params;
    const screenWidth = Dimensions.get("window").width;
    const [datos, setDatos] = useState({
        x_axis: {a:[0]},
        y_axis: {a:[0]},
        labels: {a:[0]},
        parameters: ['a'],
        data: {a: {longname:"Loading", units: 'Sunshine'}},
        dates: [0, 0],
        coordinates: [location.geometry.coordinates[0], location.geometry.coordinates[1]],
    });
    const [tooltipPos, setTooltipPos] = useState({
        x: 0,
        y: 0,
        visible: false,
        value: []
    })

    const setDate = (dates) =>{
        const labelRadix = Math.max(Math.floor(dates.length / 4), 1)
        const date = []
        const labels = []
        dates.map((item, index)=> {
            const year = item.slice(0, 4)
            const month = parseInt(item.slice(4, 6), 10) - 1
            const day = item.slice(6, 9)
            date.push(months[month] + ' ' + day + ' ' + year)

            if (index% labelRadix === 0)
                labels.push(months[month] + ' ' + day + ' ' + year)
            else
                labels.push('')
        })

        return [date, labels]
    }

    const setHourDate = (dates) =>{
        const labelRadix = Math.max(Math.floor(dates.length / 4), 1)
        console.log(dates.length)
        const date = []
        const labels = []
        dates.map((item, index)=> {
            const year = item.slice(0, 4)
            const month = parseInt(item.slice(4, 6), 10) - 1
            const hour = item.slice(6, 8)
            const minute = item.slice(8, 11)
            date.push(hour + ':' + minute + ', ' + months[month] + ' ' + year)

            if (index% labelRadix === 0)
                labels.push(hour + ':' + minute + ', ' + months[month] + ' ' + year)
            else
                labels.push('')
        })

        return [date, labels]
    }

    const setMonthDate = (dates) =>{
        const labelRadix = Math.max(Math.floor(dates.length / 4), 1)
        console.log(dates.length)
        const date = []
        const labels = []
        dates.map((item, index)=> {
            const year = item.slice(0, 4)
            const month = parseInt(item.slice(4, 6), 10) - 1
            date.push(year + ' ' + months[month])

            if (index% labelRadix === 0)
                labels.push(year + ' ' + months[month])
            else
                labels.push('')
        })

        return [date, labels]
    }


    useEffect(() => {

        // Fecha
        const dates = [location.header.start, location.header.end]
        const date = setDate(dates)

        // Extracción de data
        const x_axis = {}
        const y_axis = {}
        const formatLabel = {}
        const data = {}
        const parameters = Object.keys(location.properties.parameter)
        parameters.map((param) =>{
            const keys = Object.keys(location.properties.parameter[param])
            const values = Object.values(location.properties.parameter[param])
            var labels
            if (dates[0] === dates[1])
                labels = setHourDate(keys)
            else
                labels = setDate(keys)

            x_axis[param] = labels[0]
            y_axis[param] = values
            formatLabel[param] = labels[1]
            data[param] = location.parameters[param]
        })
        setDatos({
            ...datos,
            x_axis: x_axis,
            y_axis: y_axis,
            labels: formatLabel,
            parameters: parameters,
            data: data,
            dates: date,
        })


    }, []);

    
    const chartConfig = {
        backgroundGradientFrom: '#FFF',
        backgroundGradientFromOpacity: '#FFF',
        backgroundGradientTo: "#FFF",
        backgroundGradientToOpacity: 2,
        decimalPlaces: 2,
        color: (opacity = 0) => `rgba(255, 0, 0, ${opacity})`,
        labelColor: (opacity = 0) => `rgba(0, 0,0, ${opacity})`,
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
                <View style={styles.card}>
                    <Icon style={{marginEnd: 10}} name="location-on" size={40} color="#25166B" />
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.subtitle}> Longitude </Text>
                            <Text style={styles.text}> {datos.coordinates[0]} </Text>
                        </View>
                        <View  style={styles.column}>
                            <Text style={styles.subtitle}> Latitude </Text>
                            <Text style={styles.text}> {datos.coordinates[1]} </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    <Icon style={{marginEnd: 10}} name="date-range" size={40} color="#25166B" />
                    <View style={styles.row}>
                        <View  style={styles.column}>
                            <Text style={styles.subtitle}> Start </Text>
                            <Text style={styles.text}> {datos.dates[0][0]} </Text>
                        </View>
                        <View  style={styles.column}>
                            <Text style={styles.subtitle}> End </Text>
                            <Text style={styles.text}> {datos.dates[0][1]} </Text>
                        </View>
                    </View>
                </View>
            </View>
            {
                datos.parameters.map((param, index) => {
                    return(
                        <View  key={index} style={styles.container}>
                            <LineChart
                                data={{
                                    labels: datos.labels[param],
                                    datasets: [
                                        {
                                            data: datos.y_axis[param],
                                        }
                                    ],
                                    legend: [datos.data[param].longname + ' (' + datos.data[param].units + ')']
                                }}
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
                                    let labelIndex = datos.y_axis[param].indexOf(data.value)
                                    let label = datos.x_axis[param][labelIndex]

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
                    );
                })
            }

            <Text>This is the Statistics Screen!</Text>
            <StatusBar style="auto"/>
            <Button
                // onPress={() => acceptAccountRequest()}
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
        flexDirection: 'row',
        alignItems: 'center',

    },
    row:{
        paddingBottom: 5,
        paddingEnd: 8,
        paddingStart: 8,
        borderBottomWidth: 0.5,
        borderBottomColor: '#000',
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',

    },
    column: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
       color: '#6A706E',
       fontSize: 18,
       fontWeight: 'bold'
    },
    subtitle:{
        color: "#6A706E",
        fontSize: 18,
        paddingBottom: 5
    },

});
