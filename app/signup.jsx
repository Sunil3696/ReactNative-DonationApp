import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View , Image} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { useRouter } from 'expo-router'
import CustomInput from './components/custominputs'
const SignUp= () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard')
  }
  return (
    <SafeAreaView style = {styles.container}>
      <View style={styles.header}>
      <Text style={styles.signupText}>Signup</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/donation.jpg')} style={styles.image} />
      </View>
      <View style={styles.form}>
        <CustomInput></CustomInput>
      </View>
      <TouchableOpacity style={styles.signinButton} onPress={handleClick}>
      <Text style={styles.buttonText} >Signup</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>or</Text>
      <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleButtonText}>Signup with Google</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "#ffffff",
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    padding: 20,
  },
  header : {
    alignItems : 'center',
    marginBottom : 20
  },
  signupText : {
    fontSize : 24,
    fontWeight : 'bold'
  },
  imageContainer : {
    alignItems: 'center',
    marginBottom: 20,
  },
  image : {
    width: 280,
    height: 280,
  },
  form : {
    flex : 1,
  },
  signinButton : {
    marginTop: 90,
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    alignSelf : 'center',

   
  },
  buttonText : {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  googleButton: {
    marginTop: 5,
    backgroundColor: '#DB4437',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    alignSelf : 'center',
    marginBottom: 30, 
  },
  googleButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText : {
    alignSelf  : 'center',
    padding : 20,
    fontSize : 24
  }
})