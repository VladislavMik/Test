import React from "react";
import {View, StyleSheet, Text} from 'react-native'
import { TextInput } from "react-native-paper";
import TextInputComponent from "../components/TextInputComponent";



const Profile = ({navigation}) => {



    return (
        <View style={styles.container}>
            <View style={styles.firstInputView}>
      <TextInputComponent 
      style={styles.firstInput}
      />
      <TextInputComponent 
      style={styles.secondInput}
      />
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    firstInputView: {
    
        flexDirection: 'row',
        backgroundColor: 'red',
        width: '100%'

    },
    firstInput: {
        backgroundColor: 'yellow',
        width: '100%',
        
    },
    secondInput: {
        backgroundColor: 'blue'
    }
})

export default Profile