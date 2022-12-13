import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, View, Text, Image, ScrollView, Animated, Easing, TouchableOpacity, Dimensions } from 'react-native';
import React, {useState} from "react";
//import { Provider as PaperProvider } from 'react-native-paper';

function CreateAccount_SignIn() {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);
    return(
        <View style={stylesheet.container}>
            <Text style={stylesheet.tenantText}>Tenant</Text>
            <Text style={stylesheet.goForYourText}>Go for your</Text>
            <Text style={stylesheet.moneyGoals}>Money Goals</Text>
            <View style={stylesheet.container}>
            <TouchableOpacity
                style={stylesheet.button}
                onPress={onPress}>
                <Text style={stylesheet.whiteText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={stylesheet.whiteButton}
                onPress={onPress}>
                <Text style={stylesheet.purpleText}>Create an Account</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}

export default CreateAccount_SignIn;


const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  button: {
    alignItems: "center",
    backgroundColor: "#8e77ff",
    padding: 10,
    color: "#ffffff",
    borderRadius: 10,
    width: 200,
  },
  whiteButton : {
    borderColor: "#8e77ff",
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 10,
    width: 200,
  },
  tenantText : { 
    textAlign: 'center',
    width: 273,
    height: 52,
    color: "#8e77ff",
    fontSize: 25,
    fontWeight: "bold"
  },
  goForYourText : { 
    textAlign: 'center',
    width: 273,
    height: 52,
    color: "#000000",
    fontSize: 22,
    fontWeight: "bold"
  },
  moneyGoals : { 
    textAlign: 'center',
    width: 273,
    height: 52,
    color: "#8e77ff",
    fontSize: 22,
    fontWeight: "bold"
  },
  whiteText: {
    textAlign: 'center',
    width: 273,
    color: "#ffffff",
    fontWeight: "bold"
  },
  purpleText: {
    textAlign: 'center',
    width: 273,
    color: "#8e77ff",
    fontWeight: "bold"
  },
  Tenant: {
    color: "#8e77ff"
  }
});
