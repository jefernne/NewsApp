import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsListScreen from '../screens/NewsListScreen';
import CategoryScreen from '../screens/CategoryScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#ffffff',
                    borderTopWidth: 0,
                    shadowColor: '#000',
                    height: 50,
                },
                tabBarActiveTintColor: '#007bff',
                tabBarInactiveTintColor: '#666',
                tabBarLabelStyle: {
                    fontSize: 12,
                    marginBottom: 5,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={NewsListScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" color={color} size={size} />
                    ),
                }}/>
            <Tab.Screen
                name="Categories"
                component={CategoryScreen}
                options={{tabBarLabel: 'Categories',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="list-outline" color={color} size={size} />
                    ),
                }}/>
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;