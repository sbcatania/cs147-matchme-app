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
            <View style={styles.header}> 
              <Circle></Circle>
                <Text style = {styles.whitetext}>Save the Animals</Text>
                <Text style = {styles.blacktext}>MARCH 2022-FEBRUARY 2023</Text>
            </View>
            
            <Text style = {styles.blacktext}> {DATA.dates} </Text>
            <Pressable style={styles.donatebutton} onPress={() => {
              // navigation.navigate('DonationEntry', handle)
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
      backgroundColor: 'white'
    },
    scrollView: {
      backgroundColor: 'white',
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