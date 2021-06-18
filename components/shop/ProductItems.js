// Standard Component
import React from 'react';
import {
    View, 
    Text, 
    Image,
    TouchableOpacity, 
    TouchableNativeFeedback, 
    Platform
} from 'react-native';

//Constants & Style Import
//import Colors from '../../constants/Colors';
import styles from './ProductStyle';

const ProductItem = (props) => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
 
    return (      
    <View style={styles.product}>
        <View tyle={styles.touchable}>
            <TouchableCmp onPress={props.onSelect} useForeground>
                <View>    
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{uri: props.image}} />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.title}>{props.title}</Text>
                        <Text style={styles.price}>£{props?.price}</Text>
                    </View>
                    <View style={styles.action}>
                       {props.children}
                    </View>
                </View>
            </TouchableCmp>
        </View>
    </View>
    ); 
};

export default ProductItem;

//Note: UseForeground Android full View Touch