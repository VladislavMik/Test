
import auth from '@react-native-firebase/auth'



  export const handleLogin = (email, password) => {
    auth()
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged with:', user.email)
    })
    .catch(error => alert(error.message))
  }
 



 