import { Alert, TextInput, Modal, Pressable, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
import PagerView from "react-native-pager-view";
import { useState, useEffect, useRef } from "react";

import Inbox from './Inbox';
import FeedScreen from '../Donation/FeedScreen.js';

import { COLORS, IMAGES } from '../../Constants';
import { useNavigation } from '@react-navigation/native';

import { useRoute } from "@react-navigation/native";


const LOAD_TIME = 100;
const INTERVAL = 25;

//TODO: Back button page doesn't work :|
//TODO: Add dummy users/data for Matching

function Confirmation () {
  const navigation = useNavigation();
  const route = useRoute();
  const {name, donAmt, fundName} = route.params;

  return (
    <View style={styles.container} >
      <View style={styles.rectangle} >
        <Text style={styles.blacktext}>{donAmt}</Text>
        <Text style={styles.bluetext}>Your donation will support {fundName}</Text>
        <Text style={styles.fineprint}>
          This donation is tax-deductible. Here’s more information on your donation:
        </Text>
        <Text style={styles.fineprint}>
          By making this non-refundable donation to the {fundName}, you agree that money will be transferred from your account to the accounts of WWF. WWF is a registered 501(c)(3) not-for-profit corporation and your donation is tax-deductible. By making this donation, you waive your right to direct the use of funds by the WWF and hereby acknowledge that it is at the discretion of WWF as to if they would like to honor any and all promised rewards. Additionally, WWF has the right to refuse any donation, in which case the funds will be refunded to your account.  </Text>
        <Text style={styles.fineprint}>
          SUBMITTING THIS DONATION INDICATES YOU HAVE READ AND AGREED TO THESE TERMS AND CONDITIONS.        </Text>
      </View>
      <Image source={IMAGES.DONATION_SWIPE} style={{position:"absolute", width:250, height:65, bottom:"1%", left: 75,}}/>
    </View>
  );
}

// Donation Thank You screen
function ThankYou() {
  const navigation = useNavigation();
  const ref = useRef();
  const route = useRoute();
  const {name, donAmt, fundName} = route.params;

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container} >
      <Image source={IMAGES.LOGO_WHITE} style={styles.logoimg}>
        </Image>
      <Image source={IMAGES.DONATION_CHECK} style={styles.thankyouimg}>
      </Image>
      <Text style={styles.thankyoutext}> You matched {name}! </Text>
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
      <Pressable onPress={() => navigation.navigate(FeedScreen)}
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
  const route = useRoute();

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
    // justifyContent:"center",
    // alignItems:"center"
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
    height: 130,
    width: 130,
    left: '36%',
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