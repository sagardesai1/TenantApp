import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


function TenantOrLandlordScreen() {
    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.welcomeTextContainer}>
                <View style = {styles.shortenWidthContainer}>
                    <Text style={styles.welcomeText}>Welcome to {"\n"}App Name</Text>
                </View>
            </View>
            <View style = {styles.subTextContainer}>
                <View style = {styles.shortenWidthContainer}>
                    <Text style={styles.subText}>Let's get started.</Text>
                    <Text style={styles.subText}>Are you a Tenant or Landlord?</Text>
                </View>
            </View>
            <View style = {styles.buttonsContainer}>
                <View style = {styles.button}>
                    <Text style={styles.roleText}>Tenant</Text>
                </View>
                <View style = {styles.button}>
                    <Text style={styles.roleText}>Landlord</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default TenantOrLandlordScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    welcomeTextContainer: {
        flex: .22,
        //borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    shortenWidthContainer:{
        width: '70%',
        //borderWidth: 1,
    },
    subTextContainer:{
        flex: .07,
        //borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsContainer:{
        flex: .70,   
        //borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    button: {
        borderRadius: 15,
        width: '60%',
        padding: '5%',
        borderWidth: 1,
        borderColor: '#EAE9F0',
        backgroundColor: "#fff",
    },
    welcomeText: {
        fontSize: 36,
        fontWeight: "bold",
        textAlign: 'center'
    },
    subText: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: "500",
        color: '#8A8A8D'
    },
    roleText:{
        fontSize: 15,
        fontWeight: "500",
        textAlign: 'center'
    },
    
});