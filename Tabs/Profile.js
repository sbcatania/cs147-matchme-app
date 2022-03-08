import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput, FlatList, Pressable, Image } from 'react-native';
import Fundraiser from './Donation/Fundraiser'
import { useNavigation } from '@react-navigation/native';
import NumericInput from 'react-native-numeric-input';
import { COLORS, IMAGES } from '../Constants';
import { SafeAreaView } from 'react-native-safe-area-context';
/*
* DOCUMENTATION
* 
* QUESTIONS
* 
* TODO
*/

// Main fn
export default function Profile() {

    // NAVIGATION: Setup nav between pages
    const navigation = useNavigation();

    // Show up on page
    return (
        <View style={styles.container}>
        <ScrollView style = {styles.scrollView}>
        
            <Image source={require('../assets/Home/logogreen.png')} style={styles.logoimg}>
            </Image>
            <View style = {styles.row}> 
            <Image style = {styles.profimg} source = {require('../assets/Users/pablo.png')}></Image>
            <View style = {styles.col}>
            <Text style = {styles.blacktext}> Pablo O </Text>
            <Text style = {styles.graytext}> 24 donations   10 matches </Text>
            </View>
            </View>
            <Image style = {styles.impactimg} source = {require('../assets/Profile/ImpactStat.png')}></Image>
            <Image style = {styles.impactinfoimg} source = {require('../assets/Profile/ImpactInfo.png')}></Image>
        
        </ScrollView>
       </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.WHITE,
        flex: 1,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    col: {
        display: 'flex',
        flexDirection: 'column',
    },
    profimg: {
        borderRadius: 100,
        height: 80,
        width: 80,
        backgroundColor: 'white',
        left: 20,
        
    },
    logoimg: {
        top: '2%',
        left: '5%',
        marginBottom: 20,
      },
    blacktext: {
        textAlign: 'center',
        fontSize: 40,
        color: COLORS.BLACK,
        fontWeight: 'bold',
    },
    graytext: {
        textAlign: 'center',
        fontSize: 20,
        color: 'gray',
        left: 40,
        },
    impactimg: {
        top: '2%',
        height: 250,
        width: '98%'
    },
    impactinfoimg: {
        top: '8%',
        left: '4%',
        height: 380,
        width: 380,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderRadius: 50,
    },
    scrollView: {
        backgroundColor: 'white',
      },
});