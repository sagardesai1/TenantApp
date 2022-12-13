import { StyleSheet, Text, View, SafeAreaView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


function ChartScreen() {
    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.iconContainer}>
                <Text style={styles.iconText}>Edit</Text>
            </View>
        <Text style={styles.heading}>Properties</Text>
        </SafeAreaView>
    );
}

export default ChartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    iconContainer:{
        flexDirection: 'row',
        paddingTop: '3%',
        justifyContent: 'flex-end',
        right: '3%',
    },
     heading: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: "bold",
    },
    iconText:{
        textAlign: 'center',
        fontSize: 14,
        color: '#8E77FF',
    }
});