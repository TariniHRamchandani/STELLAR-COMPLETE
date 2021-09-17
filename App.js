import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/Home';
import DailypicScreen from './Screens/Dailypic';
import SpacecraftScreen from './Screens/Spacecraft';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StarmapScreen from './Screens/Starmap';

const Stack=createStackNavigator()
export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName='Home' screenOptions={{
       headerShown:false
     }}>
<Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>

<Stack.Screen name='Dailypic' component={DailypicScreen}></Stack.Screen>

<Stack.Screen name='Spacecraft' component={SpacecraftScreen}></Stack.Screen>
<Stack.Screen name='Starmap' component={StarmapScreen}></Stack.Screen>
     </Stack.Navigator>
   </NavigationContainer> 
  );
}
export default App;
