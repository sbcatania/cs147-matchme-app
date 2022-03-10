import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Explore from './Donation/Explore';
import Fundraiser from './Donation/Fundraiser';
import DonationEntry from './Donation/DonationEntry';
import DonationConfirmation from './Donation/DonationConfirmation';
import MatchRequestSent from './Donation/MatchRequestSent';
import FeedScreen from './Donation/FeedScreen';
import {COLORS} from '../Constants';

const LOAD_TIME = 100;
const INTERVAL = 25;

global.handlename = null;


const Stack = createNativeStackNavigator();
// turn this into a stack navigator 
export default function Home() {
  return (
      <Stack.Navigator initialRouteName="Explore"  screenOptions= {{
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
        
        <Stack.Screen name="FeedScreen" component={FeedScreen}
        />
        <Stack.Screen name="Fundraiser" component={Fundraiser} 
        
        />
        <Stack.Screen name="DonationEntry" component={DonationEntry}
    
        />
        <Stack.Screen name="DonationConfirmation" component={DonationConfirmation} />
        <Stack.Screen name="MatchRequestSent" component={MatchRequestSent} />
      </Stack.Navigator>
  );
}