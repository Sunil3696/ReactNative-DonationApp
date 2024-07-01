import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { useRouter } from 'expo-router'
const FoodDetails = () => {
    const router = useRouter();
    const handleclick = ()=> {
        router.push('/congratulations')
    }
  return (
    <SafeAreaView style={styles.containerStyle}>
        <ScrollView>
      <Text style={styles.headerStyle}>Canned Tuna Fish</Text>
      <Image  source={require('../assets/can2.jpeg')} style={styles.imageStyle} />
        <View style={styles.detailsContainer}>
            <Text style={styles.title}>Product Name: Canned Tuna Fish</Text>
            <Text style={styles.textStyle}>Product Name: Canned Tuna Fish</Text>
            <Text style={styles.textStyle}>Product Qunatity: 250 Pcs</Text>
            <Text style={styles.textStyle}>Supplier: NepDev</Text>
            <Text style={styles.textStyle}>Date of Expiry: 2024-12-31</Text>
            <View style={styles.quantityInputContainer}>
            <Text style={styles.textStyle}>Product Name:</Text>
                <TextInput placeholder="Enter Quatity" style={styles.quantityInput}></TextInput>
            </View>

            <TouchableOpacity style={styles.buttonStyle} onPress={handleclick}>
                <Text style={styles.buttonText}>Submit Request</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.similarProductsContainer}>
        <Text style={styles.similarTitle}>Similar Products</Text>
        <ScrollView horizontal>
            <TouchableOpacity style={styles.similarProduct}>
                <Image source={require('../assets/can3.webp')}  style={styles.similarProductImage}/>
                <Text style={styles.similatText}>Dal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.similarProduct}>
                <Image source={require('../assets/can1.jpg')}  style={styles.similarProductImage}/>
                <Text style={styles.similatText}>Dal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.similarProduct}>
                <Image source={require('../assets/can5.jpeg')}  style={styles.similarProductImage}/>
                <Text style={styles.similatText}>Dal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.similarProduct}>
                <Image source={require('../assets/can2.jpeg')}  style={styles.similarProductImage}/>
                <Text style={styles.similatText}>Dal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.similarProduct}>
                <Image source={require('../assets/can5.jpeg')}  style={styles.similarProductImage}/>
                <Text style={styles.similatText}>Dal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.similarProduct}>
                <Image source={require('../assets/can3.webp')}  style={styles.similarProductImage}/>
                <Text style={styles.similatText}>Dal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.similarProduct}>
                <Image source={require('../assets/can1.jpg')}  style={styles.similarProductImage}/>
                <Text style={styles.similatText}>Dal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.similarProduct}>
                <Image source={require('../assets/can5.jpeg')}  style={styles.similarProductImage}/>
                <Text style={styles.similatText}>Dal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.similarProduct}>
                <Image source={require('../assets/can2.jpeg')}  style={styles.similarProductImage}/>
                <Text style={styles.similatText}>Dal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.similarProduct}>
                <Image source={require('../assets/can5.jpeg')}  style={styles.similarProductImage}/>
                <Text style={styles.similatText}>Dal</Text>
            </TouchableOpacity>
        </ScrollView>
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default FoodDetails

const styles = StyleSheet.create({
    containerStyle : {
        flex: 1,
        // backgroundColor : 'green'
    },
    headerStyle : {
        fontSize : 25,
        alignSelf : 'center',
        padding : 8,
        fontWeight : 'bold'
    },
    imageStyle : {
        width: '100%',
        height: 300,
        marginBottom: 20,
        borderRadius: 10,
    },
    detailsContainer : {
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: '#f0f0f0',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    title : {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    textStyle: {
        fontSize: 16,
        marginBottom: 5,
      },
      quantityInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      quantityInput: {
        width : '60%',
        height: 50,
        marginLeft: 10,
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 5,
        fontSize: 24,
      },
      buttonStyle : {
        backgroundColor : 'green',
        borderRadius : 5,
        padding : 5,
        width : '80%',
        height : 30,
        alignItems: 'center',
        alignSelf : 'center',
        justifyContent : 'center'
      },
      buttonText : {
        fontSize : 20,
        color : 'white'
      },
      similarProductsContainer : {
        padding: 20,
        backgroundColor: '#ffffff',
        borderTopColor: '#ccc',
      },
      similarProduct: {
        marginRight: 15,
        alignItems: 'center',
      },
      similarProductImage: {
        width: 150,
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
      },
      similatText: {
        fontSize: 14,
        bottom: 5,
        textAlign: 'center',
      },
      similarTitle : {
        fontSize : 20,
        alignSelf : 'center',
        fontWeight : 'bold'
      }
})