import { StatusBar } from 'expo-status-bar';
import { createPortal } from 'react-dom';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Tabs/Home';
import colors from './Themes/colors';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
            } else if (route.name === 'Inbox') {
              iconName = 'mail-outline'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.green,
          tabBarInactiveTintColor: 'gray',
          
        })}
      
      >
        <Tab.Screen name="Profile" component={Home} />
        <Tab.Screen name="Inbox" component={Home} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
