import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, Platform } from "react-native";
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Axios from 'axios';
import { DATAYPES, YEARS, TIME, PARAMETERS} from '../utils/variables';


export default function Information({ route, navigation }) {
  const { location } = route.params;
  const ruta = "https://power.larc.nasa.gov/api";
  const [selectedValue, setSelectedValue] = useState("Temporal");
  const [selectedYear, setSelectedYear] = useState("1981");
  const [timeValue, setTimeValue] = useState("Hourly");
  const [parametersValue, setParametersValue] = useState("PRECSNOLAND");
  const [start, setStart] = useState(new Date(1598051730000));
  const [end, setEnd] = useState(new Date(1598051730000));
  const [showButtonEnd, setShowButtonEnd] = useState(false);
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [link, setLink] = useState("");
  const [datos, setDatos] = useState({
    x_axis: [0],
    y_axis: [0],
  });

  const onChangeStart = (event, selectedDate) => {
    const currentDate = selectedDate || start;
    setShowStart(Platform.OS === 'ios');
    setStart(currentDate);
    setShowButtonEnd(true);
  };

  const onChangeEnd = (event, selectedDate) => {
    const currentDate = selectedDate || end;
    setShowEnd(Platform.OS === 'ios');
    setEnd(currentDate);
  };

  const showModeStart = () => {
    setShowStart(true);
  };
  const showModeEnd = () => {
    setShowEnd(true);
  };

  const request = async () => {
    try {
      console.log(link)
      console.log(parametersValue)
      console.log(location.longitude)
      console.log(location.latitude)
        const {data} = await Axios.get(link,
            {
                headers: {
                    'Cookie': '72433e29e5a9aabda23011a87312c9f6=95caff22feff53d170254d75a7038a05',
                },
                params: {
                    parameters: parametersValue,
                    community: "RE",
                    longitude: location.longitude,
                    latitude: location.latitude,
                    start: "20201201",
                    end: "20201231",
                    format: "JSON",
                },
            });
        console.log('new')
        let test = {}
        Object.values(data.properties.parameter).map((item) => {
            item = data.properties.parameter[item]
        })
        await setDatos({
            ...datos,
            x_axis: Object.keys(data.properties.parameter),
            y_axis: Object.values(data.properties.parameter)
        });
    } catch (e) {
        console.log(e);
    }
  };
  const onClick = () => {
    setLink(`${ruta}/${selectedValue.toLowerCase()}/${timeValue.toLowerCase()}/point`);
    request();
  }


  useEffect(() => {
    alert(`Latitud: ${location.latitude} Longitud: ${location.longitude}`)
  }, []);

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
          {DATAYPES.map((item)=>(
              <Picker.Item label={item} value={item} key={item} />
          ))}
        </Picker>
        <View>
          {selectedValue === "Temporal"?(
              <><Picker
                      selectedValue={parametersValue}
                      style={{ height: 50, width: 150 }}
                      onValueChange={(itemValue) => setParametersValue(itemValue)}
                  >
                      {PARAMETERS.map((item) => (
                          <Picker.Item label={item} value={item} key={item} />
                      ))}
                  </Picker>
              <Picker
                      selectedValue={timeValue}
                      style={{ height: 50, width: 150 }}
                      onValueChange={(itemValue) => setTimeValue(itemValue)}
                  >
                      {TIME.map((item) => (
                          <Picker.Item label={item} value={item} key={item} />
                      ))}
                  </Picker>
                  {(timeValue === "Hourly" || timeValue === "Daily") && (
                    <View>
                      <View style = {styles.buttonsDates} >
                        <Button onPress={showModeStart} title="Start date" />
                      </View>
                      {showStart && (
                          <DateTimePicker
                              testID="dateTimePicker"
                              value={start}
                              mode="date"
                              is24Hour={true}
                              display="default"
                              onChange={onChangeStart}
                              minimumDate={new Date(2001, 0, 1)} />
                      )}
                      {showButtonEnd && (
                          <View style = {styles.buttonsDates} >
                              <Button onPress={showModeEnd} title="End date" />
                          </View>
                          )}
                          {showEnd && (
                              <DateTimePicker
                                  testID="dateTimePicker"
                                  value={end}
                                  mode="date"
                                  is24Hour={true}
                                  display="default"
                                  onChange={onChangeEnd}
                                  minimumDate={start} />
                          )}
                    </View>
                  )}
                  { timeValue==="Monthly"&&(
                    <Picker
                    selectedValue={selectedYear}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue) => setSelectedYear(itemValue)}
                  >
                      {YEARS.map((item)=>(
                          <Picker.Item label={item} value={item} key={item} />
                      ))}
                  </Picker>
                  )}
                          </>
          ): selectedValue === "Application"?(
              <Text>Texto de prueba</Text>
              ): null}
        </View>
        <View style = {styles.buttonsDates} >
          <Button onPress={onClick} title="View results" />
        </View>
        <Text style={styles.buttonsDates}>{`${start.getFullYear()}${start.getMonth()}${start.getDate()}`}</Text>
    </View>
  );
}
/*
/api/temporal/climatology/point?parameters=T2M&community=SB&longitude=0&latitude=0&format=JSON
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  },
  buttonsDates:{
    position: "relative",
    marginTop: 20,
  }
});
