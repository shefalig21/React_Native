import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// iska firse createMaterialTopTabNavigator function bnayenge
const Tab=createMaterialTopTabNavigator();
const TopTabNav = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>

            <Tab.Screen name='Login' component={Login}/>
            <Tab.Screen name='SignUp' component={SignUp}/>
            {/* maanlo isme ek aur screen bna rha hu but voh inme se koi ek screen hi kholegi */}
            <Tab.Screen name='Other' component={SignUp}/>

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
            <Text style={{ fontSize:40 }}>SignUp</Text>
        </View>

    )
}
export default TopTabNav
