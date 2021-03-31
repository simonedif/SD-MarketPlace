// Standard Component
import React from 'react';
import {
    View, 
    Text, 
    Image, 
    StyleSheet, 
    Button, 
    TouchableOpacity, 
    TouchableNativeFeedback, 
    Platform
} from 'react-native';

//Constants Import
import Colors from '../../constants/Colors';

const ProductItem = (props) => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
 
    // useForeground Android full View Touch>
    return (      
    <View style={styles.product}>
        <View tyle={styles.touchable}>
            <TouchableCmp onPress={props.OnViewDetail} useForeground>
                <View>    
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{uri: props.image}} />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.title}>{props.title}</Text>
                        <Text style={styles.price}>£{props.price.toFixed(2)}</Text>
                    </View>
                    <View style={styles.action}>
                        <Button color={Colors.primary} title="View Details" onPress={props.OnViewDetail} />
                        <Button color={Colors.primary} title="To Cart" onPress={props.OnAddToCart} />
                    </View>
                </View>
            </TouchableCmp>
        </View>
    </View>
    ); 
};

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
        height: '60%'
    },
    details: {
        alignItems: 'center',
        height: '25%',
        padding: 10
    },
    title: {
        fontSize: 18,
        marginVertical: 4
    },
    price: {
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

export default ProductItem;