import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


function SignInScreen() {
    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.logoContainer}>
          
            </View>
            <View style = {styles.credientalsContainer}>
                <TouchableOpacity
                    style={styles.credentialsButton}>
                    <Icon name="account-circle" size={20} color="#AEABC2" />
                    <Text style={styles.credentialsText}>Username</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.credentialsButton}>
                    <Icon name="lock" size={20} color="#AEABC2" />
                    <Text style={styles.credentialsText}>Password</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.forgotPassWordContainer}>
            
            </View>
            <View style = {styles.loginInContainer}>

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
        borderWidth: 1,
        alignItems: 'center'
    },
    loginInContainer:{
        flex: 1,
        borderWidth: 1,
        alignItems: 'center'
    },
    credientalsContainer: {
        flex: 1,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    forgotPassWordContainer:{
        flex: 1,
        borderWidth: 1,
        alignItems: 'center'
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
    credentialsText:{
        color: '#AEABC2',
        fontSize: 16,
        fontWeight: "bold"
    },
});