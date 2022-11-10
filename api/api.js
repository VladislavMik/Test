import {firebase} from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const signOut = async () => {
  try {
    await firebase.auth().signOut();
    console.log('signOut');
  } catch (e) {
    return e;
  }
};

export const writeDatabase = async (email, password) => {
  try {
    await database().ref('users').push().set({
      email: email,
    });
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    return error.code;
  }
};

export const signIn = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (e) {
    return e.nativeErrorMessage;
  }
};
