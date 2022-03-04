import { StatusBar } from 'expo-status-bar';
import { createPortal } from 'react-dom';
import { StyleSheet, Text, ImageBackground, View, Image, TouchableOpacity, FlatList, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
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
      <View style = {styles.container}>
        <ImageBackground source={moose} style = {styles.bgimg} >
        <TouchableOpacity style = {styles.button} onPress={()=>navigation.navigate(Explore)}>
            <Image source={require("../../assets/Donation/arrow.png")}/>
          </TouchableOpacity>
        </ImageBackground>
      </View>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.WHITE,
    },
    button: {
      top: '10%',
    },
  
    bgimg: {
      display: "flex",
      width: '100%',
      height: '60%',
      position: 'relative',
    },
    blacktext: {
        letterSpacing: 4,
        top: '7%',
        left: '20%',
        color: 'black',
        fontSize: 20,
      },
});