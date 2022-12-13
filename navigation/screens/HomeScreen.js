import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function HomeScreen() {
  return (
    <SafeAreaView style = {styles.container}>
        <View style = {styles.iconContainer}>
            <Icon name="email-outline" size={25} color="#000" />
            <Icon name="account-circle-outline" size={25} color="#000" />
        </View>
        <Text style={styles.monthHeading}>November</Text>
        <Text style={styles.monthHeading}>Earnings Report</Text>
        <View style = {styles.rentContainer}>
            <View style = {styles.rentBox}>

            </View>
            <View style = {styles.rentBox}>
                
            </View>
            <View style = {styles.rentBox}>
                
            </View>
        </View>   
    </SafeAreaView>
  );
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    iconContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        right: '2%',
    },
    rentContainer:{
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    monthHeading: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: "bold",
    },
    rentBox:{
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        borderColor: '#EAE9F0',
        borderWidth: 1,
        height: '23%',
        width: '80%',
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
});
