import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, Pressable, Image, SafeAreaView } from 'react-native';
import Rewards from './Rewards';
import { useNavigation } from '@react-navigation/native';
import NumericInput from 'react-native-numeric-input';
import { COLORS, IMAGES } from '../../Constants';
import {  } from 'react-native-safe-area-context';

export default function SetupFundraiser() {
    
    return (
        <View style={{backgroundColor:'white', position:'absolute', height: '100%', width: '100%'}}>
        <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
            <Text>Hello world.</Text>
            
        </View>

        </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'lightblue',
        backgroundColor:'white',
        // flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        // paddingTop: '10%',
    },
    tag: (color) => { return {
        marginTop: 5,
        marginHorizontal: 2,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 100,
        borderWidth: 2,
        backgroundColor: color,
        borderColor: COLORS.BLACK,
    }},
    flexboxes: {
        // backgroundColor: 'firebrick',
        paddingHorizontal: 20,
        paddingTop: '5%'
    },
    headerContainer: {
        marginHorizontal: 10,
    },
    titles: { // text
        fontWeight: 'bold',
        fontSize: 30,
        paddingTop: 25,
        textAlign: 'center',
        letterSpacing: 4,
    },
    input: {
        backgroundColor: '#F2F2F2',
        // placeholderTextColor: 'black',
        padding: 8,
        borderRadius: 10,
        marginBottom: 20,
        width: '100%',
    },
    rewardslink: {
        top: '9%',
        left: '20%',
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 100,
        elevation: 3,
        backgroundColor: COLORS.BLUE,
    },
    launchcontainer: { //   separate from rest of page hierarchy
        position: 'absolute',
        bottom: 10,
        left: 80,
    },
    tickercontainer: {
        flexDirection: 'row'
    },
    tickerlilcontainer: {
        paddingHorizontal: 10,
        marginTop: 10,
    },
    userlilcontainer: {
        paddingRight: 10,
        marginTop: 15,
    },
    ticker: {
        // ticker properties
    },
    linktext: {
        color: COLORS.BLACK,
        fontSize: 20,
    },
    tagtext: {
        color: COLORS.BLACK,
        fontSize: 12,
        fontWeight: 'bold',
    },
    launchbuttontext: {
        color: COLORS.WHITE,
        fontWeight: 'bold',
        fontSize: 35,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
});