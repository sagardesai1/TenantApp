import { StyleSheet, Text, View, SafeAreaView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import React from "react";

function PhoneScreen() {
    return (
    <SafeAreaView style = {styles.container}>
        <View style = {styles.iconContainer}>
            <Icon name="plus" size={25} color="#8E77FF" />
        </View>
        <Text style={styles.heading}>Contacts</Text>
        <View style = {styles.searchBarContainer}>
            <View style = {styles.searchBar}>
                <IconFeather name="search" size={14} color="#000" />
                <TextInput style={styles.searchText} placeholder="Search"/>
            </View>
        </View>
        <View style = {styles.contactsContainer}>
            <View style = {styles.fakeContactsContainer}>
                <Text style={styles.heading}>Sam Smith</Text>
            </View>
            <View style = {styles.fakeContactsContainer}>
                <Text style={styles.heading}>Jason Lincoln</Text>
            </View>
            <View style = {styles.fakeContactsContainer}>
                <Text style={styles.heading}>Kevin Chou</Text>
            </View>
        </View>
    </SafeAreaView>
  );
}

export default PhoneScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    iconContainer:{
        flexDirection: 'row',
        paddingTop: '2%',
        justifyContent: 'flex-end',
        right: '3%',
    },
    contactsContainer: {
        flex: 1, 
        alignItems: 'center', 
        paddingTop: '10%',
    },
    fakeContactsContainer: {
        width: '85%',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#EAE9F0',
        borderBottomWidth: 1,
        height: '7%',
        alignItems: 'center'
    },
    heading: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: "bold",
    },
    searchText: {
        color: "#8A8A8D",
        fontSize: 13,
        justifyContent: 'center',
        paddingLeft: '3%',
    },
    searchBarContainer:{
        alignItems: 'center',
        paddingTop: '5%',
    },
    searchBar:{
        paddingLeft: '2%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EFEFEF',
        borderRadius: 20,
        borderColor: '#EAE9F0',
        borderWidth: 1,
        height: 25,
        width: '85%',
    },
});