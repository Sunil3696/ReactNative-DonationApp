import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'

const CustomInput = () => {
  return (
<View>
    <View style={styles.container}>
      <Text style= {styles.textStyle}>Enter you Email here</Text>
      <TextInput placeholder='Email Goes here' style={styles.inpuStyle}/>
    </View>
    <View style={styles.container}>
      <Text style= {styles.textStyle}>Enter you Email here</Text>
      <TextInput placeholder='Email Goes here' style={styles.inpuStyle}/>
    </View>
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
  container : {
    width : '100%',
    // backgroundColor : 'red',
    marginVertical : 20,
    alignItems : 'center'
  },
  inpuStyle : {
    width: '90%',
    height : 40,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
  },
  textStyle : {
    alignSelf : 'left',
    left : 25,
    fontSize : 18
  }
})