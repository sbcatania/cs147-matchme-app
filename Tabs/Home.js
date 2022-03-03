import { StatusBar } from 'expo-status-bar';
import { createPortal } from 'react-dom';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
import { useFonts } from 'expo-font';
import {ImageBackground} from 'react-native' ;
import PagerView from "react-native-pager-view";
import { useState, useEffect } from "react";
import Feed1 from '../Tabs/Feed1';
import Feed2 from '../Tabs/Feed2';
import Feed3 from '../Tabs/Feed3';
import Feed4 from '../Tabs/Feed4';
import Feed5 from '../Tabs/Feed5';



const LOAD_TIME = 100;
const INTERVAL = 25;


export default function Home() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress + 10 >= LOAD_TIME) {
          clearInterval(interval);
        }
        return prevProgress + 10;
      });
    }, INTERVAL);

    return () => clearInterval(interval);
  }, []);


  return (
    <PagerView style={styles.pagerView} initialPage={0} orientation="vertical">
      <View key="1" style={styles.container}>
        {Feed1()}
      </View>
      <View key="3" style={styles.container}>
        {Feed3()}
      </View>
      <View key="2" style={styles.container}>
        {Feed2()}
      </View>
      <View key="4" style={styles.container}>
        {Feed4()}
      </View>
      <View key="5" style={styles.container}>
        {Feed5()}
      </View>
    </PagerView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagerView: {
    flex: 1
  }
});