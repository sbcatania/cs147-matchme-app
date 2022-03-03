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
import { COLORS, DATA } from '../Themes/constants';
import fundraiser from '../Tabs/Donation/fundraiser';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const LOAD_TIME = 100;
const INTERVAL = 25;

function Feed1() {
  return(
  <View style={styles.container}>
      <ImageBackground source={home} style={styles.bgimg}>
        <Text style = {styles.blacktext}>
          Explore 
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
        <TouchableOpacity style = {styles.button} onPress={fundraiser()}>
          <Image style = {styles.donateimg} source={require("../assets/Navigation/donate.png")}/>
        </TouchableOpacity>


        </ImageBackground>
        <StatusBar style="auto" />
    </View>
  );
}

function Feed2() {
  return(
    <View style={styles.container}>
      <ImageBackground source={home2} style={styles.bgimg}>
        <Text style = {styles.blacktext}>
          Explore 
        </Text>

        <Text style={styles.whitetext}>
          @worldwildlifefund
        </Text>
        <Text style={styles.whitetextsmall}>
        Today Suyash explores a newer landscape.
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

function Feed3() {
  return (
    <View style={styles.container}>
      <ImageBackground source={home3} style={styles.bgimg}>
        <Text style = {styles.blacktext}>
          Explore 
        </Text>

        <Text style={styles.whitetext}>
          @malalafund
        </Text>
        <Text style={styles.whitetextsmall}>
          Malala addressing the UN Summit this morning. 
        </Text>
        <Image source = {require('../assets/Home/malala.jpg')} style = {styles.sideiconprof}> 
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

function Feed4() {
  return (
    <View style={styles.container}>
      <ImageBackground source={home4} style={styles.bgimg}>
        <Text style = {styles.blacktext}>
          Explore 
        </Text>

        <Text style={styles.whitetext}>
          @savethebees
        </Text>
        <Text style={styles.whitetextsmall}>
          It was a great day saving the bees from a giant hive. 
        </Text>
        <Image source = {require('../assets/Home/bees.png')} style = {styles.sideiconprof}> 
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

function Feed5() {
  return (
    <View style={styles.container}>
      <ImageBackground source={home5} style={styles.bgimg}>
        <Text style = {styles.blacktext}>
          Explore 
        </Text>

        <Text style={styles.whitetext}>
          @paloaltoshelter
        </Text>
        <Text style={styles.whitetextsmall}>
          Learn about Finn's day in the life. Donate to make his life better. 
        </Text>
        <Image source = {require('../assets/Home/shelter.jpg')} style = {styles.sideiconprof}> 
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

export default function Home() {
  const [progress, setProgress] = useState(0);

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
    <PagerView style={styles.pagerView} initialPage={0} orientation="vertical">
      <View key="1" style={styles.container}>
        {Feed1()}
      </View>
      <View key="3" style={styles.container}>
        {Feed3()}
      </View>
      <View key="2" style={styles.container}>
        {Feed2()}
      </View>
      <View key="4" style={styles.container}>
        {Feed4()}
      </View>
      <View key="5" style={styles.container}>
        {Feed5()}
      </View>
    </PagerView>
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