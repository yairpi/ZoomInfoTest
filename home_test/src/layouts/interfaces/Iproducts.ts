import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface ProductsProps {
    navigation: NativeStackNavigationProp<TypeNavigation, 'Products'>;
}

export interface ProductItemProps {
    navigation: NativeStackNavigationProp<TypeNavigation, 'ProductItem'>;
    route: RouteProp<TypeNavigation, 'ProductItem'>;

}

export interface ProductListItemProps {
    title: string;
    index: number;
    navigation: NativeStackNavigationProp<TypeNavigation, 'Products'>;

}
