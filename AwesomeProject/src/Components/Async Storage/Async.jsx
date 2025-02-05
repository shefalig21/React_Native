import { View, Text,Button } from 'react-native'
import React, {useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Async = () => {

    const [user,setUser]=useState('');

    const setData=async()=>{
        await AsyncStorage.setItem("user","Shefali Gupta")
    }

    const getData=async()=>{
        const name=await AsyncStorage.getItem("user");
        console.warn(name);
        // setUser(name);

    }

    const removeData=async()=>{
        await AsyncStorage.removeItem("user");
        setUser('');


    }

  return (
    <View style={{ marginTop:100,marginLeft:30,marginRight:30 }}>
      <Text style={{ fontSize:40 }}>Async Storage in React Native | {user} </Text>
      <Button title='Set Data' onPress={setData}/>
      <Button title='Get Data' onPress={getData}/>
      <Button title='Remove Data' onPress={removeData}/>
    </View>
  )
}

export default Async