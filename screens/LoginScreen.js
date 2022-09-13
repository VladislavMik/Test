
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import TextInputComponent from '../components/TextInputComponent';
import { Icon } from "react-native-elements";






const LoginScreen = ({ navigation }) => {

  
  const [passwordSecured, setPasswordSecured] = useState(true)

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
    navigation.navigate('Profile')
  }


  return (
    <View style={styles.container} >
      
        <Text style={styles.studentText}>Hi Student</Text>
        <Text style={styles.continueText}>Sign in to continue</Text>
      <View style={styles.inputView}>
      <Text style={styles.emailText}>Email</Text>
        <TextInputComponent
          style={[styles.textInput, styles.emailInput]}
          
          placeholderTextColor={placeholderTextColor = 'black'}
          onChangeText={(text) => setEmail(text)}
          textContentType={textContentType = 'emailAddress'}
        />
        <Text style={styles.passwordText}>Password</Text>
      <View style={{display: 'flex', flexDirection: 'row'}}>
      
        <TextInputComponent
          style={[styles.textInput, styles.passwordInput]}
          placeholderTextColor={placeholderTextColor = 'black'}
          secureTextEntry={passwordSecured}
          value={text}
          onChangeText={setText}
          errorMessage={errorNew(text)}
          
        />
        <TouchableOpacity onPress={() => setPasswordSecured(!passwordSecured)}>
        <Icon
        name='eye'
        type='ant-design'
        color='#c6cbd4'
        size={24}
        style={styles.iconStyle}
        />
        </TouchableOpacity>
        </View>
    <TouchableOpacity style={styles.button} onPress={() => onClick()} >
      <LinearGradient
       start={{x: 0.1, y: 1.0}} end={{x: 0.6, y: 0.5}}
       colors={['#2855ae', '#3b64b6', '#7292cf']}
        style={styles.gradient}>
        <Text style={styles.text}>SIGN IN</Text>
        <Icon 
        name='arrowright'
        type='ant-design'
        color='white'
        size={28}
        style={{paddingLeft: 70}} />
        
      </LinearGradient>
      </TouchableOpacity>

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
    color:"white", 
    fontSize: 15 , 
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
    marginTop: -10,
    width: 316,
    height: 45,
    alignItems: 'center'
},
passwordInput: {
  width: 290
},
  emailInput: {
    marginBottom: 50
  },
  iconStyle: {
    borderBottomWidth: 0.9, 
    paddingBottom: 10, 
    borderBottomColor: '#e1e3e7'
  },
  gradient: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
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
  }


})


export default LoginScreen