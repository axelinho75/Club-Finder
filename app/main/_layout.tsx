import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const _layout = () => {
  return (
    <Tabs
      initialRouteName='index'
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1C1C1C', // Couleur de fond de la barre d'onglets
        },
        tabBarActiveTintColor: '#B3995B', // Couleur des icônes actives
        tabBarInactiveTintColor: 'gray', // Couleur des icônes inactives
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: "menu",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='favoris'
        options={{
          title: "Favoris",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='star' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='club'
        options={{
          title: "Clubs",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='person' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='parametre'
        options={{
          title: "Parametre",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='flower' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

export default _layout;