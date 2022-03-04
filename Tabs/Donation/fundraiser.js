import { StatusBar } from 'expo-status-bar';
import { createPortal } from 'react-dom';
import { StyleSheet, Text, ImageBackground, Pressable, View, Image, TouchableOpacity, ScrollView, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DonationEntry from './DonationEntry';
import DonationConfirmation from './DonationConfirmation';
import DonationThankYou from './DonationThankYou';
import moose from '../../assets/Donation/moose.png';
import { COLORS } from '../../Themes/Constants';
import Explore from './Explore'

export default function Fundraiser() {
    const navigation = useNavigation();
    return(
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>

        <ImageBackground source={moose} style = {styles.bgimg} >
        <TouchableOpacity style = {styles.backbutton} onPress={()=>navigation.navigate(Explore)}>
            <Image source={require("../../assets/Donation/arrow.png")}/>
        </TouchableOpacity>
        <Image source = {require('../../assets/Home/wwflogo.png')} style = {styles.sideiconprof}> 
        </Image>
        <Text style = {styles.whitetext}> Save the Animals </Text>
        <Text style = {styles.blacktext}> World Wildlife Fund </Text>
        <Text style = {styles.blacktext}> February 2022 - March 2023  </Text>
        <Pressable style={styles.donatebutton} onPress={() => navigation.navigate(DonationEntry)}>
            <Text style={styles.buttontext}> DONATE </Text>
            
    </Pressable>

        </ImageBackground>
        </ScrollView>
      </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.WHITE,
    },
    scrollView: {
      backgroundColor: 'white',
    },
    backbutton: {
      top: '10%',
    },
    donatebutton: {
      top: '20%',
      left: '22%',
      width: 250,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      borderRadius: 100,
      elevation: 3,
      backgroundColor: COLORS.GREEN,
    },
    buttontext: {
      color: COLORS.WHITE,
      fontWeight: 'bold',
      fontSize: 35,
    },
  
    bgimg: {
      display: "flex",
      width: '100%',
      height: '80%',
      position: 'relative',
    },
    sideiconprof: {
        borderRadius: 100,
        margin: 7,
        top: '40%',
        left: '8%',
        height: 100,
        width: 100,
    }, 
    whitetext: {
      top: '2%',
      left: '36%',
      fontSize: 30,
      color: 'white',
      fontWeight: 'bold',
    },
    blacktext: {
      top: '4%',
      left: '36%',
      fontSize: 18,
      color: 'black',
    },
});