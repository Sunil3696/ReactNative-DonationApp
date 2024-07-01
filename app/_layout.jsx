import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
   <Stack>
    <Stack.Screen name="index" options={{headerShown : false}}/>
    <Stack.Screen name="signin" options={{headerShown : false}}/>
    <Stack.Screen name="signup" options={{headerShown : false}}/>
    <Stack.Screen name="dashboard" options={{headerShown : false}}/>
    <Stack.Screen name="foodlist" options={{headerShown : false}}/>
    <Stack.Screen name="fooddetails" options={{headerShown : false}}/>
    <Stack.Screen name="congratulations" options={{headerShown : false}}/>
    <Stack.Screen name="profile" options={{headerShown : false}}/>
    <Stack.Screen name="donations" options={{headerShown : false}}/>

    




   </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})