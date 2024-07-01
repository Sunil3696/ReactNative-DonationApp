import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
const CongratulationPage = ({ navigation }) => {
    const router = useRouter();
    const handleClick = () =>{
        router.push('/dashboard')
    }
  return (
    <View style={styles.container}>
        <Text style={styles.congratText}>Congratulations!</Text>
        <Text style={styles.labelText}>You Request being looked up. You will get email once the request is approved!</Text>
        <TouchableOpacity style={styles.buttonStyle} onPress={handleClick}>
            <Text style={styles.buttonText}>Goto Home</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  congratText : {
    fontSize : 25,
    fontWeight : 'bold',
   
  },
  buttonStyle : {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    width : '40%',
    alignItems : 'center'
  },
  buttonText : {
    fontSize : 24
  },
  labelText : {
    fontSize : 16,
    alignItems : 'center',
    padding : 20,
    marginBottom: 30,
  }
});

export default CongratulationPage;
