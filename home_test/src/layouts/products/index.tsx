import { StyleSheet, ActivityIndicator, View, FlatList, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import ProductListItem from './ProductListItem';
import { ProductsProps } from '../interfaces/Iproducts';
import { getProducts } from '../../api';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { addProducts, updateProducts } from '../../store/actions/productsAction';
import SearchBar from 'react-native-platform-searchbar';

const Products: React.FC<ProductsProps> = ({ navigation }) => {
    const products = useSelector((state: RootState) => state.productsReducer.products);
    const dispatch = useDispatch();
    const [data, setData] = useState(products);
    const [numberItemToReander, setNumberItemToReander] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");

    const faechData = async () => {
        try {
            const res = await getProducts(numberItemToReander);
            setTimeout(async () => {
                if (res.length) {
                    await dispatch(addProducts(res));
                    setData(res);
                    setIsLoading(false);
                }
            }, 1000);


        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        const nav = navigation.addListener('focus', () => {
            if (products.length === 0) {

                faechData();
            }
        });
        return nav;
    }, [navigation]);


    const onEndReachedHandler = async () => {
        if (search.length === 0) {
            setIsLoading(() => true);
            const res = await getProducts(numberItemToReander + 10);
            setTimeout(async () => {
                if (res.length) {
                    dispatch(updateProducts(res));
                    setNumberItemToReander(numberItemToReander + 10);
                    setData(products);
                }
                setIsLoading(() => false);
            }, 1000);
        }


    };

    const updateSearch = (text: string) => {
        const filteredData = products.filter(item => {
            return item.name.toLocaleLowerCase().includes(text.toLocaleLowerCase());
        });
        setData(filteredData);
        setSearch(text);
    };
    return (
        <View style={styles.screenContainer}>
            <Modal
                animationType='none'
                transparent={true}
                visible={isLoading}

            >
                <View style={styles.modalContainer}>

                    <ActivityIndicator size={'large'} color={'blue'} animating />
                </View>
            </Modal>
            <SearchBar
                value={search}
                onChangeText={updateSearch}
                placeholder={'Search...'}
                style={styles.searchBar}
                theme="light"
                platform="ios"
            />
            <FlatList
                data={data}
                renderItem={({ item, index }) => <ProductListItem title={item.name} index={index} navigation={navigation} />}
                keyExtractor={(item) => item.id}
                onEndReached={onEndReachedHandler}
                showsVerticalScrollIndicator={false}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    modalContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    searchBar: {
        margin: 4,
    }
});

export default Products;
