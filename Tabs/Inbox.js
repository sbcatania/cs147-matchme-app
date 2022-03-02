import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import styled from 'styled-components/native';

/* CITATION: https://github.com/musicodinghub/react-native-code-snippets/blob/master/src/screens/Feed/ActivityFeed.js */


/* To Do:
- back button
- center "Inbox" title
- create decent JSON file data
- add match button and checkmark/close button components
*/

const Inbox = ({ navigation }) => {

  // to do: set up JSON for matching feed
  const [data, setData] = useState(new Array(2).fill({
    id: 1,
    userName: 'James L',
    cause: 'Code in Place',
    avatar: require('./assets/landay.jpeg'),
    content: "Hiya Pablo! TAs normally get involved in this Stanford-started org democratizing CS. Could be up your alley ;)",
    amount: '$5'
  }));

  const [data2, setData2] = useState(new Array(6).fill({
    id: 1,
    userName: 'Pablo O',
    cause: 'YMCA',
    amount: '$5'
  }));

  const _renderRequests = ({item, index}) => {
    return (
      <Card>
        <CardContent>
          <Header>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Avatar source={item.avatar} />
              <UserName>{item.userName} - {item.cause}</UserName>
            </View>
            <Amount>{item.amount}</Amount>
          </Header>
          <Content>
            <ContentText>{item.content}</ContentText>
          </Content>
            {/* Match button component code goes here*/}
        </CardContent>
      </Card>
    )
  }

  const _renderActivity = ({item, index}) => {
    return (
      <Card>
        <CardContent>
          <Header>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <UserName>{item.userName} donated {item.amount} to {item.cause}</UserName>
            </View>
          </Header>
            {/* Match button component code goes here*/}
        </CardContent>
      </Card>
    )
  }

  return (
    <Container>
      <NavBar>
        <Title>{'Inbox'}</Title>
      </NavBar>
      <Title>{'Match Requests'}</Title>
      <FlatList style={{
          flexGrow: 0,
        }} keyExtractor={(_, index) => ''+index} data={data} renderItem={_renderRequests}/>
      <Title>{'New Activity'}</Title>
      <FlatList style={{
          flexGrow: 0,
        }} keyExtractor={(_, index) => ''+index} data={data2} renderItem={_renderActivity}/>
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

export default Inbox;