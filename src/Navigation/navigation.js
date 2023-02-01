import React, { useEffect,useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator,TransitionPresets,CardStyleInterpolators,HeaderStyleInterpolators} from  '@react-navigation/stack';
import { View, Text,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from '../Screens/Homepage';
import DetailPage from '../Screens/DetailPage';
const Stack = createStackNavigator();

const Tab=createBottomTabNavigator()







    {/*const AppTabs=()=>{



const customTabBarStyle={
  
  headerShown:false,
  activeTintColor:'black',
  inactiveTintColor:'white',
 activeBackgroundColor:'red',
  inactiveBackgroundColor:'blue',
  labelPosition: 'below-icon',
  showLabel:true,
  labelStyle: {
      fontSize: 13,
      margin: 0,
      padding: 0,
    },
tabStyle:{

},

}   
return(
    <Tab.Navigator
    tabBarOptions={customTabBarStyle}
    >
      <Tab.Screen name={" "} component={Navigation}
        
        />

        <Tab.Screen name={'Homepage'} component={Homepage}
        
        />
      <Tab.Screen name={'DetailPage'} component={DetailPage}
        
        />
       
    
        
    </Tab.Navigator>
)


}*/}

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
