import React from "react";
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

const CategoryButton = ({ category, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => onPress(category)}>
            <Text style={styles.text}>{category}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4CAF50',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 16,
    },
});

export default CategoryButton;