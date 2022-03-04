import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar';
import { createPortal } from 'react-dom';
import { StyleSheet, Pressable, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
import { COLORS } from '../../Themes/Constants';
import DonationEntry from './DonationEntry';
import DonationThankYou from './DonationThankYou';


export default function DonationConfirmation() {
  const navigation = useNavigation();
    return(
      <View style = {styles.container} >
        <View style = {styles.rectangle} >
        <TouchableOpacity style = {styles.backbutton} onPress={()=>navigation.navigate(DonationEntry)}>
            <Image source={require("../../assets/Donation/arrow.png")}/>
        </TouchableOpacity>
        <Text style = {styles.blacktext}>$10</Text>
        <Text style = {styles.bluetext}>Your donation will support 
        1 cleanup for the Save the Animals Fundraiser.</Text>
        <Text style = {styles.fineprint}>
        This donation is tax-deductible. Here’s more information on your donation: 
        </Text>
        <Text style = {styles.fineprint}>
        By making this non-refundable donation to the SAVE THE ANIMALS FUNDRAISER hosted by the WORLD WILDLIFE FUND (WWF), you agree that money will be transferred from your account to the accounts of WWF. WWF is a registered 501(c)(3) not-for-profit corporation and your donation is tax-deductible. By making this donation, you waive your right to direct the use of funds by the WWF and hereby acknowledge that it is at the discretion of WWF as to if they would like to honor any and all promised rewards. Additionally, WWF has the right to refuse any donation, in which case the funds will be refunded to your account.  </Text>
        <Text style = {styles.fineprint}>
        SUBMITTING THIS DONATION INDICATES YOU HAVE READ AND AGREED TO THESE TERMS AND CONDITIONS.        </Text>
        </View>
        <Pressable style={styles.donatebutton} onPress={() => navigation.navigate(DonationThankYou)}
        style={({ pressed }) => [
          {
            top: '79%',
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
            <Text style={styles.buttontext}> CONFIRM </Text> 
    </Pressable>
      </View> 
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.GREEN,
    },
    blacktext: {
      textAlign: 'center',
      top: '10%',
      letterSpacing: 4,
      color: COLORS.BLACK,
      fontSize: 100,
      fontWeight: 'bold',
    },
    bluetext: {
      textAlign: 'center',
      top: '15%',
      marginHorizontal: 10,
      color: COLORS.BLUE,
      fontSize: 20,
      fontWeight: 'bold',
    },
    fineprint: {
      textAlign: 'center',
      top: '20%',
      marginTop: 10,
      marginHorizontal: 10,
      color: COLORS.BLACK,
      fontSize: 12,
    },
    rectangle: {
      position: 'absolute',
      top: 0,
      height: '90%',
      width: '100%',
      borderRadius: 40,
      backgroundColor: COLORS.WHITE,
    },
    backbutton: {
      top: '6%',
    },
    donatebutton: {
      top: '79%',
      left: '18%',
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

});