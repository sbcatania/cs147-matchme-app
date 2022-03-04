import { StatusBar } from 'expo-status-bar';
import { createPortal } from 'react-dom';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
import { useFonts } from 'expo-font';
import {ImageBackground} from 'react-native' ;
import PagerView from "react-native-pager-view";
import { useState, useEffect } from "react";
import home from  '../assets/Home/home.png';
import home2 from  '../assets/Home/home2.png';
import home3 from  '../assets/Home/home3.jpg';
import home4 from  '../assets/Home/home4.jpg';
import home5 from  '../assets/Home/home5.jpg';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Explore from './Donation/Explore';
import Fundraiser from './Donation/Fundraiser';
import DonationEntry from './Donation/DonationEntry';
import DonationConfirmation from './Donation/DonationConfirmation';
import DonationThankYou from './Donation/DonationThankYou';


const LOAD_TIME = 100;
const INTERVAL = 25;

// Constants for page layout
// const TOP_TEXT = "Explore";
// const LIKE_ICON = '../assets/Home/heart.png';
// const DISLIKE_ICON = '../assets/Home/xicon.png';
// const SHARE_ICON = '../assets/Home/share.png';
// const DONATE_ICON = '../assets/Navigation/donate.png';

// function createPost(post_number) {
//   const navigation = useNavigation();
//   let post = JSON.parse(DATA.POSTS[post_number]);
//   console.log(post);
//   return(
//     <View style={styles.container}>
//         <ImageBackground source={post.post_image} style={styles.bgimg}>
//           <Text style = {styles.blacktext}>
//             {TOP_TEXT}
//           </Text>

//           <Text style={styles.whitetext}>
//             {post.handle}
//           </Text>
//           <Text style={styles.whitetextsmall}>
//             {post.caption}
//           </Text>
//           <Image source = {require(post.profile_image)} style = {styles.sideiconprof}> 
//           </Image>
//           <Image source = {require(LIKE_ICON)} style = {styles.sideicon}> 
//           </Image>
//           <Image source = {require(DISLIKE_ICON)} style = {styles.sideicon}> 
//           </Image>
//           <Image source = {require(SHARE_ICON)} style = {styles.sideicon}> 
//           </Image>
//           <TouchableOpacity style = {styles.button} onPress={()=>navigation.navigate(post.donation_link)}>
//             <Image style = {styles.donateimg} source={require(DONATE_ICON)}/>
//           </TouchableOpacity>
//           </ImageBackground>
//           <StatusBar style="auto" />
//       </View>
//     );
// }

const Stack = createNativeStackNavigator();

// turn this into a stack navigator 
export default function Home() {
  return (
      <Stack.Navigator initialRouteName="Explore" screenOptions={{
        headerShown: false}} >
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Fundraiser" component={Fundraiser} />
        <Stack.Screen name="DonationEntry" component={DonationEntry} />
        <Stack.Screen name="DonationConfirmation" component={DonationConfirmation} />
        <Stack.Screen name="DonationThankYou" component={DonationThankYou} />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagerView: {
    flex: 1
  },
  bgimg: {
    display: "flex",
    width: '100%',
    height: '100%',
    position: 'relative',
  }, 
  sideicon: {
    borderRadius: 100,
    margin: 10,
    top: '45%',
    left: '83%',
  }, 
  sideiconprof: {
    borderRadius: 100,
    margin: 7,
    top: '45%',
    left: '81%',
    height: 55,
    width: 55,
  }, 
  whitetext: {
    top: '88%',
    left: '5%',
    fontSize: 20,
    color: 'white',
  },
  whitetextsmall: {
    margin: 5,
    top: '88%',
    left: '5%',
    fontSize: 16,
    color: 'white',
  },
  blacktext: {
    letterSpacing: 4,
    top: '7%',
    left: '39%',
    color: 'black',
    fontSize: 20,
  },
  donateimg: {
    display: "flex",
    width: 80,
    height: 80,
  }, 
  button: {
    top: '45%',
    left: '80%',
  },
});