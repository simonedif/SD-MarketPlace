import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: 'white',
        height: 300,
        margin: 20
    },
    touchable: {
        overflow: 'hidden',
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: '90%'
    },
    details: {
        alignItems: 'center',
        height: '25%',
        padding: 10
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        marginVertical: 4
    },
    price: {
        fontFamily: 'open-sans-bold',
        fontSize: 14,
        color: '#888'
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //height: '15%',
        paddingHorizontal: 20
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        //Picture overlalp
        overflow: 'hidden'
    },
});

export default styles;


