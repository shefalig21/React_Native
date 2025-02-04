import { View, Text } from 'react-native'
import React, {useState,useEffect} from 'react'

const ApiTry = () => {
    const [data,setData]=useState(undefined);


    const getApi= async ()=>{
        const url='https://jsonplaceholder.typicode.com/posts/1'
        let result= await fetch(url)
        result= await result.json()
        setData(result)

    }
    useEffect(() => {
        getApi();
    },[])
  return (
    <View>
      <Text>ApiTry</Text> {
        data? <View>
            <Text> id 
                { data.title}
            </Text>
        </View> :null
      }
    </View>
  )
}

export default ApiTry