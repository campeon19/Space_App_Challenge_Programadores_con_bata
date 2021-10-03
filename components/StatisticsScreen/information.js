import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Information () {
  const dataTypes = ["Temporal","Application"];
  const years = [];
  const times = ["Hourly","Daily", "Monthly", "Climatology"]
  const [selectedValue, setSelectedValue] = useState("Temporal");
  const [timeValue, setTimeValue] = useState("Hourly");
  const [start, setStart] = useState(new Date(1598051730000));
  const [end, setEnd] = useState(new Date(1598051730000));
  const [showButtonEnd, setShowButtonEnd] = useState(false);
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);

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
  const fillingYears = () => {
    for(let i = 0; i <= 40 ; i++){
      years.push((1981 + i));
    }
  } 

  useEffect(() => {
    fillingYears();
  }, []);

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
          {dataTypes.map((item)=>(
              <Picker.Item label={item} value={item} key={item} />
          ))}
        </Picker>
        <View>
          {selectedValue === "Temporal"?(
              <><Picker
                      selectedValue={timeValue}
                      style={{ height: 50, width: 150 }}
                      onValueChange={(itemValue) => setTimeValue(itemValue)}
                  >
                      {times.map((item) => (
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
                          </>
          ): selectedValue === "Application"?(
              <Text>Texto de prueba</Text>
              ): null}
        </View>
        <Text style={styles.buttonsDates}>{selectedValue + "-" + timeValue + "\n" + start.getMonth() + " " + end.getMonth()}</Text>
    </View>
  );
}

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