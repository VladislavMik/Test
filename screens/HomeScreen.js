import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


const HomeScreen = ({navigation}) => {

   



    return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home</Text> 
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text>Sign Out</Text>
        </TouchableOpacity>
    </View>
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 15
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    }
})


export default HomeScreen