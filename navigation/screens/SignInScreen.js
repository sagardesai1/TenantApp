import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


function SignInScreen() {
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
            </View>
            <View style = {styles.forgotPassWordContainer}>
                <Text style={styles.credentialsText}>Forgot Password?</Text>
            </View>
            <View style = {styles.signInContainer}>
                <TouchableOpacity
                    style={styles.signInButton}>
                    <Text style={styles.signInText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default SignInScreen;

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
    signInContainer:{
        flex: 1.25,
        //borderWidth: 1,
        alignItems: 'center'
    },
    credientalsContainer: {
        flex: 1.5,
        //borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    forgotPassWordContainer:{
        flex: 1,
        //borderWidth: 1,
        alignItems: 'center'
    },
    textContainer:{
        flex: 1,
        left: '25%',
        //borderWidth: 1,
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
    signInButton: {
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
    signInText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center',
    }
});