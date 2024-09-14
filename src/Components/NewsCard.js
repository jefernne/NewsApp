import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const NewsCard = ({ article, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={() => onPress(article)}>
            <Image source={{ uri: article.urlToImage }} style={styles.image} />
            <Text style={styles.title}>{article.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    image: {
        height: 150,
        borderRadius: 8,
    },
    title: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default NewsCard;