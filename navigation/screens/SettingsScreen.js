import { StyleSheet, Text, View, SafeAreaView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function SettingsScreen() {
    return (
        <View style = {styles.container}>
            <View style = {styles.backgroundDrop}>
                <SafeAreaView>
                    <View style = {styles.iconContainer}>
                        <Icon name="arrow-left" size={25} color="#FFF" />
                    </View>
                </SafeAreaView>
            </View>
            <View style = {styles.settingsContainer}>
                <View style = {styles.settingsContainerProps}>
                    <View style = {styles.detailsContainer}>
                        <View style = {styles.detailsProps}>
                            <View style = {styles.headerContainer}>
                                <View style = {styles.settingsHeader}>
                                    <Icon name="account-circle-outline" size={23} color="#000" />
                                    <Text style={styles.heading}>Sam Smith</Text>
                                </View>
                            </View>
                            <View style = {styles.seperator}>
                            </View>
                            <View style = {styles.accountDetailsContainer}>
                                <Text style={styles.accountDetailsText}>Account Details</Text>
                            </View>
                            <View style = {styles.subTextContainer}>
                                <View style = {styles.rowGroupings}>
                                    <Text style={styles.subText}>Edit Profile</Text>
                                    <Icon name="chevron-right" size={20} color="#000" />
                                </View>
                                <View style = {styles.rowGroupings}>
                                    <Text style={styles.subText}>Change Password</Text>
                                    <Icon name="chevron-right" size={20} color="#000" />
                                </View>
                                <View style = {styles.rowGroupings}>
                                    <Text style={styles.subText}>Add a Payment Method</Text>
                                    <Icon name="chevron-right" size={20} color="#000" />
                                </View>
                                <View style = {styles.rowGroupings}>
                                    <Text style={styles.subText}>Update Membership</Text>
                                    <Icon name="chevron-right" size={20} color="#000" />
                                </View>
                                <View style = {styles.rowGroupings}>
                                    <Text style={styles.subText}>Push Notifications</Text>
                                    <Icon name="toggle-switch-outline" size={20} color="#000" />
                                </View>
                            </View> 
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    iconContainer:{
        flexDirection: 'row',
        paddingTop: '3%',
        left: '45%',
    },
    backgroundDrop:{
        backgroundColor: '#8E77FF',
        borderRadius: 36,
        height: '33%',
    },
    settingsContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        margin: 'auto',
        left: 0,
        right: 0,
        bottom: 0,
        top:0
    },
    settingsContainerProps:{
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        borderColor: '#EAE9F0',
        borderWidth: 1,
        height: '70%',
        width: '85%',
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    accountDetailsContainer:{
        paddingTop: '3%'
    },
    detailsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    detailsProps:{
        width: '85%',
        height: '90%',
    },
    settingsHeader:{
        flexDirection: 'row',
        paddingTop: '3%',
    },
    headerContainer:{
        height: '10%'
    },
    rowGroupings:{
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    seperator:{
        borderBottomColor: '#EAE9F0',
        borderBottomWidth: 1
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        left: '40%',
    },
    accountDetailsText:{
        fontSize: 14,
        color: '#B5B5BA',
        fontWeight: '500',
    },
    subText:{
        fontSize: 14,
        fontWeight: '500',
    },
    subTextContainer: { 
        flex: .55,
        justifyContent: 'space-evenly',
    },
});