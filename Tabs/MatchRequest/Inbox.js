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


const MatchCard = () => {

  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const [text, setText] = useState("");
  // to do back button doesnt work
  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.rectangle}>
        <Text style={styles.description}> Save the Animals Fundraiser</Text>
        <Text>Matching James's donation</Text>     
        <TextInput
          style={styles.textInput}
          value={text} // the text variable in the state is displayed by the TextInput
          keyboardType="numeric"
          onChangeText={(newText) => setText(newText)}
        />
        <View style={styles.flex}>
          <View style={styles.suggestion}>
            <Text style={styles.suggestiontext}>$3</Text>
          </View>
          <View style={styles.suggestion}>
            <Text style={styles.suggestiontext}>$5</Text>
          </View>
          <View style={styles.suggestion}>
            <Text style={styles.suggestiontext}>$10</Text>
          </View>
        </View>
        <Pressable style={styles.donatebutton} onPress={() => {navigation.navigate(MatchConfirmation); setModalVisible(!modalVisible)}}
          style={({ pressed }) => [
            {
              top: '9%',
              left: '20%',
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
      </View>
    </SafeAreaView>
  );
}



const Inbox = ({ navigation }) => {

  const [show, setShow] = useState(false);
  // to do: set up JSON for matching feed
  const [data, setData] = useState(new Array(2).fill({
    id: 1,
    userName: 'James L',
    cause: 'Code in Place',
    avatar: require('../../assets/Users/landay.jpeg'),
    content: "Hiya Pablo! TAs normally get involved in this Stanford-started org democratizing CS. Could be up your alley ;)",
    amount: '$5'
  }));

  const [data2, setData2] = useState(new Array(6).fill({
    id: 1,
    userName: 'Pablo O',
    cause: 'YMCA',
    amount: '$5'
  }));

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
          </Content>
          <Button title={'V'} style={{ backgroundColor: COLORS.GREEN }} onPress={() => setModalVisible(!modalVisible)} />
        </View>
    )
  }

  const _renderActivity = ({ item, index }) => {
    return (
      <Card>
        <CardContent>
          <Header>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <UserName>{item.userName} donated {item.amount} to {item.cause}</UserName>
            </View>
          </Header>
          {/* Match button component code goes here*/}
        </CardContent>
      </Card>
    )
  }

  const [modalVisible, setModalVisible] = useState(false);

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
            >
              <Image source={require('../../assets/Donation/arrow.png')} />
            </Pressable>
            <MatchCard />
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
      {show && <MatchCard />}
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
  background-color: #fff;
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
    zIndex: 100
  },
  flex: {
    flexDirection: 'row',
  },
  rectangle: {
    borderRadius: 40,
    backgroundColor: COLORS.WHITE,
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
    top: '60%',
    left: '25%',
    textAlign: 'center',
    width: '50%',
    top: '2%',
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
    left: '20%',
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
    elevation: 5
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