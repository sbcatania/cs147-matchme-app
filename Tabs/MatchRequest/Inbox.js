import React, { useState } from 'react';
import { Modal, Image, TextInput, StyleSheet, Button, Pressable, Text, View, FlatList, TouchableOpacity, SafeAreaView, } from 'react-native';
import styled from 'styled-components/native';
import { COLORS, DATA, IMAGES } from '../../Themes/Constants';
import MatchConfirmation from './MatchConfirmation';

import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


/* CITATION: https://github.com/musicodinghub/react-native-code-snippets/blob/master/src/screens/Feed/ActivityFeed.js */


/* To Do:
- Set up MatchEntry navigator and stuff
*/


const Inbox = ({ navigation }) => {
  const data = DATA.MATCH_REQUESTS;
  const data2 = DATA.ACTIVITY;

  const [modalVisible, setModalVisible] = useState(false);
  const [donAmt, setDonAmt] = useState("");

  const _renderRequests = ({ item, index }) => {
    return (
      <View>
        <Header>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Avatar source={item.avatar} />
            <UserName>{item.userName} - {item.cause}</UserName>
          </View>
          <Amount>{item.amount}</Amount>
        </Header>
        <Content>
          <ContentText>{item.content}</ContentText>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image style={{ width: 50, height: 50}} source={require("../../assets/Inbox/check.png")} />
          </TouchableOpacity>
        </Content>
      </View>
    )
  }

  const _renderActivity = ({ item, index }) => {
    return (
      <Card>
        <CardContent>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
            <UserName>{item.userName} donated {item.amount} to {item.cause}</UserName>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Image style={{ width: 50, height: 50 }} source={IMAGES.DONATE_ICON} />
            </TouchableOpacity>
          </View>
        </CardContent>
      </Card>
    )
  }


  return (
    <Container>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>

          <View style={styles.modalView}>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              style={{ float: "left" }}
            >
              <Image source={require('../../assets/Donation/arrow.png')} />
            </Pressable>
            <SafeAreaView style={styles.container} >
              <Text style={styles.description}> Save the Animals Fundraiser</Text>
              <Text>Matching James's donation</Text>
              <TextInput
                style={styles.textInput}
                value={donAmt} // the text variable in the state is displayed by the TextInput
                keyboardType="numeric"
                onChangeText={(newText) => setDonAmt(newText)}
              />
              {/*<View style={styles.flex}>
                  <View style={styles.suggestion}>
                    <Text style={styles.suggestiontext}>$3</Text>
                  </View>
                  <View style={styles.suggestion}>
                    <Text style={styles.suggestiontext}>$5</Text>
                  </View>
                  <View style={styles.suggestion}>
                    <Text style={styles.suggestiontext}>$10</Text>
                  </View>
                </View>*/}
              <Pressable style={styles.donatebutton} onPress={() => { navigation.navigate(MatchConfirmation); setModalVisible(false) }}
                style={({ pressed }) => [
                  {
                    top: '9%',
                    width: 250,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 12,
                    borderRadius: 100,
                    elevation: 3,
                    backgroundColor: pressed
                      ? 'gray'
                      : COLORS.GREEN
                  },
                  styles.wrapperCustom
                ]}
              >
                <Text style={styles.buttontext}> REVIEW </Text>
              </Pressable>
            </SafeAreaView>
          </View>
        </View>
      </Modal>
      <NavBar>
        <Title>{'Inbox'}</Title>
      </NavBar>
      <Title>{'Match Requests'}</Title>
      <FlatList style={{
        flexGrow: 0,
      }} keyExtractor={(_, index) => '' + index} data={data} renderItem={_renderRequests} />
      <Title>{'New Activity'}</Title>
      <FlatList style={{
        flexGrow: 0,
      }} keyExtractor={(_, index) => '' + index} data={data2} renderItem={_renderActivity} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;
const NavBar = styled.View`
  height: 76px;
  margin: 0px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
// center title
const Title = styled.Text`
  color: green;
  font-size: 14px;
  line-height: 24px;
  font-weight: bold;
`;
const Card = styled.View`
  margin-left: 3px;
  margin-right: 3px;
`;
const CardContent = styled.View`
  margin: 5px;
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 40px;
`;
const UserName = styled.Text`
  font-size: 14px;
  line-height: 24px;
  font-weight: bold;
  margin-left: 8px;
`;
const Amount = styled.Text`
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  color: green;
`;
const Content = styled.View`
  margin:  0px;
  display: flex;
  flex-direction: row;
`;
const ContentText = styled.Text`
  font-size: 14px;
  line-height: 24px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: 8,
    zIndex: 100,
    alignItems: "center"
  },
  flex: {
    flexDirection: 'row',
  },

  suggestion: {
    top: '5%',
    left: '37%',
    margin: 5,
    borderRadius: 100,
    width: 100,
    backgroundColor: COLORS.BLUE,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  suggestiontext: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
    fontSize: 28,
  },
  blacktext: {
    letterSpacing: 4,
    top: '7%',
    left: '20%',
    color: 'black',
    fontSize: 20,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 20,
    top: '2%',
    left: '5%',
    margin: 10,
    color: COLORS.BlACK,
  },
  textInput: {
    textAlign: 'center',
    width: 200,
    height: 100,
    fontSize: 50,
    backgroundColor: '#E5E5E5',
    fontWeight: 'bold',
  },
  backbutton: {
    top: '4%',
  },
  buttontext: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
    fontSize: 35,
  },
  donatebutton: {
    top: '6%',
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: COLORS.GREEN,
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'flex-end',
    marginBottom: -20,
    width: "100%"
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 600,
    width: "100%"
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
});

export default Inbox;