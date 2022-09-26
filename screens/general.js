import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../actions";
import { useEffect } from "react";


const General = () => {
  const counter = useSelector(state => state.counter)
  const currentUser = useSelector(state => state.currentUser)

  const dispatch = useDispatch()

  const user = {name: "Vlad"}
console.log(counter)
  useEffect(() => {
    dispatch(allActions.userActions.setUser(user))
  }, [])
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    {
      currentUser.loggedIn ? 
      <View>
        <Text>Hello, {currentUser.user.name}</Text>
        <Button onPress={() => dispatch(allActions.userActions.logOut())} title='Logout' />
      </View> 
      : 
      <View>
        <Text>Login</Text>
        <Button onPress={() => dispatch(allActions.userActions.setUser(user))} title='Login as Vlad' />
      </View>
      }
    <Text>Counter: {counter}</Text>
    <Button onPress={() => dispatch(allActions.counterActions.increment())} title='Increase Counter' />
    <Button onPress={() => dispatch(allActions.counterActions.decrement())} title='Decrease Counter' />
  </View>
);
  
}

export default General