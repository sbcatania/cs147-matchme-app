import React from 'react';
import { StyleSheet, Text, Pressable, View, Image, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";
import { COLORS, DATA } from '../../Constants';


export default function NFPFundraiser() {

    const route = useRoute();
    console.log(route.params);
    const [handle, _] = React.useState(route.params);
    console.log("This is the handle");
    console.log(handle);
    // console.log(DATA.PROFILES[handle]);
    // console.log(route.params);
    let data = DATA.PROFILES[handle];
    //console.log(data);
    const navigation = useNavigation();

  return(
      <View style={styles.container}>
      <SafeAreaView>
      <ScrollView style={styles.scrollView}>

        {/* Moose, different margins than everything else! */}
        <View>
          <Image source={require('../../assets/Donation/moose.png')} style={styles.backgroundimg}></Image>
        </View>
        
        {/* All the other content, 20px margins */}
        <View style={styles.mainContent}>
            
          {/* Header */}
          <View style={styles.header}> 
              <Image source={require('../../assets/Nonprofit/wwf.png')} style={{resize: 'center', height: 100, width: 100,}}></Image>
              <Text style = {styles.whitetext}>Save the Animals</Text>
              <Text style = {styles.blacktext}>World Wildlife Fund{'\n'}MARCH 2022-FEBRUARY 2023</Text>
          </View>

          {/* Body Content */}
          <View style={styles.body}>
            
            <View style={styles.pageElem}>
              <Text style={styles.heading1}>
                About this fundraiser
              </Text>
              <Text>
                The Save the Animals campaign aims to ensure all animals have a habitat suited for their needs. Funds will go to conservation efforts worldwide.
              </Text>
            </View>
            
            <Pressable onPress={() => { // navigation.navigate('DonationEntry', handle)
              }}
              style={({ pressed }) => [
                {
                  left: '15%', 
                  width: '70%',
                  marginVertical: 10,
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

            <View style={styles.pageElem}>
              <Text style={styles.heading1}>
                Impact
              </Text>
              <Image source={require('../../assets/Nonprofit/impact.png')} style={{height: 350, width: '100%', resizeMode: 'contain', }}></Image>
              
          </View>

          <View style={styles.pageElemFullScreen}>
            <Image source={require('../../assets/Nonprofit/grid.png')} style={{height: 550, width: '100%', resizeMode: 'contain', }}></Image>
          
            <View style={{backgroundColor: 'white', height: 140, }}>
              {/* This is whitespace, so we can scroll to the bottom */}
            </View>
          </View>

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
      // backgroundColor: 'firebrick',
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
      // backgroundColor: 'lightblue',
    },
    heading1: {
      fontWeight:'bold', 
      fontSize: 24,
      marginBottom: 5,
    },  
    pageElem: {
      marginVertical: 10, 
      // backgroundColor:'beige',
    },
    pageElemFullScreen: {
      marginVertical: 10, 
      marginHorizontal: -22,
    },  
    buttontext: {
      color: COLORS.WHITE,
      fontWeight: 'bold',
      fontSize: 35,
    },
});