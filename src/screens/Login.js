import React, {useState} from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {firebase} from '../../config';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   
    loginUser = async(email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error){
            alert(error.message)
        }
    }
    return (
        <View style={Styles.container}>
            <Text style={styles.title}>Login</Text>

            <View>
                <TextInput
                style={styles.input}
                placeholder= 'Email'
                onChangeText={(email) => setEmail(email)}
                autoCapitalize='none'
                autoCorrect={true}
                />
                 <TextInput
                style={styles.input}
                placeholder= 'Password'
                onChangeText={(password) => setPassword(password)}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
                />
            </View>
            <TouchableOpacity
            onPress={() => loginUser(email, password)}
            style={styles.button}
            >
                <Text style={styles.InputText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('Registration')}
            style={styles.button}
            >
                <Text style={styles.RegisterTitle}>
                    Don't have an account? Register Now
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
         backgroundColor: 'white',
         marginTop: 100,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 26,
    },
    input: {
        paddingTop: 20,
        paddingBottom: 10,
        width: 400,
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginBottom: 10,
        textAlign: "center",
        },
        button: {
            marginTop: 50,
            height: 70,
            width: 250,
            backgroundColor: '#00e4d0',
            alignItems: "center",
        justifyContent: "center",
    borderRadius: 50,   
     },
     InputText: {
        fontWeight: 'bold',
        fontSize: 22,
     },
     RegisterTitle: {
        marginTop: 20,
     },
})

export default Login;