
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import TextInputComponent from '../components/TextInputComponent';
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister } from "../actions/registerAction";
import { fetchLogin } from '../actions/signInAction'
import { validationEmail, validationPassword, emailErrorMessage, passwordErrorMessage} from "../utils/validation";
import { useNavigation } from "@react-navigation/native";


const LoginScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const emailError = useSelector(state => state.emailError)
  const passwordError = useSelector(state => state.passwordError)

  return (
    <View style={styles.container} >
      <Text style={styles.studentText}>Hi Student</Text>
      <Text style={styles.continueText}>Sign in to continue</Text>
      <View style={styles.inputView}>
        <Text style={styles.emailText}>Email</Text>
        <TextInputComponent
          style={[styles.textInput, styles.emailInput]}
          value={email}
          placeholderTextColor={placeholderTextColor = 'black'}
          onChangeText={email => {
            setEmail(email);
            validationEmail(email)
          }}
          textContentType={textContentType = 'emailAddress'}
          errorMessage={emailError}
          
        />
        {validationEmail(email) !== null ? <Text style={{color: 'red'}}>{emailErrorMessage}</Text> : null}
        <Text style={styles.passwordText}>Password</Text>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <TextInputComponent
            style={[styles.textInput, styles.passwordInput]}
            placeholderTextColor={placeholderTextColor = 'black'}
            value={password}
            onChangeText={(password) => {
              setPassword(password);
              validationPassword(password)
            }}
            errorMessage={passwordError}
            isDisplayEye
            isPasswordSecured
          />
        </View>
        {validationPassword(password) !== null ? <Text style={{color: 'red'}}>{passwordErrorMessage}</Text> : null}
        <View style={{ paddingTop: 30 }}>
          <TouchableOpacity style={styles.button} onPress={() => dispatch(fetchLogin(email, password))} >
            <LinearGradient
              start={{ x: 0.1, y: 1.0 }} end={{ x: 0.6, y: 0.5 }}
              colors={['#2855ae', '#3b64b6', '#7292cf']}
              style={styles.gradient}>
              <Text style={styles.text}>SIGN IN</Text>
              <Icon
                name='arrowright'
                type='ant-design'
                color='white'
                size={28}
                style={{ paddingLeft: 70 }} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => dispatch(fetchRegister(email, password))} >
            <LinearGradient
              start={{ x: 0.1, y: 1.0 }} end={{ x: 0.6, y: 0.5 }}
              colors={['#2855ae', '#3b64b6', '#7292cf']}
              style={styles.gradient}>
              <Text style={styles.text}>Register</Text>
              <Icon
                name='arrowright'
                type='ant-design'
                color='white'
                size={28}
                style={{ paddingLeft: 70 }} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5278c1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 400,
  },
  emailText: {
    marginRight: 280,
    color: 'grey'
  },
  continueText: {
    color: 'gainsboro',
    fontSize: 15,
    marginRight: 230,
    marginBottom: 50
  },
  studentText: {
    color: "white",
    fontSize: 15,
    marginRight: 280,
    marginBottom: 30
  },
  forgotText: {
    paddingTop: 20,
    marginLeft: 190,
    fontSize: 15,
    color: '#646464'
  },
  passwordText: {
    paddingTop: 20,
    paddingRight: 260,
    color: 'grey'
  },
  inputView: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 50,
    height: 1000
  },
  textInput: {
    borderBottomColor: 'black',
    width: 316,
    height: 45,
    alignItems: 'center'
  },
  passwordInput: {
    width: 290,
    
    
  },
  emailInput: {
  
  },
  gradient: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 5,
    display: 'flex',
    height: 50
  },
  button: {
    width: 316,
    height: 56,
  },
  text: {
    color: 'white',
    fontSize: 16,
    paddingLeft: 110
  },
  textError: {
    color: 'red'
  }
})

export default LoginScreen










