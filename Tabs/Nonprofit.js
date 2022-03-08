import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Explore from './Donation/Explore';
import Fundraiser from './Donation/Fundraiser';
import DonationEntry from './Donation/DonationEntry';
import DonationConfirmation from './Donation/DonationConfirmation';
import MatchRequestSent from './Donation/MatchRequestSent';
import {COLORS} from '../Themes/Constants';

const LOAD_TIME = 100;
const INTERVAL = 25;

const Stack = createNativeStackNavigator();
// turn this into a stack navigator 
export default function Nonprofit() {
  return (
      <Stack.Navigator initialRouteName="SetupFundraiser"  screenOptions= {{
        headerTransparent: true,
        headerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        height: 1,
      },
      
      headerTitleStyle: {
        color: 'rgba(0, 0, 0, 0)',
      },
      headerTintColor: COLORS.BLACK,
    
      headerBackTitleVisible: false,
      }}>
        
        <Stack.Screen name="SetupFundraiser" component={SetupFundraiser}
        />
        <Stack.Screen name="Rewards" component={Rewards}  
        />
      </Stack.Navigator>
  );
}