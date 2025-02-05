import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

const LinearBox = () => {
  return (
    <View style={styles.container}>
        <LinearGradient
        colors={['red','blue']}
        style={styles.box}
        >
            <Text style={styles.text}>Gradient Box</Text>

        </LinearGradient>
      
    </View>
  )
}

export default LinearBox

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',

},
box:{
    width:200,
    height:200,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,

},
text:{
    color:'white',
    fontWeight:'bold',
    fontSize:20,
},

})