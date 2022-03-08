import { StatusBar } from 'expo-status-bar';
import { createPortal } from 'react-dom';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
import { useFonts } from 'expo-font';
import {ImageBackground} from 'react-native' ;
import PagerView from "react-native-pager-view";
import { useState, useEffect } from "react";
import { COLORS, DATA, IMAGES } from '../../Themes/Constants';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Constants for page layout and functioning
const LOAD_TIME = 100;
const INTERVAL = 25;
const TOP_TEXT = "Explore";

// Creates a post based on its id by fetching the content from our json file
function createPost(post_number) {
  const navigation = useNavigation();
  let post = DATA.POSTS[post_number];
  return(
    <View style={styles.container}>
        <ImageBackground source={post.image} style={styles.bgimg}>
          <Text style = {styles.blacktext}>
            {TOP_TEXT}
          </Text>

          <Text style={styles.whitetext}>
            {post.handle}
          </Text>
          <Text style={styles.whitetextsmall}>
            {post.caption}
          </Text>
          <Image source = {DATA.PROFILES[post.handle].avatar} style = {styles.sideiconprof}> 
          </Image>
          <Image source = {IMAGES.LIKE_ICON} style = {styles.sideicon}> 
          </Image>
          <Image source = {IMAGES.DISLIKE_ICON} style = {styles.sideicon}> 
          </Image>
          <Image source = {IMAGES.SHARE_ICON} style = {styles.sideicon}> 
          </Image>
          <TouchableOpacity style = {styles.button} onPress={()=>navigation.navigate("Fundraiser", post.handle)}>
            <Image style = {styles.donateimg} source={IMAGES.DONATE_ICON}/>
          </TouchableOpacity>
          </ImageBackground>
          <StatusBar style="auto" />
      </View>
    );
}

export default function Explore() {
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
          {createPost("1")}
        </View>
        <View key="3" style={styles.container}>
          {createPost("2")}
        </View>
        <View key="2" style={styles.container}>
          {createPost("3")}
        </View>
        <View key="4" style={styles.container}>
          {createPost("4")}
        </View>
        <View key="5" style={styles.container}>
          {createPost("5")}
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
    color: COLORS.WHITE,
  },
  whitetextsmall: {
    margin: 5,
    top: '88%',
    left: '5%',
    fontSize: 16,
    color: COLORS.WHITE,
  },
  blacktext: {
    letterSpacing: 4,
    top: '7%',
    left: '39%',
    color: COLORS.BLACK,
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