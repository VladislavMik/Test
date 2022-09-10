import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

const TextInputComponent = ({placeholder, textContentType, errorMessage, placeholderTextColor,value, onChangeText}) => {
    
    


    return <View> 
    <TextInput 
    style={styles.textInput}
    placeholder={placeholder}
    placeholderTextColor={placeholderTextColor}
    value={value}
    onChangeText={onChangeText}
    autoCapitalize={false}
    textContentType={textContentType}
    autoComplete='off'
    autoCorrect={false}
    
    />
    <Text>{errorMessage}</Text>
</View>
}

const styles = StyleSheet.create({
    textInput: {
       
            backgroundColor: '#FFC0CB',
            borderRadius: 30,
            width: '70%',
            height: 45,
            alignItems: 'center'
    }
})




export default TextInputComponent;