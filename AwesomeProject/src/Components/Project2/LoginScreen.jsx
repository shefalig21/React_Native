import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const LoginScreen= () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.formBox}>

                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    onChangeText={setEmail}
                    value={email}
                />

                <TextInput
                    placeholder="Enter Your Password"
                    style={styles.input}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    value={password}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Login" onPress={() => alert("Login pressed")} color="#4CAF50" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Forgot Password" onPress={() => console.log("Forgot Password")} color="#4CAF50" />
                    </View>

                </View>
                <View style={styles.signUpContainer}>
                    <Text style={styles.signUpText}>Don't have an account</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',

    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',

    },
    input: {
        width: '100%',
        height: 50,
        borderColor: 'lightblue',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10
    },
    formBox: {
        width: '100%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: '#000',

    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
    },
    button: {
        flex: 1,
        marginHorizontal: 10,
    },

    signUpContainer: {
        flexDirection: 'row',
        marginTop: 20,
        alignSelf: 'center',

    },
    signUpText: {
        fontSize: 20,
        color: 'red',

    },


});

export default LoginScreen;
