import { StyleSheet, Pressable, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DonorFlow from './DonorFlow';
import NonprofitFlow from './NonprofitFlow';
import {COLORS} from './Constants';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { LogBox } from 'react-native';

// The below line disables all logs from being displayed on the app.
// Useful for screen recording.
// LogBox.ignoreAllLogs();

const LOAD_TIME = 100;
const INTERVAL = 25;

const Stack = createNativeStackNavigator();

function SignIn({navigation}) {
  return (
      <View style = {styles.container}>
        <Image style = {styles.logoimg} source = {require('./assets/Home/logofull.png')}> 
        </Image>
        <Text style = {styles.whitetext}> Welcome to Match.Me!</Text>
        <Text style = {styles.subtext}> Donor-matching platform that allows you to explore nonprofits and multiply your impact </Text>
        <Pressable onPress={()=>navigation.navigate(ChooseFlow)}
         style={({ pressed }) => [
          {
            top: '6%',
            left: '15%',
            width: 300,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            borderRadius: 100,
            elevation: 3,
            backgroundColor: pressed
              ? 'gray'
              : COLORS.BLACK
          },
          styles.wrapperCustom
        ]}
        >
            <Text style={styles.buttontext}> Sign In </Text> 
    </Pressable>
      </View>
  );
}

function ChooseFlow({navigation}) {
  return(
  <View style = {styles.container}>
    <Image style= { {top: '5%', left: '5%'}} source = {require('./assets/Home/logowhite.png')}> 
    </Image>
    <Text style = {styles.whitetext}> I am a </Text>
     <Pressable onPress={()=>navigation.navigate(DonorFlow)}
         style={({ pressed }) => [
          {
            top: '7%',
            left: '15%',
            width: 300,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            borderRadius: 100,
            elevation: 3,
            backgroundColor: pressed
              ? 'gray'
              : COLORS.WHITE
          },
          styles.wrapperCustom
        ]}
        >
            <Text style={styles.buttontextexplore}> Donor </Text> 
    </Pressable>

            <Pressable onPress={()=>navigation.navigate(NonprofitFlow)}
         style={({ pressed }) => [
          {
            top: '11%',
            left: '15%',
            width: 300,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            borderRadius: 100,
            elevation: 3,
            backgroundColor: pressed
              ? 'gray'
              : COLORS.WHITE
          },
          styles.wrapperCustom
        ]}
        >
            <Text style={styles.buttontextexplore}> Nonprofit </Text> 
    </Pressable>

  </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sign In"  screenOptions= {{
        headerShown: false,
      }}>
        <Stack.Screen name="SignIn" component={SignIn}
        />
        <Stack.Screen name="ChooseFlow" component={ChooseFlow}
        />
        
        <Stack.Screen name="DonorFlow" component={DonorFlow}
        />
        <Stack.Screen name="NonprofitFlow" component={NonprofitFlow} 
        />
      </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GREEN,
  },
  logoimg: {
    top: '17%',
    left: '12%',
  },
  buttontext: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttontextexplore: {
    color: COLORS.GREEN,
    fontWeight: 'bold',
    fontSize: 20,
  },
  whitetext: {
    textAlign: 'center',
    color: COLORS.WHITE,
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 140,
  },
  subtext: {
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 45,
    marginRight: 45,
    color: COLORS.WHITE,
    fontSize: 20,
  },
});
