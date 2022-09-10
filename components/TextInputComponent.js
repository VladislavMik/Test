import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

const TextInputComponent = ({placeholder, textContentType, style, errorMessage, placeholderTextColor,value, onChangeText}) => {
    
    


    return <View> 
    <TextInput 
    
    style={style}
    placeholder={placeholder}
    placeholderTextColor={placeholderTextColor}
    value={value}
    onChangeText={onChangeText}
    autoCapitalize={false}
    textContentType={textContentType}
    autoComplete='off'
    autoCorrect={false}
    
    />
    <Text style={{color: 'red', marginLeft: 100, marginTop: 20}}>{errorMessage}</Text>
</View>
}

const styles = StyleSheet.create({
    textInput: {
            
           
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            width: 350,
            height: 45,
            alignItems: 'center'
    }
})




export default TextInputComponent;