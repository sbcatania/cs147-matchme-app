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
  const [entry, setEntry] = useState("");
  const navigation = useNavigation();
  const donate = () => {
    navigation.navigate("DonationConfirmation", entry);
  };

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
        value={entry} // the entry variable in the state is displayed by the TextInput
        keyboardType="numeric"
        onChangeText={(text) => setEntry(text)}
        />
        <View style = {styles.flex}>
        <View style = {styles.suggestion}>
          <Text style= {styles.suggestiontext}>$3</Text>
        </View>
        <View style = {styles.suggestion}>
          <Text style= {styles.suggestiontext}>$5</Text>
        </View>
        <View style = {styles.suggestion}>
          <Text style= {styles.suggestiontext}>$10</Text>
        </View>
        </View>
        <Pressable style={styles.donatebutton} onPress={donate}
         style={({ pressed }) => [
          {
            top: '9%',
            left: '20%',
            width: 250,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            borderRadius: 100,
            elevation: 3,
            backgroundColor: pressed
              ? 'gray'
              : COLORS.GREEN
          },
          styles.wrapperCustom
        ]}
        >
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
    flex: {
      flexDirection: 'row',
    },
    rectangle: {
      top: '28%',
      height: '100%',
      borderRadius: 40,
      backgroundColor: COLORS.WHITE,
    },

    suggestion: {
      top: '5%',
      left: '37%',
      margin: 5,
      borderRadius: 100,
      width: 100,
      backgroundColor: COLORS.BLUE,
      alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
    },
    suggestiontext: {
      color: COLORS.WHITE,
      fontWeight: 'bold',
      fontSize: 28,
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
        margin: 10,
        color: COLORS.BlACK,
      },
      textInput: {
        top: '60%',
        left: '25%',
        textAlign: 'center',
        width: '50%',
        top: '2%',
        height: 100,
        
        fontSize: 50,
        backgroundColor: '#E5E5E5',
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
        top: '6%',
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