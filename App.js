import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import IntroductionScreen from "./components/IntroductionScreen";
import DailyResumeScreen from "./components/DailyResumeScreen";
import MapScreen from "./components/MapScreen";
import MenuScreen from "./components/MenuScreen";
import StatisticsScreen from "./components/StatisticsScreen";
import StatistiscData from "./components/StatisticsScreen/information";
import WelcommeScreen from './components/WelcommeScreen';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();
const initialState ={
  showApp: false


}
const reducer =(state=initialState, action)=>{
  switch(action.type)
  {
    case 'CHANGE_SHOWAPP':
      return {showApp: !state.showApp}
  }
  return state
}
const store = createStore(reducer)

export default function App() {
  return (
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Introduction" component={IntroductionScreen} />
            <Stack.Screen name="Daily" component={DailyResumeScreen} />
            <Stack.Screen name="Map" component={MapScreen} />
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Statistics" component={StatistiscData} />
            <Stack.Screen name="Welcomme" component={WelcommeScreen} />
            <Stack.Screen name="StatisticsGraphics" component={StatisticsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  )
}
