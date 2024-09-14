import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import NewsDetailScreen from '../screens/NewsDetailScreen';
import CategoryNewsScreen from '../screens/CategoryNewsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Tabs" component={BottomTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="NewsDetail" component={NewsDetailScreen} options={{ title: 'News Detail' }} />
            <Stack.Screen name="CategoryNews" component={CategoryNewsScreen} options={{ title: 'Filtered News' }} />
        </Stack.Navigator>
    );
};

export default AppNavigator;