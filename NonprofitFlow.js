import { StatusBar } from 'expo-status-bar';
import { createPortal } from 'react-dom';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Nonprofit from './Tabs/Nonprofit';
import Profile from './Tabs/Profile';
import {COLORS} from './Themes/Constants';

const Tab = createBottomTabNavigator();

export default function NonprofitFlow({navigation}) {
  return (
    
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Nonprofit') {
              iconName = "home-outline";
            } else if (route.name === 'Profile') {
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
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
