import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';

function ConnectBankAccountScreen() {
    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.iconContainer}>
                <View style = {styles.iconContexts}>
                    <Icon name="chevron-left" size={25} color="#8E77FF" />
                </View>
            </View>
            <View style = {styles.headingTextContainer}>
                <View style = {styles.shortenWidthContainer}>
                    <Text style={styles.headingText}>Connect your Bank Account or Credit Card </Text>
                </View>
            </View>
            <View style = {styles.enterManuallyTextContainer}>
                <View style = {styles.shortenWidthContainer}>
                    <Text style={styles.enterManuallyText}>Start tracking your expenses</Text>
                </View>
            </View>
            <View style = {styles.searchBarContainer}>
                <View style = {styles.searchBar}>
                    <IconFeather name="search" size={14} color="#000" />
                    <TextInput style={styles.searchText} placeholder="Search your finanical instution"/>
                </View>
            </View>
            <View style = {styles.buttonsContainer}>
                <View style = {styles.skipForNowContainer}>
                    <TouchableOpacity
                        style={styles.skipForNowButton}>
                        <Text style={styles.skipForNowText}>Skip for now</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.nextContainer}>
                    <TouchableOpacity
                        style={styles.nextButton}>
                        <Text style={styles.nextText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
         </SafeAreaView>
    );
}

export default ConnectBankAccountScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    iconContainer:{
        alignItems: 'center',
        paddingTop: '2%',
    },
    headingTextContainer: {
        flex: .25,
        //borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    enterManuallyTextContainer:{
        flex: .05,
        //borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shortenWidthContainer:{
        width: '70%',
        //borderWidth: 1,
    },
    searchBarContainer:{
        flex: .6,
        alignItems: 'center',
        paddingTop: '5%',
    },
    buttonsContainer: {
        flex: .20,
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'center',
        //borderWidth: 1,
    },
    skipForNowContainer:{
        flex: 1,
        alignItems: 'center'
    },
    nextContainer:{
        flex: 1,
        alignItems: 'center'
    },
   skipForNowButton: {
        borderColor: "#8e77ff",
        borderRadius: 12,
        width: '88%',
        padding: '6%',
        backgroundColor: "#ffffff",
        borderWidth: 1, 
    }, 
    nextButton: {
        borderRadius: 12,
        width: '86%',
        padding: '6%',
        backgroundColor: "#8e77ff",
    },
    searchBar:{
        paddingLeft: '2%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EFEFEF',
        borderRadius: 20,
        borderColor: '#EAE9F0',
        borderWidth: 1,
        height: 30,
        width: '85%',
    },
    iconContexts:{
        width: '90%',
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    nextText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: "bold",
        textAlign: 'center',
    },
    skipForNowText: {
        color: '#8e77ff',
        fontSize: 12,
        fontWeight: "bold",
        textAlign: 'center',
    },
    headingText: {
        fontSize: 36,
        fontWeight: "bold",
        textAlign: 'center'
    },
    searchText: {
        fontSize: 13,
        justifyContent: 'center',
        paddingLeft: '3%',
    },
    enterManuallyText: {
        fontWeight: "400",
        color: '#B5B5BA',
        textAlign: 'center'
    }
});