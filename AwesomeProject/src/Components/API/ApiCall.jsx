import { View, Text } from 'react-native'
import React, { useEffect,useState } from 'react'

const ApiCall = () => {

    const [data ,setData]=useState(undefined);
 
   const getApi=async()=>{
    const url='https://jsonplaceholder.typicode.com/posts/1'
   
        let result=await fetch (url) ;
        result=await result.json() ;
        setData(result)
 
   }

    useEffect(()=>{
        getApi()
    },[])

  return (
    <View>
      <Text style={{ fontSize:27 }}>ApiCall</Text>
      {
        data ? <View> 
            <Text> data is shown </Text>
            <Text>{data.id}</Text>
            <Text>{data.title}</Text>
            </View> : null 
      }
    </View>
  )
}

export default ApiCall
