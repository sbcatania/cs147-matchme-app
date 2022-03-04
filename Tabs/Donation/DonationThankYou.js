import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar';
import { createPortal } from 'react-dom';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
import { COLORS } from '../../Themes/constants';
import DonationConfirmation from './DonationConfirmation';

export default function DonationThankYou() {
  const navigation = useNavigation();
    return(
      <View style = {styles.container} >
        
         <Image source = {require('../../assets/Home/logowhite.png')} style = {styles.logoimg}> 
        </Image>
        <Image source = {require('../../assets/Donation/thankyou.png')} style = {styles.thankyouimg}> 
        </Image>
        <Image source = {require('../../assets/Donation/friendcard.png')} style = {styles.matchimg}> 
        </Image>
        
      </View> 
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.GREEN,
    },
    logoimg: {
      top: '5%',
      left: '7%',
    },
    matchimg: {
      top: '7%',
      left: '2%',
    },
    thankyouimg: {
      top: '7%',
      left: '18%',
    },
    button: {
      top: '10%',
    },
    blacktext: {
        letterSpacing: 4,
        top: '7%',
        left: '20%',
        color: 'black',
        fontSize: 20,
      },
});