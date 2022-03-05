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
        <View style = {styles.flex}>
          <TouchableOpacity style = {styles.button} onPress={()=>navigation.navigate(DonationConfirmation)}>
            <Image source={require("../../assets/Donation/arrow.png")}/>
          </TouchableOpacity>
          <Image source = {require('../../assets/Home/logowhite.png')} style = {styles.logoimg}> 
          </Image>
        </View>
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
    flex: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
    },
    logoimg: {
      top: '5%',
      left: '5%',
    },
    matchimg: {
      left: '1%',
    },
    thankyouimg: {
      left: '16%',
    },
    button: {
      top: '10%',
    },
});