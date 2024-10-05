// MainStack.js

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Screen1 from '../Screens/screen1';
import Screen2 from '../Screens/screen2';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
// const Stack = createBottomTabNavigator();

function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Screen1"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
