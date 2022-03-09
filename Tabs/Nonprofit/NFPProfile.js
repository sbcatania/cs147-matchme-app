import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { COLORS } from '../../Constants';

/* 
* TODO: 
*   - Implement NFP profile page.
*   - WHITE BACKGROUND - do the hacky safe area view thing to get a completely white bacgkround
*/

export default function Fundraiser() {
  

  // NAVIGATION: Setup nav between pages
  const navigation = useNavigation();

  
  return(

      <SafeAreaView styles={styles.safeAreaContainer}>
      <View style={styles.container}>

        <View style={styles.headerContainer}>
          <Text style={styles.titles}>NFP Profile</Text>
        </View>

        
        <View style={styles.mainContent}>
            <Text> Hello world.</Text>
            
        </View>
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    safeAreaContainer: {
      backgroundColor: 'white',
    },
    container: {
      backgroundColor: 'white',
      height: '100%',
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
    axnButton: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
});