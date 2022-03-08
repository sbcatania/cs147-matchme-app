import { StatusBar } from 'expo-status-bar';
import { createPortal } from 'react-dom';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Tabs/Home';
import Match from './Tabs/Match';
import Search from './Tabs/Search';
import Profile from './Tabs/Nonprofit/NonprofitProfile'; 
import Nonprofit from './Tabs/Nonprofit';
import {COLORS} from './Constants';


const Tab = createBottomTabNavigator();

export default function DonorFlow({navigation}) {
  return (
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = "home-outline";
            } else if (route.name === 'Profile') {
              iconName = 'person-outline';
            } else if (route.name === 'Search') {
              iconName = 'search-outline'
            } else if (route.name === 'Match') {
              iconName = 'mail-outline'
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
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Match" component={Match} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
