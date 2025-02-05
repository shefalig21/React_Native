import { Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const TouchEvent = () => {
  return (
    <View>
        <TouchableOpacity onPress={()=>alert("Button Pressed!")}>
        <Text style={{ fontSize:25, color:'green',marginBottom:15 }}>Press Me</Text>

        </TouchableOpacity>

        <TouchableOpacity onPressIn={()=>alert("Long Press is pressed")}>
            <Text style={{ fontSize:25, color:'green',marginBottom:15 }} >Long Press Me</Text>
        </TouchableOpacity>

        <TouchableOpacity onPressIn={() => console.log('Press In')}
        >
            <Text >Press In</Text>

        </TouchableOpacity>

        
    </View>
  )
}

export default TouchEvent
