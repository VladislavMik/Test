
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { Icon, Input } from "react-native-elements";
import ButtonComponent from "../components/ButtonComponent";
import TextInputComponent from '../components/TextInputComponent'
import FontAwesome from 'react-native-vector-icons/FontAwesome'



const LoginScreen = ({ navigation }) => {

  const [pinSecure, setPinSecure] = useState(true)

  const [email, setEmail] = useState()

  const [text, setText] = useState('')
  const errorNew = (text) => {
    if (text.length === 0) {
      return null
    }
    else if (text.length < 4) {
      return <Text >Too short password!</Text>
    }
    else {
      return null
    }
  }

  const onClick = () => {
    navigation.navigate('BotNavigation')
  }


  return (


    <View style={styles.container} >
      

      <Text style={{alignItems: 'flex-start', marginRight: 320, color: 'grey'}}>Email</Text>
        <TextInputComponent
          style={[styles.textInput, styles.emailInput]}
          
          placeholderTextColor={placeholderTextColor = 'black'}
          onChangeText={(text) => setEmail(text)}
          textContentType={textContentType = 'emailAddress'}
        />
      
      <Text style={{alignItems: 'flex-start', marginRight: 290, color: 'grey'}}>Password</Text>
        <TextInputComponent
          style={styles.textInput}
          placeholderTextColor={placeholderTextColor = 'black'}
          secureTextEntry={pinSecure}
          value={text}
          onChangeText={setText}
          errorMessage={errorNew(text)}

        />

      <TouchableOpacity
      onPress={() => onClick()}
      >
        <linearGradient colors={['#24C6DC', '#514A9D']}
        style={styles.gradientButton}>
          <Text style={styles.gradientButtonText}>SIGN IN</Text>
        </linearGradient>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputView: {
    alignItems: 'center',
  },
  gradientButtonText:{
    color: '#fff'
  },
  textInput: {        
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: -10,
    width: 350,
    height: 45,
    alignItems: 'center'
},
  emailInput: {
    marginBottom: 50
  },
  loginBtn: {
    width: '40%',
    borderRadius: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FFC0CB'
  },
  gradientButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 4
  }

})


export default LoginScreen