import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, Pressable, Image } from 'react-native';
import Fundraiser from './Donation/Fundraiser'
import Profile from './Nonprofit/NonprofitProfile'
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
export default function Search() {

    // NAVIGATION: Setup nav between pages
    const navigation = useNavigation();

    // Show up on page
    return (
        
        <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>

            {/* PROFILE CONTENT */}

            <View style={styles.headerContainer}>
                <Text style={styles.titles}> My Profile </Text> 
            </View>

            
        </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
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
});