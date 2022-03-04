import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { StyleSheet, Pressable, Text, TextInput, View, Image, TouchableOpacity, FlatList, SafeAreaView, Button, TouchableWithoutFeedback, ImageBackground } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DonationConfirmation from './DonationConfirmation';
import Fundraiser from './Fundraiser';
import moose from '../../assets/Donation/moose.png';
import { COLORS } from '../../Themes/Constants';

export default function DonationEntry() {
  const [text, setText] = useState("");
    const navigation = useNavigation();
    
    
    return(
      <SafeAreaView style = {styles.container} >
     <ImageBackground style = {styles.bgimg} source = {moose}>
     <TouchableOpacity style = {styles.backbutton} onPress={()=>navigation.navigate(Fundraiser)}>
            <Image source={require("../../assets/Donation/arrow.png")}/>
        </TouchableOpacity>
       <View style = {styles.rectangle}>
         <Text style = {styles.description}> Supporting Save the Animals Fundraiser</Text>
      <TextInput
        style={styles.textInput}
        value={text} // the text variable in the state is displayed by the TextInput
        keyboardType="numeric"
        onChangeText={(newText) => setText(newText)}
        />
        <Pressable style={styles.donatebutton} onPress={() => navigation.navigate(DonationConfirmation)}>
            <Text style={styles.buttontext}> REVIEW </Text> 
    </Pressable>
    </View>
      </ImageBackground>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.WHITE,
      padding: 8,
    },
    rectangle: {
      top: '28%',
      height: '100%',
      borderRadius: 40,
      backgroundColor: COLORS.WHITE,
    },
    blacktext: {
        letterSpacing: 4,
        top: '7%',
        left: '20%',
        color: 'black',
        fontSize: 20,
      },
      bgimg: {
        display: "flex",
        width: '100%',
        height: '70%',
        position: 'relative',
      },
      description: {
        fontWeight: 'bold',
        fontSize: 20,
        top: '2%',
        left: '5%',
        color: COLORS.BlACK,
      },
      textInput: {
        top: '60%',
        left: '35%',
        textAlign: 'center',
        width: '25%',
        top: '2%',
        height: 100,
        padding: 8,
        fontSize: 50,
        backgroundColor: 'white',
        fontWeight: 'bold',
      },
      backbutton: {
        top: '4%',
      },
      buttontext: {
        color: COLORS.WHITE,
        fontWeight: 'bold',
        fontSize: 35,
      },
      donatebutton: {
        top: '9%',
        left: '20%',
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 100,
        elevation: 3,
        backgroundColor: COLORS.GREEN,
      },
});