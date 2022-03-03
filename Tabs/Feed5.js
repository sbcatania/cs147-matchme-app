import { StatusBar } from 'expo-status-bar';
import { createPortal } from 'react-dom';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
import { useFonts } from 'expo-font';
import {ImageBackground} from 'react-native' ;
import home5 from  '../assets/Home/home5.jpg'


export default function Feed5() {
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
    top: '50%',
    left: '83%',
  }, 
  sideiconprof: {
    borderRadius: 100,
    margin: 7,
    top: '50%',
    left: '81%',
    height: 60,
    width: 60,
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
});

