import { StatusBar } from 'expo-status-bar';
import { createPortal } from 'react-dom';
import { Alert, TextInput, Modal, Pressable, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
import { useFonts } from 'expo-font';
import { ImageBackground } from 'react-native';
import PagerView from "react-native-pager-view";
import { useState, useEffect, useRef } from "react";
import { Card, Icon } from 'react-native-elements';

import Inbox from './Inbox';

import { COLORS } from '../../Themes/Constants';

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
        <TouchableOpacity style={styles.backbutton}>
          <Image source={require("../../assets/Donation/arrow.png")} />
        </TouchableOpacity>
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

  const users = [
    {
      name: 'Brynn',
      avatar: require('../../assets/landay.jpeg'),
    },
    {
      name: 'Jess',
      avatar: require('../../assets/landay.jpeg'),
    },
    {
      name: 'Kay',
      avatar: require('../../assets/landay.jpeg'),
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container} >
      <View style={styles.flex}>
        {/*<TouchableOpacity style = {styles.button} onPress={()=>ref.current.setPage(1)}>
        <Image source={require("../../assets/Donation/arrow.png")}/>
  </TouchableOpacity>*/}
        <Image source={require('../../assets/Home/logowhite.png')} style={styles.logoimg}>
        </Image>
      </View>
      <Image source={require('../../assets/Donation/thankyou.png')} style={styles.thankyouimg}>
      </Image>

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
    left: '16%',
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
  confirmtext: {
    textAlign: 'center',
    top: '90%',
    letterSpacing: 4,
    color: COLORS.WHITE,
    fontSize: 30,
  }
});