const API_KEY = "b457c88a2a8b4b0dbbea959056f98b4d";
const BASE_URL = "https://newsapi.org/v2";

export const fetchNews = async (category = null) => {
    try {
        const categoryQuery = category ? `&category=${category}` : '';
        const response = await fetch(`${BASE_URL}/top-headlines?country=us${categoryQuery}&apiKey=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Network r-esponse was not ok');
        }
        const json = await response.json();
        console.log(json);
        return json.articles;
    } catch (error) {
        console.error("Error fetching news: ", error);
        return [];
    }
};