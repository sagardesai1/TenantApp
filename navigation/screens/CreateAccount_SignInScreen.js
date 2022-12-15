import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import React, {useState} from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function CreateAccount_SignInScreen() {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);
    return(
        <SafeAreaView style={stylesheet.container}>
          <View style = {stylesheet.logoContainer}>
          
          </View>
          <View style = {stylesheet.introTextContainer}>
            <Text style={stylesheet.goForYourText}>Go for your</Text>
            <Text style={stylesheet.moneyGoals}>Money Goals</Text>
          </View>
          <View style = {stylesheet.buttonContainer}>
            <TouchableOpacity
                style={stylesheet.purpleButton}
                onPress={onPress}>
                <Text style={stylesheet.whiteText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={stylesheet.whiteButton}
                onPress={onPress}>
                <Text style={stylesheet.purpleText}>Create an Account</Text>
            </TouchableOpacity>
          </View>
          <View style = {stylesheet.continueWithContainer}>
            <Text style={stylesheet.continueWithText}>Continue With</Text>
          </View>
          <View style = {stylesheet.socialMediaContainer}>
            <View style = {stylesheet.smallerWidthContainer}>
              <Icon name="facebook" size={30} color="#1977F3" />
              <Icon name="google" size={30} color="#34A853" />
              <Icon name="apple" size={30} color={"#000"} />
            </View>
          </View>
        </SafeAreaView>
    );
}

export default CreateAccount_SignInScreen;


const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  logoContainer: {
    flex: 3.5,
    //borderWidth: 1,
    alignItems: 'center'
  },
  introTextContainer:{
    //borderWidth: 1,
    alignItems: 'center',
    //justifyContent: '',
    flex: 1
  },
  buttonContainer:{
    flex: 1.35,
    alignItems: 'center',
    justifyContent: 'space-between',
    //borderWidth: 1,
  },
  socialMediaContainer:{
    flex: .80,
    alignItems: 'center',
    //borderWidth: 1,
  },
  continueWithContainer:{
    flex: .5,
    justifyContent: 'center',
  },
  smallerWidthContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '60%',
    //borderWidth: 1,
  },
  purpleButton: {
    backgroundColor: "#8e77ff",
    width: '70%',
    padding: '4%',
    color: "#ffffff",
    borderRadius: 15,
  },
  whiteButton : {
    borderColor: "#8e77ff",
    borderRadius: 15,
    width: '70%',
    padding: '4%',
    backgroundColor: "#ffffff",
    borderWidth: 1,  
  },
  goForYourText : { 
    textAlign: 'center',
    color: "#000000",
    fontSize: 22,
    fontWeight: "bold"
  },
  moneyGoals : { 
    textAlign: 'center',
    color: "#8e77ff",
    fontSize: 22,
    fontWeight: "bold"
  },
  whiteText: {
    textAlign: 'center',
    color: "#ffffff",
    fontWeight: "bold",
    //fontSize: 18,
  },
  purpleText: {
    textAlign: 'center',
    color: "#8e77ff",
    fontWeight: "bold"
  },
  continueWithText: {
    textAlign: 'center',
    color: "#AEABC2",
    fontWeight: '600',
  }
});
