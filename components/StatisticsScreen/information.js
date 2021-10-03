import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, Platform  } from "react-native";
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import SelectBox from 'react-native-multi-selectbox';
import Axios from 'axios';
import { xorBy } from 'lodash';
import { DATAYPES, YEARS, TIME, PARAMETERS, HOURLY, DAILY, MONTHLY, CLIMATOLOGY} from '../utils/variables';


export default function Information({ route, navigation }) {
  const { location } = route.params;
  const ruta = "https://power.larc.nasa.gov/api";
  const [selectedValue, setSelectedValue] = useState("Temporal");
  const [selectedStartYear, setSelectedStartYear] = useState("1984");
  const [selectedEndYear, setSelectedEndYear] = useState("1985");
  const [timeValue, setTimeValue] = useState("Hourly");
  const [parametersValue, setParametersValue] = useState("");
  const [start, setStart] = useState(new Date(1598051730000));
  const [end, setEnd] = useState(new Date(1598051730000));
  const [showButtonEnd, setShowButtonEnd] = useState(false);
  const [showButtonEnd2, setShowButtonEnd2] = useState(false);
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [years2, setYears2] = useState([...YEARS]);
  const [parametersValues,setParametersValues] = useState(HOURLY);
  let link = "";
  let parameters = "";

  const onChangeStart = (event, selectedDate) => {
    const currentDate = selectedDate || start;
    setShowStart(Platform.OS === 'ios');
    setStart(currentDate);
    setEnd(currentDate);
    setShowButtonEnd(true);
  };

  const onChangeTimeValue = (item) => {
    setTimeValue(item);
    if (item === "Hourly"){
      setParametersValues(HOURLY)
    }else if (item === "Daily"){
      setParametersValues(DAILY)
    }else if (item === "Monthly"){
      setParametersValues(MONTHLY)
    }else if (item === "Climatology"){
      setParametersValues(CLIMATOLOGY)
    }
  }

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
    var startDate = (timeValue === "Monthly"|| timeValue === "Climatology") ? selectedStartYear: `${start.getFullYear()}${start.getMonth()}${start.getDate()}`;
    var endDate = (timeValue === "Monthly"|| timeValue === "Climatology") ? selectedEndYear: `${end.getFullYear()}${end.getMonth()}${end.getDate()}`;
    console.log(startDate);
    console.log(endDate);
    try {
        const {data} = await Axios.get(link,
            {
                headers: {
                    'Cookie': '72433e29e5a9aabda23011a87312c9f6=95caff22feff53d170254d75a7038a05',
                },
                params: {
                    parameters: parameters,
                    community: "RE",
                    longitude: location.longitude,
                    latitude: location.latitude,
                    start: startDate,
                    end: endDate,
                    format: "JSON",
                },
            });
        console.log(data.properties.parameter);
        navigation.navigate('StatisticsGraphics', { location: data });
    } catch (e) {
        console.log(e);
        alert("Invalid Data");
    }
  };
  const onClick = () => {
    link = `${ruta}/${selectedValue.toLowerCase()}/${timeValue.toLowerCase()}/point`;
    parameters = "";
    selectedParameters.map((item, index) => {
      parameters += item.id+",";
    })
    parameters = parameters.slice(0, -1);
    request();
  }

  const onChange = (item) => {
    setSelectedStartYear(item);
  }

  useEffect(() => {
    setYears2(YEARS.slice((YEARS.findIndex(year => year === selectedStartYear)+1)));
    setSelectedEndYear(parseInt(selectedStartYear)+1);
    setShowButtonEnd2(true);
  }, [selectedStartYear]);

  const test = () => {
    setYears2(YEARS.slice((YEARS.findIndex(year => year === selectedStartYear))));
    selectedParameters.map((item, index) => {
      parameters += item.id+",";
    })
    console.log(parameters);
  }
  const [selectedParameters, setSelectedParameters] = useState([])
  function onMultiChange() {
    return (item) => setSelectedParameters(xorBy(selectedParameters, [item], 'id'));
  }
  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <Text>Service: </Text>
        <Picker
          selectedValue={timeValue}
          style={styles.picker}
          onValueChange={(itemValue) => onChangeTimeValue(itemValue)}
        >
        {TIME.map((item) => (
        <Picker.Item label={item} value={item} key={item} />
         ))}
        </Picker>
      </View>
      <View style={styles.selectbox}> 
        <SelectBox
          label="Select the parameters"
          options={parametersValues}
          selectedValues={selectedParameters}
          onMultiSelect={onMultiChange()}
          onTapClose={onMultiChange()}
          isMulti
        />
      </View>
        <View>
          {/* <View style={styles.timeContainer}>
            <Text>Service: </Text>
            <Picker
              selectedValue={timeValue}
              style={styles.picker}
              onValueChange={(itemValue) => setTimeValue(itemValue)}
            >
            {TIME.map((item) => (
            <Picker.Item label={item} value={item} key={item} />
             ))}
            </Picker>
          </View> */}
          {(timeValue === "Hourly" || timeValue === "Daily") && (
          <View>
            <View style = {styles.buttonsDates}>
              <Button color="#25166b" onPress={showModeStart} title="Start date" />
            </View>
            {showStart && (
            <DateTimePicker
              testID="dateTimePicker"
              value={start}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChangeStart}
              minimumDate={new Date(2001, 0, 1)} 
              maximumDate={new Date(2020, 11, 30)} />
            )}
            {showButtonEnd && (
              <View style = {styles.buttonsDates} >
                <Button color="#25166b" onPress={showModeEnd} title="End date" />
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
                minimumDate={start} 
                maximumDate={new Date(2020, 11, 30)} />
            )}
          </View>
          )}
          { (timeValue==="Monthly" || timeValue==="Climatology")&&(
            <>
            <View style = {styles.yearContainer}> 
            <Text>Start Year: </Text>
              <Picker
                selectedValue={selectedStartYear}
                style={styles.picker}
                onValueChange={(itemValue) => onChange(itemValue)}
              >
              {YEARS.map((item) => (
                <Picker.Item label={item} value={item} key={item} />
              ))}
              </Picker>
            </View>
            <View style = {styles.yearContainer}>
            <Text>End Year: </Text>
              { showButtonEnd2 && (
              <Picker
                selectedValue={selectedEndYear}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedEndYear(itemValue)}
              >
              {years2.map((item) => (
                <Picker.Item label={item} value={item} key={item} />
              ))}
              </Picker>
              )}
            </View>
            </>
              )}
        </View>
        <View style = {styles.buttonResult} >
          <Button color="#25166b" onPress={onClick} title="View results" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center",
  },
  buttonsDates:{
    backgroundColor: "#5834f7",
    position: "relative",
    marginTop: 30,
    width: 'auto',
  },
  buttonResult:{
    backgroundColor: "#5834f7",
    position: "relative",
    bottom: '-12%',
    width: '40%',
  },
  selectbox:{
    width:'80%',
  },
  picker:{
    height: 60, 
    width: 150
  },
  yearContainer:{
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  timeContainer:{
    paddingBottom: 20,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    textAlign: "center",
  }
});
