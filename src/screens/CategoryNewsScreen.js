import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import NewsCard from '../Components/NewsCard';
import { fetchNews } from '../api/newsApi';

const CategoryNewsScreen = ({ route, navigation }) => {
    const { category } = route.params;
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const loadNews = async () => {
            const news = await fetchNews(category);
            setArticles(news);
            console.log(news)
        };
        loadNews();
    }, [category]);

    const handlePress = (article) => {
        navigation.navigate('NewsDetail', { article });
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={articles}
                keyExtractor={(item) => item.url}
                renderItem={({ item }) => <NewsCard article={item} onPress={handlePress} />}
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

export default CategoryNewsScreen;