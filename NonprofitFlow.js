import { StatusBar } from 'expo-status-bar';
import { createPortal } from 'react-dom';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Nonprofit from './Tabs/Nonprofit';
import NFPProfile from './Tabs/Nonprofit/NFPProfile';
import Landing from './Tabs/Nonprofit/Landing';
import Fundraiser from './Tabs/Donation/Fundraiser';
import {COLORS} from './Constants';

const Tab = createBottomTabNavigator();
export default function NonprofitFlow({navigation}) {
  return (
    
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Nonprofit') {
              iconName = "home-outline";
            } else if (route.name === 'NFPProfile') {
              iconName = 'person-outline';
            } 

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: COLORS.GREEN,
          tabBarInactiveTintColor: 'gray',
          
        })}
      
      >
        <Tab.Screen name="Nonprofit" component={Nonprofit} />
      </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
