import { Image, StyleSheet, Animated, View, Easing } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { ProductItemProps } from '../interfaces/Iproducts';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ProductTextList from '../../components/ProductTextList';
const shopping_cart = require('../../assets/icons/shopping_cart.png');

const ProductItem: React.FC<ProductItemProps> = ({ route }) => {
    const index = route.params?.index;
    const products = useSelector((state: RootState) => state.productsReducer.products);
    let opacity = new Animated.Value(0);

    const fadeIn = () => {
        opacity.setValue(0);
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1200,
            easing: Easing.in(Easing.bounce),
            useNativeDriver: false
        }).start();
    };

    const size = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 80]
    });
    const animatedStyles = [
        styles.avatar,
        {
            opacity,
            width: size,
            height: size
        }
    ];

    useEffect(() => {
        fadeIn();
    }, []);

    return (
        <View style={styles.screenContainer}>
            <View style={styles.card}>
                <View style={styles.avatrContainer}>
                    <Animated.View style={animatedStyles} >
                        <Image source={shopping_cart} style={styles.image} resizeMode='stretch' />

                    </Animated.View>
                </View>
                <ProductTextList title='name' text={products[index!].name} />
                <ProductTextList title='description' text={products[index!].description} />
                <ProductTextList title='price' text={products[index!].price.toString()} />
            </View>
        </View >
    );
};

export default ProductItem;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        flexDirection: 'column-reverse',
        backgroundColor: '#fff'
    },
    card: {
        height: '80%',
        width: '100%',
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        backgroundColor: '#EFEEF4',
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    avatrContainer: {
        height: 160,
        alignItems: "center"
    },
    avatar: {
        width: 140,
        height: 140,
        marginVertical: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    image: {
        height: '100%',
        width: '100%',
    }
});