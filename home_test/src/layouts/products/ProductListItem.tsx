import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { ProductListItemProps } from '../interfaces/Iproducts';
const shopping_cart = require('../../assets/icons/shopping_cart.png');
const arrow = require('../../assets/icons/arrow.png');
const ProductListItem: React.FC<ProductListItemProps> = ({ title, navigation, index }) => {

    const pressItemHandler = () => {
        navigation.navigate('ProductItem', { index: index });
    };
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={pressItemHandler}>
            <View style={styles.itemContainer}>
                <View style={styles.imageContainer}>
                    <Image source={shopping_cart} style={styles.image} resizeMode='center' />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{title}</Text>
                </View>
                <View style={styles.arrowContainer}>
                    <Image source={arrow} style={styles.image} resizeMode='stretch' />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ProductListItem;

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 4,
        marginVertical: 16,
        borderColor: 'grey',
        borderBottomWidth: 1,
        borderRadius: 10,
    },
    imageContainer: {
        overflow: 'hidden',
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: '100%',
        width: '100%',
    },
    textContainer: {
        width: '50%',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    arrowContainer: {
        overflow: 'hidden',
        height: 25,
        width: 25,
    }
});