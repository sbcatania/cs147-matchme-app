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
  const Circle = () => {
    return <View style={styles.circle} />;
  };

  // SETUP: DATA transfer stuff + NFP info
  // const [handle, _] = React.useState(route.params);
  // let DATA = DATA.PROFILES[handle];
  
  return(
      <View style={styles.container}>
      <SafeAreaView>
      <ScrollView style={styles.scrollView}>

        {/* Moosey moose, different margins than everything else! */}
        <View>
          <Image source={require('../../assets/Donation/moose.png')} style={styles.backgroundimg}></Image>
        </View>
        
        {/* All the other content, 20px margins */}
        <View style={styles.mainContent}>
            
          {/* Header */}
          <View style={styles.header}> 
            <Circle></Circle>
              <Text style = {styles.whitetext}>Save the Animals</Text>
              <Text style = {styles.blacktext}>Description{'\n'}MARCH 2022-FEBRUARY 2023</Text>
          </View>

          {/* Body Content */}
          <View style={styles.body}>
            <Text style={{backgroundColor:'beige'}}> 
              About this fundraiser {'\n'}
              The Save the Animals campaign aims to ensure all animals have a habitat suited for their needs. Funds will go to conservation efforts worldwide.
            </Text>
            
            <Pressable onPress={() => { // navigation.navigate('DonationEntry', handle)
              }}
              style={({ pressed }) => [
                {
                  left: '15%', 
                  width: '70%',
                  alignItems: 'center', // text
                  justifyContent: 'center', // text
                  paddingVertical: 10,
                  borderRadius: 100,
                  elevation: 3,
                  backgroundColor: pressed
                    ? 'gray'
                    : COLORS.GREEN
                }]}>
                <Text style={styles.buttontext}> DONATE </Text> 
            </Pressable>

            <View style={{backgroundColor: 'pink', height: 120, borderRadius: 10, margin: 10,}}>
                <Text style={{textAlign: 'center', padding: 10}}>
                  Rewards go here!
                </Text>
            </View>

            

            {/* <Image style = {styles.infotext} source = {require('../../assets/Donation/FundraiserDescription.png')} > 
            </Image>
            <Image style = {styles.infotext} source = {require('../../assets/Donation/RewardBlurb.png')} > 
            </Image>
            <Image style = {styles.info} source = {require('../../assets/Donation/ImpactStats.png')} > 
            </Image>
            <Image style = {styles.info} source = {require('../../assets/Donation/VideoContent.png')} > 
            </Image> */}

          </View>
            
        </View>

      </ScrollView>
      </SafeAreaView>
      </View>
  );
}

const styles = StyleSheet.create({
    backgroundimg: {
      position:'absolute', 
      left: 0, 
      top: 0,
      height: 200,
    },
    container: {
      backgroundColor: 'white',
      height: '100%',
    },
    scrollView: {
      backgroundColor: 'white',
      height: '100%',
    },
    mainContent: { // container view
      top: 200,
      backgroundColor: 'firebrick',
      marginHorizontal: 20,
    },
    header: {
      // backgroundColor: 'green',
      top: -50,
    },
    circle: {
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
      backgroundColor: 'lightgreen',
      top: 0,
    },
    whitetext: {
      // backgroundColor: 'blue',
      position: 'absolute',
      bottom: 50+5,
      left: 100+5,
      width: 250-5,
      fontSize: 30,
      color: 'white',
      fontWeight: 'bold',
    },
    blacktext: {
      position: 'absolute',
      // backgroundColor: 'purple',
      top: 50+5,
      left: 100+5,
      width: 250-5,
      fontSize: 16,
      color: 'black',
    },
    body: { // a container, a view
      top: -50+5,
      backgroundColor: 'lightblue',
    },
    infotext: {
      backgroundColor: 'brown',
      top: '17%',
      // left: '3%',
      marginBottom: 20,
    },
    info: {
      backgroundColor: 'green',
      top: '17%',
      marginBottom: 20,
      width: '99%',
    },
    buttontext: {
      color: COLORS.WHITE,
      fontWeight: 'bold',
      fontSize: 35,
    },
});