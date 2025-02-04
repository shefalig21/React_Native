import { View, Text,ScrollView } from 'react-native'
import React, {useState,useEffect} from 'react'

const ApiList = () => {

    const [data,setData]=useState([]);
    const getApiData=async()=>{

        const url="https://jsonplaceholder.typicode.com/posts";
        let result=await fetch(url);
        result=await result.json();
        setData(result);
    }
    useEffect(()=>{
        getApiData();
    },[]);

  return (
    <ScrollView>
      <Text style={{ fontSize: 27 }}>List with Api Call</Text>
      {
        data.length?
        data.map((item)=><View style={{ padding: 10,borderBottomColor: 'red',borderBottomWidth:1 }}>
                <Text style={{ fontSize: 14 }}>Id: {item.id}</Text>
                <Text style={{ fontSize: 14 }}>Title: {item.title}</Text>
                <Text style={{ fontSize: 14 }}>Body: {item.body}</Text>
            </View>
        )
        :null
      }
    </ScrollView>
  )
}

export default ApiList