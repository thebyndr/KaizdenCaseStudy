import React, { useEffect,useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator,TransitionPresets,CardStyleInterpolators,HeaderStyleInterpolators} from  '@react-navigation/stack';
import { View, Text,Image } from 'react-native';
import Homepage from '../Screens/Homepage';
import DetailPage from '../Screens/DetailPage';
const Stack = createStackNavigator();










const Navigation = () => {
    return (
      
            <Stack.Navigator initialRouteName='Homepage' >
                 <Stack.Screen name="Homepage" component={Homepage} options={{headerShown: false,...TransitionPresets.SlideFromRightIOS}} />
                <Stack.Screen name="DetailPage" component={DetailPage} options={{headerShown: false,...TransitionPresets.RevealFromBottomAndroid}} />
        
            </Stack.Navigator>

   
    );
    
};
export default function NavigationCaseStudy() {
 
    return (
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
    );
  }
