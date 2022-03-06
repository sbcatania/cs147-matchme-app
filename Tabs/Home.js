import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Explore from './Donation/Explore';
import Fundraiser from './Donation/Fundraiser';
import DonationEntry from './Donation/DonationEntry';
import DonationConfirmation from './Donation/DonationConfirmation';
import MatchRequestSent from './Donation/MatchRequestSent';

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
        <Stack.Screen name="MatchRequestSent" component={MatchRequestSent} />
      </Stack.Navigator>
  );
}