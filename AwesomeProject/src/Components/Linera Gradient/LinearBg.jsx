import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const LinearBg = () => {
  return (
   
      <LinearGradient
      colors={['#FF5733', '#FFBD33', '#33FF57']}
      style={styles.background}
      >
        <View style={styles.content}>
            <Text style={styles.text}>Gradient</Text>

        </View>

      </LinearGradient>

  )
}

export default LinearBg

const styles = StyleSheet.create({
    background:{
        flex:1,
    },
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    text:{
        fontSize:24,
        fontWeight:'bold',
        color:'white',
    },
})