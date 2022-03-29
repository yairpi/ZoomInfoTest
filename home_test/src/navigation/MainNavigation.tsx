import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from '../layouts/products';
import ProductItem from '../layouts/products/ProductItem';
const Stack = createNativeStackNavigator<TypeNavigation>();

const MainNavigation: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName='Products'
            screenOptions={{
                headerShadowVisible: false,
                headerBackTitleVisible: false
            }}
        >
            <Stack.Screen component={Products} name='Products' />
            <Stack.Screen
                component={ProductItem}
                name='ProductItem'
                options={{
                    title: 'Product Item',
                }}
            />
        </Stack.Navigator>
    );
};

export default MainNavigation;