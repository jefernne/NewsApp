
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const NewsDetailScreen = ({ route }) => {
    const { article } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: article.urlToImage }} style={styles.image} />
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.description}>{article.description}</Text>
            <Text style={styles.content}>{article.content}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    image: {
        height: 200,
        borderRadius: 8,
    },
    title: {
        marginTop: 10,
        fontSize: 22,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 10,
        fontSize: 16,
        color: '#666',
    },
    content: {
        marginTop: 10,
        fontSize: 14,
        color: '#333',
    },
});

export default NewsDetailScreen;