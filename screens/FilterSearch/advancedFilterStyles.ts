import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    advancedFilterContainer: {
        maxHeight: 730,
        minHeight: 640,
        backgroundColor: '#FFF',
        top: '5%'
    },
    formContainer: {
        top: '5%',
        height: '100%',
        width: '100%'
    },
    filterButton: {
        padding: 10,
        width: '50%',
        borderRadius: 5,
        top: '5%',
        backgroundColor: '#7ECA9C',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    filterText: {
        fontFamily: 'Roboto',
        alignSelf: 'center',
        fontStyle: 'normal',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 14,
        color: '#1C1427',
        letterSpacing: 0.15
    },
});