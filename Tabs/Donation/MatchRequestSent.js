import { StatusBar } from 'expo-status-bar';
import { createPortal } from 'react-dom';
import { useRoute } from "@react-navigation/native";
import { Alert, TextInput, Modal, Pressable, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
import { useFonts } from 'expo-font';
import { ImageBackground } from 'react-native';
import PagerView from "react-native-pager-view";
import { useState, useEffect, useRef } from "react";
import { Card, Icon } from 'react-native-elements';

import DonationEntry from './DonationEntry';
import { COLORS, IMAGES } from '../../Themes/Constants';

import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function MatchRequestSent({navigation}) {
    const [progress, setProgress] = useState(0);
    const ref = useRef();

    return (
        <View style={styles.container} >
                <Image source={IMAGES.LOGO_WHITE} style={styles.logoimg}>
                </Image>
            <Image source={IMAGES.DONATION_CHECK} style={styles.thankyouimg}>
            </Image>
            <Text style = {styles.thankyoutext}> Match Request Sent! </Text>

            <Pressable onPress={()=>navigation.navigate("DonationConfirmation")}
         style={({ pressed }) => [
          {
            top: '9%',
            left: '15%',
            width: 300,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            borderRadius: 100,
            elevation: 3,
            backgroundColor: pressed
              ? 'gray'
              : COLORS.WHITE
          },
          styles.wrapperCustom
        ]}
        >
            <Text style={styles.buttontextexplore}> Send More Requests </Text> 
    </Pressable>

            <Pressable onPress={()=>navigation.navigate("Explore")}
         style={({ pressed }) => [
          {
            top: '15%',
            left: '15%',
            width: 300,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            borderRadius: 100,
            elevation: 3,
            backgroundColor: pressed
              ? 'gray'
              : COLORS.WHITE
          },
          styles.wrapperCustom
        ]}
        >
            <Text style={styles.buttontextexplore}> Explore Other Nonprofits </Text> 
    </Pressable>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.GREEN,
    },
    thankyoutext: {
      textAlign: 'center',
      color: COLORS.WHITE,
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 100,
    },
    blacktext: {
      textAlign: 'center',
      top: '10%',
      letterSpacing: 4,
      color: COLORS.BLACK,
      fontSize: 100,
      fontWeight: 'bold',
    },
    confirmtext: {
      textAlign: 'center',
      top: '90%',
      letterSpacing: 4,
      color: COLORS.WHITE,
      fontSize: 30,
    },
    buttontextexplore: {
      color: COLORS.GREEN,
      fontWeight: 'bold',
      fontSize: 20,
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
      height: '85%',
      width: '100%',
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
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

    logoimg: {
      top: '5%',
      left: '5%',
    },
    thankyouimg: {
      left: '35%',
      top: '8%',
    },
    button: {
      top: '10%',
    },
    user: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 6,
    },
    image: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    input: {
      borderWidth: 1,
      borderColor: '#777',
      padding: 8,
      margin: 10,
      width: '60%',
  }
  });