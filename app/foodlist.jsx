import { SafeAreaView, StyleSheet, Text, View , Image, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
const FoodList = () => {
    const router = useRouter();
const handleChange = () => {
    router.push('fooddetails')
}
    return (
        <SafeAreaView style = {styles.container}>
            <View>
                <Text style= {styles.textStyle}>Pick up your desired foods</Text>
            </View>
        <View style={[styles.boxstyle, styles.box1]}>
            <View>
                <Image source={require('../assets/veg.jpeg')} style={styles.imageStyle}/>
            </View>
            <View>
                <Image source={require('../assets/veg.jpeg')} style={styles.imageStyle}/>
            </View>
            <View>
                <Image source={require('../assets/veg.jpeg')} style={styles.imageStyle}/>
            </View>
            <View>
                <Image source={require('../assets/veg.jpeg')} style={styles.imageStyle}/>
            </View>

            <View>
                <Image source={require('../assets/veg.jpeg')} style={styles.imageStyle}/>
            </View>
            
        </View>
        <ScrollView style={[styles.boxstyle, styles.box2]}>
        <View style={styles.gridRow} >
            <TouchableOpacity style={styles.imageContainer} onPress={handleChange}>
            <View >
            <Image
              source={require('../assets/can1.jpg')}  style={styles.gridImage}
            />
            <Text style={styles.imageText}>Food 2</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer} onPress={handleChange}>
            <View >
            <Image
              source={require('../assets/can2.jpeg')}  style={styles.gridImage}
            />
            <Text style={styles.imageText}>Food 2</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={styles.gridRow} >
          <TouchableOpacity style={styles.imageContainer} onPress={handleChange}>
          <View >
            <Image
              source={require('../assets/can3.webp')}  style={styles.gridImage}
            />
            <Text style={styles.imageText}>Food 3</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer} onPress={handleChange}>
            <View >
            <Image
              source={require('../assets/can4.jpg')}  style={styles.gridImage}
            />
            <Text style={styles.imageText}>Food 1</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={styles.gridRow} >
            <TouchableOpacity style={styles.imageContainer} onPress={handleChange}>
            <View >
            <Image
              source={require('../assets/can1.jpg')}  style={styles.gridImage}
            />
            <Text style={styles.imageText}>Food 2</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer} onPress={handleChange}>
            <View >
            <Image
              source={require('../assets/can2.jpeg')}  style={styles.gridImage}
            />
            <Text style={styles.imageText}>Food 2</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={styles.gridRow} >
          <TouchableOpacity style={styles.imageContainer} onPress={handleChange}>
          <View >
            <Image
              source={require('../assets/can3.webp')}  style={styles.gridImage}
            />
            <Text style={styles.imageText}>Food 3</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer} onPress={handleChange}>
            <View >
            <Image
              source={require('../assets/can4.jpg')}  style={styles.gridImage}
            />
            <Text style={styles.imageText}>Food 1</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={styles.gridRow} >
            <TouchableOpacity style={styles.imageContainer} onPress={handleChange}>
            <View >
            <Image
              source={require('../assets/can1.jpg')}  style={styles.gridImage}
            />
            <Text style={styles.imageText}>Food 2</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer} onPress={handleChange}>
            <View >
            <Image
              source={require('../assets/can2.jpeg')}  style={styles.gridImage}
            />
            <Text style={styles.imageText}>Food 2</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={styles.gridRow} >
          <TouchableOpacity style={styles.imageContainer} onPress={handleChange}>
          <View >
            <Image
              source={require('../assets/can3.webp')}  style={styles.gridImage}
            />
            <Text style={styles.imageText}>Food 3</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer} onPress={handleChange}>
            <View >
            <Image
              source={require('../assets/can4.jpg')}  style={styles.gridImage}
            />
            <Text style={styles.imageText}>Food 1</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={styles.gridRow} >
            <TouchableOpacity style={styles.imageContainer} onPress={handleChange}>
            <View >
            <Image
              source={require('../assets/can1.jpg')}  style={styles.gridImage}
            />
            <Text style={styles.imageText}>Food 2</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer} onPress={handleChange}>
            <View >
            <Image
              source={require('../assets/can2.jpeg')}  style={styles.gridImage}
            />
            <Text style={styles.imageText}>Food 2</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={styles.gridRow} >
          <TouchableOpacity style={styles.imageContainer} onPress={handleChange}>
          <View >
            <Image
              source={require('../assets/can3.webp')}  style={styles.gridImage}
            />
            <Text style={styles.imageText}>Food 3</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer} onPress={handleChange}>
            <View >
            <Image
              source={require('../assets/can4.jpg')}  style={styles.gridImage}
            />
            <Text style={styles.imageText}>Food 1</Text>
            </View>
            </TouchableOpacity>
          </View>
         
          
          

        </ScrollView>    
        </SafeAreaView>
      )
    }
    
    export default FoodList
    
    const styles = StyleSheet.create({ 
        container : {
            flex : 1,
            flexDirection : 'column',
         },
         boxStyles : {
            width : '100%',
         },
         box1 : {
            flex : 0.1,
            backgroundColor : "#758694",
            justifyContent : 'space-evenly',
            alignItems : 'center',
            flexDirection : 'row',
            borderRadius : 80

         },
         box2 : {
            flex : 1,
            backgroundColor : "#96C9F4",
            marginTop : 10,
         },

         imageStyle : {
            width : 60,
            height : 60,
            borderRadius : 25,
            
         },
         textStyle : {
            fontSize : 20,
            alignSelf : 'center',
            marginBottom : 12
         },
         gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  imageContainer: {
    width: '48%',
    height: 150,
    marginTop : 10,
    position: 'relative', // Required for absolute positioning of text
  },
  gridImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  imageText: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    padding: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  }
    
    })