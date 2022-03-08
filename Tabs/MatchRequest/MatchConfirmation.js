import { StatusBar } from 'expo-status-bar';
import { createPortal } from 'react-dom';
import { Alert, TextInput, Modal, Pressable, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
import { useFonts } from 'expo-font';
import { ImageBackground } from 'react-native';
import PagerView from "react-native-pager-view";
import { useState, useEffect, useRef } from "react";
import { Card, Icon } from 'react-native-elements';

import Inbox from './Inbox';
import Explore from '../Donation/Explore';

import { COLORS, IMAGES } from '../../Themes/Constants';

import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const LOAD_TIME = 100;
const INTERVAL = 25;

//TODO: Back button page doesn't work :|
//TODO: Add dummy users/data for Matching

function Confirmation() {
  const navigation = useNavigation();
  return (
    <View style={styles.container} >
      <View style={styles.rectangle} >
        <Text style={styles.blacktext}>$10</Text>
        <Text style={styles.bluetext}>Your donation will support
          1 cleanup for the Save the Animals Fundraiser.</Text>
        <Text style={styles.fineprint}>
          This donation is tax-deductible. Here’s more information on your donation:
        </Text>
        <Text style={styles.fineprint}>
          By making this non-refundable donation to the SAVE THE ANIMALS FUNDRAISER hosted by the WORLD WILDLIFE FUND (WWF), you agree that money will be transferred from your account to the accounts of WWF. WWF is a registered 501(c)(3) not-for-profit corporation and your donation is tax-deductible. By making this donation, you waive your right to direct the use of funds by the WWF and hereby acknowledge that it is at the discretion of WWF as to if they would like to honor any and all promised rewards. Additionally, WWF has the right to refuse any donation, in which case the funds will be refunded to your account.  </Text>
        <Text style={styles.fineprint}>
          SUBMITTING THIS DONATION INDICATES YOU HAVE READ AND AGREED TO THESE TERMS AND CONDITIONS.        </Text>
      </View>
      <Text style={styles.confirmtext}> Swipe up to confirm </Text>
    </View>
  );
}

// Donation Thank You screen
function ThankYou() {
  const navigation = useNavigation();
  const ref = useRef();

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container} >
      <Image source={IMAGES.LOGO_WHITE} style={styles.logoimg}>
        </Image>
      <Image source={IMAGES.DONATION_CHECK} style={styles.thankyouimg}>
      </Image>
      <Text style={styles.thankyoutext}> You matched James! </Text>
      <Pressable onPress={() => navigation.navigate(Inbox)}
            style={({ pressed }) => [
              {
                top: '20%',
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
            <Text style={styles.buttontextexplore}> See More Requests </Text>
          </Pressable>
      <Pressable onPress={() => navigation.navigate(Explore)}
            style={({ pressed }) => [
              {
                top: '20%',
                left: '15%',
                marginTop: 45,
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


export default function MatchConfirmation() {
  const [progress, setProgress] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress + 10 >= LOAD_TIME) {
          clearInterval(interval);
        }
        return prevProgress + 10;
      });
    }, INTERVAL);

    return () => clearInterval(interval);
  }, []);


  return (
    <PagerView style={styles.pagerView} initialPage={0} orientation="vertical" pageMargin="1000" ref={ref}>
      <View key="1" style={styles.container}>
        {Confirmation()}
      </View>
      <View key="2" style={styles.container}>
        {ThankYou()}
      </View>
    </PagerView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GREEN,
  },
  pagerView: {
    flex: 1,
    backgroundColor: COLORS.GREEN,

  },

  logoimg: {
    top: '5%',
    left: '5%',
  },
  thankyoutext: {
    top: '15%',
    textAlign: 'center',
    color: COLORS.WHITE,
    fontSize: 35,
    fontWeight: 'bold',
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
  buttontextexplore: {
    color: COLORS.GREEN,
    fontWeight: 'bold',
    fontSize: 20,
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
    left: '35%',
    top: '10%',
  },

  

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  
  buttonClose: {
    backgroundColor: "#2196F3",
  },
});