import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Donations = () => {
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.donation}>
       <Text style={styles.header}>You Donations Till now</Text>
        <ScrollView>
            <TouchableOpacity style={styles.listViewStyle}>
                <Text style={styles.listViewText}> Canned Tuna Fish : 5 Pcs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listViewStyle}>
                <Text style={styles.listViewText}> Shampoo : 15 Pcs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listViewStyle}>
                <Text style={styles.listViewText}> Yogurt : 5 Pcs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listViewStyle}>
                <Text style={styles.listViewText}> Tea : 5 Pcs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listViewStyle}>
                <Text style={styles.listViewText}> Juice : 5 Pcs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listViewStyle}>
                <Text style={styles.listViewText}> Curd : 5 Pcs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listViewStyle}>
                <Text style={styles.listViewText}> Pork Meat : 5 Pcs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listViewStyle}>
                <Text style={styles.listViewText}> Sugar : 5 Pcs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listViewStyle}>
                <Text style={styles.listViewText}> Rice : 5 Pcs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listViewStyle}>
                <Text style={styles.listViewText}> Vegtable Oil: 5 Pcs</Text>
            </TouchableOpacity>
        </ScrollView>
       </View>
       <View style={styles.peakup}>
       <Text style={styles.header}>You Donations Till now</Text>
       <ScrollView>
       <TouchableOpacity style={styles.listViewStyle}>
                <Text style={styles.listViewText}> Canned Tuna Fish : 5 Pcs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listViewStyle}>
                <Text style={styles.listViewText}> Shampoo : 15 Pcs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listViewStyle}>
                <Text style={styles.listViewText}> Yogurt : 5 Pcs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listViewStyle}>
                <Text style={styles.listViewText}> Tea : 5 Pcs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listViewStyle}>
                <Text style={styles.listViewText}> Juice : 5 Pcs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listViewStyle}>
                <Text style={styles.listViewText}> Curd : 5 Pcs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listViewStyle}>
                <Text style={styles.listViewText}> Pork Meat : 5 Pcs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listViewStyle}>
                <Text style={styles.listViewText}> Sugar : 5 Pcs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listViewStyle}>
                <Text style={styles.listViewText}> Rice : 5 Pcs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listViewStyle}>
                <Text style={styles.listViewText}> Vegtable Oil: 5 Pcs</Text>
            </TouchableOpacity>
        </ScrollView>
       </View>
    </SafeAreaView>
  )
}

export default Donations

const styles = StyleSheet.create({
    container : {
        // backgroundColor : 'red',
        flex : 1
    },
    header : {
        fontSize : 24,
        alignSelf : 'center',
        padding : 20,
        backgroundColor : 'gray',
        width : '100%'
    },
    donation : {
        flex : 1,
        // backgroundColor : 'red'
    },
    peakup : {
        flex : 1,
        //  backgroundColor : 'green'
    },
    listViewStyle : {
        padding : 5,
        // backgroundColor : 'cyan',
        borderColor : 'green',
        borderWidth : 2,
        marginBottom : 3
    },
    listViewText : {
        fontSize : 20
    }
})