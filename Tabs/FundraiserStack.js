import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SetupFundraiser from './Nonprofit/SetupFundraiser';
import Rewards from './Nonprofit/Rewards';
import NFPProfile from './Nonprofit/NFPProfile';
import {COLORS} from '../Constants';

const LOAD_TIME = 100;
const INTERVAL = 25;

const Stack = createNativeStackNavigator();

export default function Nonprofit() {
  return (
      <Stack.Navigator initialRouteName="NFPProfile"  screenOptions= {{
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
        
        <Stack.Screen name="NFPProfile" component={NFPProfile}
        />
        <Stack.Screen name="SetupFundraiser" component={SetupFundraiser}
        />
        <Stack.Screen name="Rewards" component={Rewards}  
        />
      </Stack.Navigator>
  );
}