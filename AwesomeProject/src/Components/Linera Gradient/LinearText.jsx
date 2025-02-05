import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const LinearText = () => {
  return (
    <View style={styles.container}>
        <LinearGradient
        colors={['purple','orange']}
        style={styles.textGradient}
        >
            <Text style={styles.text}>Gradient Style</Text>

        </LinearGradient>
      
    </View>
  )
}

export default LinearText

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#fff',
    },
    textGradient:{
        padding:10,
        borderRadius:5,
    },
    text:{
        fontSize:25,
        fontWeight:'bold',
        color:'white',

    },

})