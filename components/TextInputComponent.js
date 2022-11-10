/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';

const TextInputComponent = ({
  placeholder = '',
  isPasswordSecured = false,
  isDisplayEye = false,
  style,
  errorMessage = null,
  placeholderTextColor = 'white',
  value,
  onChangeText,
  onEndEditing,
  onBlur,
}) => {
  const [passwordSecured, setPasswordSecured] = useState(true);

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={[
            style,
            {borderBottomWidth: 0.9, borderBottomColor: '#e1e3e7'},
          ]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={onChangeText}
          autoCapitalize={false}
          autoComplete="off"
          autoCorrect={false}
          secureTextEntry={isPasswordSecured && passwordSecured}
          clearButtonMode="while-editing"
          defaultValue=""
          onEndEditing={onEndEditing}
          onBlur={onBlur}
        />
        {isDisplayEye && (
          <TouchableOpacity
            onPress={() => setPasswordSecured(!passwordSecured)}>
            <Icon
              name="eye"
              type="ant-design"
              color="#c6cbd4"
              size={24}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={{maxWidth: 320}}>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      </View>
    </View>
  );
};

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
    paddingTop: 10,
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
    maxWidth: 340,
    paddingLeft: 0,
  },
});

export default TextInputComponent;
