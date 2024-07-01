import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
const ProfileScreen = () => {
const router = useRouter();
const handleClick = () => {
    router.push('/donations')
}
const handleLogout = () => {
    router.push('/signin')
}
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>Profile</Text>
      </View>
    <View style={styles.profileContainer}>
        <Image source={require('../assets/profile.webp')} style={styles.imageStyle}/>
        <Text style={styles.textStyle}>NepDev</Text>
        <Text style={styles.textStyle}>nepdev@gmail.com</Text>
    </View>
    <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonText}>
                Edit Profile
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={handleClick}>
            <Text style={styles.buttonText}>
                You Donations or Peakup
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.buttonText}>
                Logout
            </Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  titleText : {
    fontSize : 24,
    fontWeight : 'bold'
  },
  profileContainer : {
    flex : 3,
    // backgroundColor : "red",
    justifyContent : 'center',
    alignItems : 'center'
  },
  actionContainer : {
 flex : 2,
    // backgroundColor : "green"
  },
  imageStyle : {
    width: 200,
    height: 200,
    borderRadius: 25,
    marginBottom: 10,
  },
  textStyle : {
    fontSize : 16
  },
  buttonStyle : {
    backgroundColor : 'green',
    width : "80%",
    alignItems : 'center',
    alignSelf : 'center',
    height : 40,
    justifyContent : 'center',
    borderRadius : 25,
    marginBottom: 15,

  },
  buttonText : {
    fontSize: 23
  },
  logoutButton : {
    backgroundColor : 'red',
    width : "80%",
    alignItems : 'center',
    alignSelf : 'center',
    height : 40,
    justifyContent : 'center',
    borderRadius : 25,
    marginBottom: 15,
  }
})
