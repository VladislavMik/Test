
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import TextInputComponent from '../components/TextInputComponent'




const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const isEmailValid = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }

  const [text, setText] = useState('')
  const errorNew = (text) => {
    if (text.length === 0) {
      return null
    }
    else if (text.length < 4) {
      return <Text>Too short password!</Text>
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
      <View style={styles.inputEmail}>
        <TextInputComponent
          placeholder={placeholder = 'Email...'}
          placeholderTextColor={placeholderTextColor = 'white'}
          onChangeText={(text) => setEmail(text)}
          textContentType={textContentType = 'emailAddress'}
        />
        {!isEmailValid(email) && email.length > 0 && (<Text style={{ color: 'red' }}>Email Address is not Valid</Text>)}
      </View>
      <View style={styles.inputEmail}>
        <TextInputComponent
          placeholder={placeholder = 'Password'}
          placeholderTextColor={placeholderTextColor = 'white'}
          secureTextEntry={secureTextEntry = true}
          value={text}
          onChangeText={setText}
          errorMessage={errorNew(text)}

        />
      </View>

      <View style={styles.loginBtn}>
        <ButtonComponent title={title = 'LoginIn'} onPress={onClick} />
      </View>
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
  inputEmail: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 40,
    alignItems: 'center',
  },

  loginBtn: {
    width: '40%',
    borderRadius: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FFC0CB'
  }

})


export default LoginScreen