import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import NewsCard from '../Components/NewsCard';
import { fetchNews } from '../api/newsApi';

const NewsListScreen = ({ navigation }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadNews = async () => {
            try {
                console.log('Loading news...');
                const news = await fetchNews();
                console.log('News loaded:', news);
                setArticles(news);
            } catch (e) {
                console.error('Error fetching news:', e);
                setError('Failed to load news');
            } finally {
                setLoading(false);
            }
        };
        loadNews();
    }, []);

    if (loading) {
        return <View style={styles.container}><Text>Loading...</Text></View>;
    }

    if (error) {
        return <View style={styles.container}><Text>{error}</Text></View>;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={articles}
                keyExtractor={(item) => item.url}
                renderItem={({ item }) => <NewsCard article={item} onPress={(article) => navigation.navigate('NewsDetail', { article })} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
});

export default NewsListScreen;