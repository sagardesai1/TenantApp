import { StyleSheet, Text, View, TextInput, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';

function MessageScreen() {
    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.iconContainer}>
                <View style = {styles.iconContexts}>
                    <Icon name="chevron-left" size={25} color="#8E77FF" />
                    <Icon name="plus" size={25} color="#8E77FF" />
                </View>
            </View>
            <Text style={styles.heading}>Messages</Text>
            <View style = {styles.searchBarContainer}>
            <View style = {styles.searchBar}>
                <IconFeather name="search" size={14} color="#000" />
                    <TextInput style={styles.searchText} placeholder="Search"/>
                </View>
            </View>
            <View style = {styles.messageBoxContainer}>
                <View style = {styles.seperator}>
                    <View style = {styles.profilePictureContainer}>
                        <View style = {styles.profilePictureContent}>
                            <Icon name="account-circle-outline" size={55} color="#000" />
                        </View>
                    </View>
                    <View style = {styles.messageContainer}>
                        <View style = {styles.messageContent}>
                            <Text style={styles.nameText}>Sam Smith</Text>
                            <Text style={styles.descriptionText}>Please come over soon to fix my plumbli..</Text>
                        </View>
                    </View>
                </View>
            </View>
         </SafeAreaView>
        );
}

export default MessageScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    iconContainer:{
        alignItems: 'center',
        paddingTop: '2%',
    },
    iconContexts:{
        width: '90%',
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    heading: {
        textAlign: 'center',
        fontSize: 25,
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
    seperator:{
        borderBottomColor: '#EAE9F0',
        borderTopColor: '#EAE9F0',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        height: '18%',
        flexDirection: 'row',
        //justifyContent: 'space-evenly' 
    },
    messageBoxContainer:{
        paddingTop: '5%',
        flex: 1,
    },
    profilePictureContainer:{
        flex: .2,
        
        justifyContent: 'center',
        //borderWidth: 1,
    },
    messageContainer:{    
        flex: .7,
        justifyContent: 'center',
        //borderWidth: 1,
    },
    messageContent:{
        justifyContent: 'flex-start'
    },
    profilePictureContent: {
        alignItems: 'center',
    }, 
    nameText: {
        fontSize: 17,
        fontWeight: "bold",
    },
    descriptionText: {
        
        paddingTop: '2%',
        fontSize: 14,
        color: '#B5B5BA'
    }
});