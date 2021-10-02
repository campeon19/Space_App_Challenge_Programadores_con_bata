import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import IntroductionScreen from "./components/IntroductionScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="introduction" component={IntroductionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}
