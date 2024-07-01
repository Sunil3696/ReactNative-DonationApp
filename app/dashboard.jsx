import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View , Image} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Dashbaord = () => {
const router = useRouter();

const handleClick = () => {
    router.push('/foodlist')
}
const handleProfile = () => {
  router.push('/profile');
  console.log('Clicked ')
}

  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.header} >
    <Text onPress={handleProfile} style={styles.welcomeText}  >Welcome, User!</Text>
    <TouchableOpacity onPress={handleProfile}  >
    <Image  source={require('../assets/profileicon.webp')}  style={styles.profileStyel} />

    </TouchableOpacity>
    </View>

    <View  style={styles.scrollviewStyle}>
    <ScrollView >
    <TouchableOpacity style={styles.touchStyle} onPress = {handleClick}>
      <Image source={require('../assets/veg.jpeg')} style= {styles.optionImage}/>
      <Text style={styles.optionText}>Veg</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.touchStyle} onPress = {handleClick}>
      <Image source={require('../assets/nonveg.jpg')} style= {styles.optionImage}/>
      <Text style={styles.optionText}>Non-Veg</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.touchStyle} onPress = {handleClick}>
      <Image source={require('../assets/mixed.jpg')} style= {styles.optionImage}/>
      <Text style={styles.optionText}>Mixed</Text>
    </TouchableOpacity>
 
    </ScrollView>
    </View>
    </SafeAreaView>
  )
}

export default Dashbaord

const styles = StyleSheet.create({
    container: {
      flexDirection : 'column',
        flex: 1,
        // backgroundColor : "red",
        padding : 20,
        justifyContent : 'center'

    },
    header : {
        marginTop: 0,
        marginBottom : 10,
        justifyContent : 'flex-end',
        alignContent : 'center',
        alignItems : 'center',
        flexDirection: 'row',
    },
    welcomeText: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      touchStyle : {
        width: '100%',
        height: 200,
        marginBottom: 20,
    position: 'relative',
      },
        optionImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
      },
      optionText : {
      bottom: 0,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: '#ffffff',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      position: 'absolute',
      padding: 10,
      fontSize: 25,
      fontWeight: 'bold',
      },
      scrollviewStyle : {
      justifyContent : 'center',

      },
      profileStyel :{
        height : 45,
        width : 45
      }

     
})