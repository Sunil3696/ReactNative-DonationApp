import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { useRouter } from 'expo-router'
const Signin = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/dashboard')
  }
  return (
    <SafeAreaView style = {styles.container}>
      <Text style={styles.signInText}>Sign In</Text>

      <View style={styles.formContainer}>
      <Text style={styles.label}>Email: </Text>
      <TextInput placeholder= "Email goes here" style={styles.input} keyboardType='email-address'  />
      <Text style={styles.label}>Password: </Text>
      <TextInput placeholder= "Password goes here" style={styles.input} secureTextEntry={true} />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default Signin

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "#ffffff",
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  signInText : {
    fontSize: 24,
    fontWeight: 'bold',
    // backgroundColor: 'red',
    marginTop : 30
  },
  input : {
    width: '90%',
    padding: 15,
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 15,
    marginBottom: 20,
  },
  label : {
    fontSize: 20,
    marginBottom: 5,
    alignSelf: 'left',
    marginLeft: 40
  },
  formContainer : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // backgroundColor : "red"
  },
  loginButton: {
    width: '80%',
    backgroundColor: 'green',
    borderRadius: 5,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

})