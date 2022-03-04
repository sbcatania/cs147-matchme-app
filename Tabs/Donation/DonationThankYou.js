import { StatusBar } from 'expo-status-bar';
import { createPortal } from 'react-dom';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
import { COLORS } from '../../Themes/constants';

export default function DonationThankYou() {
    return(
      <View style = {styles.container} >
         <Image source = {require('../../assets/Home/logowhite.png')} style = {styles.logoimg}> 
        </Image>
        <Image source = {require('../../assets/Donation/thankyou.png')} style = {styles.thankyouimg}> 
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
      left: '7%',
    },
    thankyouimg: {
      top: '10%',
      left: '18%',
    },
    blacktext: {
        letterSpacing: 4,
        top: '7%',
        left: '20%',
        color: 'black',
        fontSize: 20,
      },
});