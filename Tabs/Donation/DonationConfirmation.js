import { useRoute } from "@react-navigation/native";
import { Alert, TextInput, Modal, Pressable, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView, Button, TouchableWithoutFeedback } from "react-native";
import PagerView from "react-native-pager-view";
import { useState, useEffect, useRef } from "react";
import MatchRequestSent from './MatchRequestSent';
import { COLORS, DATA, IMAGES } from '../../Constants';
import { useNavigation } from '@react-navigation/native';

const LOAD_TIME = 100;
const INTERVAL = 25;
const handle = global.handle;
let data = DATA.PROFILES[handle];
console.log(handle);


//TODO: Back button on thank you page doesn't work :|
//TODO: Add dummy users/data for Matching

function Confirmation() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container} >
      <View style={styles.rectangle} >
        <Text style={styles.blacktext}>${route.params}</Text>
        <Text style={styles.bluetext}>Your donation will support </Text>
         <Text style={styles.bluetext}> Saving the Animals </Text>
        <Text style={styles.fineprint}>
          This donation is tax-deductible. Here's more information on your donation:
        </Text>
        <Text style={styles.fineprint}>
          By making this non-refundable donation to the SAVE THE ANIMALS FUNDRAISER hosted by the WORLD WILDLIFE FUND (WWF), you agree that money will be transferred from your account to the accounts of WWF. WWF is a registered 501(c)(3) not-for-profit corporation and your donation is tax-deductible. By making this donation, you waive your right to direct the use of funds by the WWF and hereby acknowledge that it is at the discretion of WWF as to if they would like to honor any and all promised rewards. Additionally, WWF has the right to refuse any donation, in which case the funds will be refunded to your account.  </Text>
        <Text style={styles.fineprint}>
          SUBMITTING THIS DONATION INDICATES YOU HAVE READ AND AGREED TO THESE TERMS AND CONDITIONS.        </Text>
      </View>
      <Text style={styles.confirmtext}> Swipe up to confirm </Text>
    </View>
  );
}

