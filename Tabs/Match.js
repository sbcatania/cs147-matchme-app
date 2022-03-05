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
import Inbox from './MatchRequest/Inbox';
import MatchEntry from './MatchRequest/MatchEntry';
import MatchConfirmation from './MatchRequest/MatchConfirmation';



const Stack = createNativeStackNavigator();

// turn this into a stack navigator 
export default function Home() {
  return (
      <Stack.Navigator initialRouteName="Inbox" screenOptions={{
        headerShown: false}} >
        <Stack.Screen name="Inbox" component={Inbox} />
        <Stack.Screen name="MatchEntry" component={MatchEntry} />
        <Stack.Screen name="MatchConfirmation" component={MatchConfirmation} />
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