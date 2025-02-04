import { View, Text,Button,TextInput } from 'react-native'
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// createBottomTabNavigator ka instance bnayenge basically exceutable function iske andar daal rhe hain
const Tab=createBottomTabNavigator();

const TabNav = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Login' component={Login}/>
            <Tab.Screen name='Sign Up' component={SignUp}/>

        </Tab.Navigator>

    </NavigationContainer>
  )
}

const Login=()=>{
    return(
        <View style={{ flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{ fontSize:40 }}>Login</Text>
        </View>
    )
}

const SignUp=()=>{
    return(
        <View style={{ flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{ fontSize:40 }}>Sign Up</Text>
        </View>
    )
}

export default TabNav