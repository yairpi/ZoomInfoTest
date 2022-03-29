import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
interface ProfileTextListProps {
    title: string;
    text: string;
}
const ProductTextList: React.FC<ProfileTextListProps> = (props) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>{props.title}:</Text>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
};

export default ProductTextList;

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 16,
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 1,
    },
    title: {
        flex: 0.5,
        fontSize: 18,
        color: '#3647E3',
    },
    text: {
        flex: 1,
        fontSize: 18,
        color: '#525464',
    },
});