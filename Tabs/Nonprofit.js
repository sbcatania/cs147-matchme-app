import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SetupFundraiser from './Nonprofit/SetupFundraiser';
import Rewards from './Nonprofit/Rewards';
import Landing from './Nonprofit/Landing';
import {COLORS} from '../Constants';
import FundraiserNonprofit from './Nonprofit/FundraiserNonprofit'

const LOAD_TIME = 100;
const INTERVAL = 25;

const Stack = createNativeStackNavigator();
// turn this into a stack navigator 
export default function Nonprofit() {
  return (
      <Stack.Navigator initialRouteName="Landing"  screenOptions= {{
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
        
        <Stack.Screen name="Landing" component={Landing}
        />
        <Stack.Screen name="SetupFundraiser" component={SetupFundraiser}
        />
        <Stack.Screen name="Rewards" component={Rewards}  
        />
        <Stack.Screen name="FundraiserNonprofit" component={FundraiserNonprofit}  
        />
      </Stack.Navigator>
  );
}