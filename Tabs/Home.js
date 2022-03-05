import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Explore from './Donation/Explore';
import Fundraiser from './Donation/Fundraiser';
import DonationEntry from './Donation/DonationEntry';
import DonationConfirmation from './Donation/DonationConfirmation';
import DonationThankYou from './Donation/DonationThankYou';


const LOAD_TIME = 100;
const INTERVAL = 25;

const Stack = createNativeStackNavigator();
// turn this into a stack navigator 
export default function Home() {
  return (
      <Stack.Navigator initialRouteName="Explore" screenOptions={{
        headerShown: false}} >
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Fundraiser" component={Fundraiser} />
        <Stack.Screen name="DonationEntry" component={DonationEntry} />
        <Stack.Screen name="DonationConfirmation" component={DonationConfirmation} />
        <Stack.Screen name="DonationThankYou" component={DonationThankYou} />
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