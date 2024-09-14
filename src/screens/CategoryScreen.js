import React from 'react';
import { View, StyleSheet } from 'react-native';
import CategoryButton from '../Components/CategoryButton';

const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

const CategoryScreen = ({ navigation }) => {
    const handlePress = (category) => {
        navigation.navigate('CategoryNews', { category });
    };

    return (
        <View style={styles.container}>
            {categories.map((category) => (
                <CategoryButton key={category} category={category} onPress={handlePress} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CategoryScreen;