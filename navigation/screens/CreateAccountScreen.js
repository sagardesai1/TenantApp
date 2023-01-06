import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


function CreateAccountScreen() {
    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.logoContainer}>
          
            </View>
            <View style = {styles.credientalsContainer}>
                <View
                    style={styles.credentialsButton}>
                    <Icon name="account-circle" size={20} color="#AEABC2" />
                        <View style = {styles.textContainer}>
                            <Text style={styles.credentialsText}>Username</Text>
                        </View>
                </View>
                <View
                    style={styles.credentialsButton}>
                    <Icon name="lock" size={20} color="#AEABC2" />
                    <View style = {styles.textContainer}>
                        <Text style={styles.credentialsText}>Password</Text>
                    </View>
                </View>
                <View
                    style={styles.credentialsButton}>
                    <Icon name="lock" size={20} color="#AEABC2" />
                    <View style = {styles.textContainer}>
                        <Text style={styles.credentialsText}>Password</Text>
                    </View>
                </View>
            </View>
            <View style = {styles.createAccountContainer}>
                <TouchableOpacity
                    style={styles.createAccountButton}>
                    <Text style={styles.createAccountText}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default CreateAccountScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logoContainer: {
        flex: 2.5,
        //borderWidth: 1,
        alignItems: 'center'
    },
    credientalsContainer: {
        flex: 2,
        //borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textContainer:{
        flex: 1,
        left: '25%',
        //borderWidth: 1,
    },
    createAccountContainer:{
        flex: 1.5,
        //borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    credentialsButton: {
        borderColor: "#8e77ff",
        borderRadius: 15,
        width: '70%',
        padding: '4%',
        backgroundColor: "#ffffff",
        borderWidth: 1, 
        flexDirection: 'row'
    }, 
    createAccountButton: {
        borderRadius: 15,
        width: '50%',
        padding: '4%',
        backgroundColor: "#8e77ff",
    },
    credentialsText:{
        color: '#AEABC2',
        fontSize: 16,
        fontWeight: "bold"
    },
    createAccountText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center',
    }

});