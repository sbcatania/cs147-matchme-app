import { StatusBar } from 'expo-status-bar';
import { createPortal } from 'react-dom';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
import { useFonts } from 'expo-font';
import {ImageBackground} from 'react-native' ;
import home from  '../assets/Home/home.png'


export default function HomeScreen1() {
  return (
    <View style={styles.container}>
      <ImageBackground source={home} style={styles.bgimg}>
        <Text style = {styles.blacktext}>
          Favorites | Explore 
        </Text>

        <Text style={styles.whitetext}>
          @worldwildlifefund
        </Text>
        <Text style={styles.whitetextsmall}>
          Today Suyash explores the Sahara. Save the Animals Fundraiser.
        </Text>
        <Image source = {require('../assets/Home/wwflogo.png')} style = {styles.sideiconprof}> 
        </Image>
        <Image source = {require('../assets/Home/heart.png')} style = {styles.sideicon}> 
        </Image>
        <Image source = {require('../assets/Home/xicon.png')} style = {styles.sideicon}> 
        </Image>
        <Image source = {require('../assets/Home/share.png')} style = {styles.sideicon}> 
        </Image>
        </ImageBackground>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    top: '55%',
    left: '83%',
  }, 
  sideiconprof: {
    borderRadius: 100,
    margin: 7,
    top: '55%',
    left: '81%',
  }, 
  whitetext: {
    top: '82%',
    left: '5%',
    fontSize: 20,
    color: 'white',
  },
  whitetextsmall: {
    margin: 5,
    top: '82%',
    left: '5%',
    fontSize: 16,
    color: 'white',
  },
  blacktext: {
    letterSpacing: 4,
    top: '7%',
    left: '22%',
    color: 'black',
    fontSize: 20,
  },
});

