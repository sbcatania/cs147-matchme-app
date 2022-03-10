import React from 'react';
import { StyleSheet, Text, ImageBackground, Pressable, View, Image, TouchableOpacity, ScrollView, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";
import { COLORS, DATA } from '../../Constants';

/* 
* TODO: 
*   - Implement NFP profile page.
*   - WHITE BACKGROUND - do the hacky safe area view thing to get a completely white bacgkround
*/
//export default function NFPFundraiser({route}) {
export default function NFPFundraiser() {

  // NAVIGATION: Setup nav between pages
  const navigation = useNavigation();

  // SETUP: DATA transfer stuff + NFP info
  // const [handle, _] = React.useState(route.params);
  // let DATA = DATA.PROFILES[handle];
  
  return(

      <SafeAreaView styles={styles.safeAreaContainer}>
      <ScrollView style={styles.scrollView}>

        <View style={styles.headerContainer}>
          <Text style={styles.titles}>NFP Profile</Text>
        </View>

        
        <View style={styles.mainContent}>
          <ImageBackground source={DATA.banner} style = {styles.bgimg} >
          <Image source = {DATA.avatar} style = {styles.sideiconprof}></Image>
          <Text style = {styles.whitetext}> {DATA.title} </Text>
          <Text style = {styles.blacktext}> {DATA.name} </Text>
          <Text style = {styles.blacktext}> {DATA.dates} </Text>
          <Pressable style={styles.donatebutton} onPress={() => {
            navigation.navigate('DonationEntry', handle)
          }}
          style={({ pressed }) => [
            {
              top: '13%',
              left: '20%',
              width: 250,
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 12,
              borderRadius: 100,
              elevation: 3,
              backgroundColor: pressed
                ? 'gray'
                : COLORS.GREEN
            },
            
            styles.wrapperCustom
          ]}>
          <Text style={styles.buttontext}> DONATE </Text> 
          </Pressable>
          <Image style = {styles.infotext} source = {require('../../assets/Donation/FundraiserDescription.png')} > 
        </Image>
        <Image style = {styles.infotext} source = {require('../../assets/Donation/RewardBlurb.png')} > 
        </Image>
        <Image style = {styles.info} source = {require('../../assets/Donation/ImpactStats.png')} > 
        </Image>
        <Image style = {styles.info} source = {require('../../assets/Donation/VideoContent.png')} > 
        </Image>

        </ImageBackground>
            
        </View>
      </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    safeAreaContainer: {
      backgroundColor: 'white',
    },
    scrollView: {
      backgroundColor: 'white',
    },
    mainContent: { // container view
      // backgroundColor: 'firebrick',
      backgroundColor: 'white',
      marginHorizontal: 20,
    },
    headerContainer: { // view (including text position)
      // backgroundColor: 'gray',
      marginHorizontal: 10,
      marginBottom: 10,
    },
    titles: { // text
      fontWeight: 'bold',
      fontSize: 30,
      paddingTop: 25,
      textAlign: 'center',
      letterSpacing: 4,
    },
    bgimg: {
      display: "flex",
      width: '100%',
      height: '35%',
      position: 'relative',
    },
    sideiconprof: {
      borderRadius: 100,
      margin: 7,
      top: '20%',
      left: '6%',
      height: 100,
      width: 100,
    }, 
    whitetext: {
      top: '6%',
      left: '34%',
      fontSize: 30,
      color: 'white',
      fontWeight: 'bold',
    },
    blacktext: {
      top: '10%',
      left: '34%',
      fontSize: 18,
      color: 'black',
    },
    infotext: {
      top: '17%',
      left: '3%',
      marginBottom: 20,
    },
    info: {
      top: '17%',
      marginBottom: 20,
    },
    buttonSize: { // handle image style of small button
      resizeMode: 'stretch', 
      width:50, 
      height:50,
    },
    checkButtonPressable: { // handle position of check button
      // backgroundColor: 'blue', // just to see where the container is
      position: 'absolute', 
      right: 0, 
      top: 0,
    },
    axnButtonContainer: {//   separate from rest of content
      // backgroundColor: 'lightblue',
      position: 'absolute',
      bottom: 10,
      left: 80,
    },
    axnButtonText: {
      color: COLORS.WHITE,
      fontWeight: 'bold',
      fontSize: 35,
    },
    // compare this to above
    buttontext: {
      color: COLORS.WHITE,
      fontWeight: 'bold',
      fontSize: 35,
    },
    axnButton: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
});