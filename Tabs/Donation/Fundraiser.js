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
import { COLORS } from '../../Themes/constants';
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
        <Pressable style={styles.donatebutton} onPress={() => navigation.navigate(DonationEntry)}
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
        ]}>
        
        
            <Text style={styles.buttontext}> DONATE </Text> 
    </Pressable>
    <Image style = {styles.infotext} source = {require('../../assets/Donation/FundraiserDescription.png')} > 
        </Image>
        <Image style = {styles.infotext} source = {require('../../assets/Donation/RewardBlurb.png')} > 
        </Image>
        <Image style = {styles.info} source = {require('../../assets/Donation/ImpactStats.png')} > 
        </Image>
        <Image style = {styles.info} source = {require('../../assets/Donation/VideoContent.png')} > 
        </Image>

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
      top: '2%',
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
    buttontext: {
      color: COLORS.WHITE,
      fontWeight: 'bold',
      fontSize: 35,
    },
  
    bgimg: {
      display: "flex",
      width: '100%',
      height: '35%',
      position: 'relative',
    },
    sideiconprof: {
        borderRadius: 100,
        margin: 7,
        top: '20%',
        left: '6%',
        height: 100,
        width: 100,
    }, 
    whitetext: {
      top: '2%',
      left: '34%',
      fontSize: 30,
      color: 'white',
      fontWeight: 'bold',
    },
    blacktext: {
      top: '5%',
      left: '34%',
      fontSize: 18,
      color: 'black',
    },
    infotext: {
      top: '15%',
      left: '3%',
      marginBottom: 20,
    },
    info: {
      top: '15%',
      marginBottom: 20,
    }
});
