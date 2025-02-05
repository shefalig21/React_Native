import { View, Text } from 'react-native'
import React from 'react'
import { GestureHandlerRootView,PanGestureHandler } from 'react-native-gesture-handler'

const GestureHand = () => {
  return (
    <GestureHandlerRootView>
        <PanGestureHandler onGestureEvent={(event)=>console.log(event.nativeEvent)}>
            <View>
                <Text>Drag Me</Text>
            </View>
        </PanGestureHandler>
    </GestureHandlerRootView>
  )
}

export default GestureHand