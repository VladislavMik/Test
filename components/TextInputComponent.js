import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";


const TextInputComponent = ({ placeholder, isPasswordSecured = false, isDisplayEye = false, keyboardType, textContentType, style, errorMessage, placeholderTextColor, value, onChangeText }) => {
    
    const [passwordSecured, setPasswordSecured] = useState(true)
  

    return <View>
        <View style={{ flexDirection: 'row' }}>
            <TextInput
                style={[style, style = { borderBottomWidth: 0.9, borderBottomColor: '#e1e3e7' }]}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                value={value}
                onChangeText={onChangeText}
                autoCapitalize={false}
                textContentType={textContentType}
                autoComplete='off'
                autoCorrect={false}
                secureTextEntry={isPasswordSecured && passwordSecured}
                keyboardType={keyboardType}
                
            />
            {isDisplayEye && <TouchableOpacity onPress={() => setPasswordSecured(!passwordSecured)}>
                <Icon
                    name='eye'
                    type='ant-design'
                    color='#c6cbd4'
                    size={24}
                    style={styles.iconStyle}
                />
            </TouchableOpacity>}
        </View>
       
                <Text style={styles.errorMessage}>{errorMessage}</Text>
       
    </View>
}

const styles = StyleSheet.create({
    textInput: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: 350,
        alignItems: 'center',
    },
    iconStyle: {
        borderBottomWidth: 0.9,
        paddingBottom: 10,
        borderBottomColor: '#e1e3e7',
        paddingTop: 10
    },
    errorMessage: {
        color: 'red',
        marginTop: 10,
        maxWidth: 350,
        paddingLeft: 0,
    }
})

export default TextInputComponent;