// Donation Thank You screen
function ThankYou() {
  const navigation = useNavigation();
  const route = useRoute();
  const ref = useRef();
  const users = DATA.USERS;

  // MATCHING MODAL SET UP
  const [modalVisible, setModalVisible] = useState(false);

  // TEXTINPUT: Setup state variables
  const [message, setMessage] = useState("");

  const ItemRender = ({ name, avatar }) => (
    <View style={styles.user}>
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
           
            <Text style={styles.modalText}>Match Request</Text>
            <SafeAreaView>
              <View style={{ display: "flex", justifyContent: "space-between" }}>
                <TextInput
                  style={styles.input}
                  defaultValue={name}
                  editable={false} />

                <TextInput
                  style={styles.input}
                  defaultValue={route.params}
                  editable={false} />
              </View>
              <TextInput
                style={styles.input}
                defaultValue="Saving the Animals"
                editable={false} />

              <TextInput
                style={styles.message}
                placeholder='Message'
                multiline
                onChangeText={(message) => setMessage(message)} />


            </SafeAreaView>
            <Pressable onPress={() => { setModalVisible(!modalVisible); navigation.navigate(MatchRequestSent) }}
              style={({ pressed }) => [
                {
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
              <Text style={{
                fontSize: 16, color: COLORS.WHITE,
                fontWeight: 'bold'
              }}> Send Match Request </Text>
            </Pressable>
            {/* <Pressable style={styles.backbutton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Image source={IMAGES.DONATION_ARROW} />
            </Pressable> */}
          </View>
        </View>
      </Modal>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={avatar}
      />
      <Text style={styles.name}>{name}</Text>
      <Pressable
        style={{
          borderRadius: 100,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
          backgroundColor: 'white',
          width: 40,
          height: 40
        }}
        onPress={() => setModalVisible(true)}>
        <Image source={IMAGES.DONATION_SHARE} style={{ width: "auto", height: 40 }} />
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container} >
      <View style={styles.flex}>
        <Image source={IMAGES.LOGO_WHITE} style={styles.logoimg}>
        </Image>
      </View>
      <Image source={IMAGES.DONATION_CHECK} style={styles.thankyouimg}>
      </Image>
      <Text style={styles.thankyoutext}> Thank you! </Text>
      {/*<Image source = {require('../../assets/Donation/friendcard.png')} style = {styles.matchimg}> 
    </Image>*/}


      {/*Friend Matching */}
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.cardtext}>Ask your friends to match</Text>
            <FlatList
              data={users}
              renderItem={({ item }) => <ItemRender name={item.name} avatar={item.avatar} />}
              keyExtractor={item => item.id}
            />
          </View>
          <Pressable onPress={() => navigation.navigate("Explore")}
            style={({ pressed }) => [
              {
                top: '9%',
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
            <Text style={styles.buttontextexplore}> Explore Other Nonprofits </Text>
          </Pressable>
        </View>
      </ScrollView>

    </View>
  );
}


export default function DonationConfirmation() {
  const navigation = useNavigation();
  const route = useRoute();
  const [progress, setProgress] = useState(0);
  const ref = useRef();

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
    <PagerView style={styles.pagerView} initialPage={0} orientation="vertical" pageMargin="1000" ref={ref}>
      <View key="1" style={styles.container}>
        {Confirmation()}
      </View>
      <View key="2" style={styles.container}>
        {ThankYou()}
      </View>
    </PagerView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GREEN,
  },
  pagerView: {
    flex: 1,
    backgroundColor: COLORS.GREEN,
  },
  card: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
    margin: 10,
    left: '8%',
    height: '100%',
    width: '80%',
  },
  cardtext: {
    margin: 20,
    textAlign: 'center',
    color: COLORS.BLACK,
    fontSize: 20,
    fontWeight: 'bold',
  },
  blacktext: {
    textAlign: 'center',
    top: '10%',
    letterSpacing: 4,
    color: COLORS.BLACK,
    fontSize: 100,
    fontWeight: 'bold',
  },
  thankyoutext: {
    textAlign: 'center',
    letterSpacing: 4,
    color: COLORS.WHITE,
    fontSize: 55,
    fontWeight: 'bold',
    marginTop: 20,
  },
  confirmtext: {
    textAlign: 'center',
    top: '90%',
    letterSpacing: 4,
    color: COLORS.WHITE,
    fontSize: 30,
  },


  bluetext: {
    textAlign: 'center',
    top: '15%',
    marginHorizontal: 10,
    color: COLORS.BLUE,
    fontSize: 20,
    fontWeight: 'bold',
  },
  fineprint: {
    textAlign: 'center',
    top: '20%',
    marginTop: 10,
    marginHorizontal: 10,
    color: COLORS.BLACK,
    fontSize: 12,
  },
  rectangle: {
    position: 'absolute',
    top: 0,
    height: '85%',
    width: '100%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: COLORS.WHITE,
  },
  backbutton: {
    top: '6%',
  },
  buttontext: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
    fontSize: 35,
  },
  buttontextexplore: {
    color: COLORS.GREEN,
    fontWeight: 'bold',
    fontSize: 20,
  },
  flex: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  logoimg: {
    top: '5%',
    left: '5%',
  },
  matchimg: {
    left: '1%',
  },
  thankyouimg: {
    height: 130,
    width: 130,
    left: '36%',
  },
  button: {
    top: '10%',
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 15,
    marginLeft: 5,
  },
  image: {
    width: 40,
    height: 40,
    marginLeft: 20,
    borderRadius: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: 'normal',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
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
    top: 0,
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.GREEN,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'transparent',
    padding: 8,
    backgroundColor: '#F2F2F2',
    // placeholderTextColor: 'black',
    borderRadius: 10,
    marginVertical: 8,
    width: 250,
  },
  message: {
    height: 200,
    borderWidth: 1,
    borderColor: 'transparent',
    padding: 8,
    backgroundColor: '#F2F2F2',
    // placeholderTextColor: 'black',
    borderRadius: 10,
    marginVertical: 8,
    width: 250,
    marginBottom: 20,
  }
});