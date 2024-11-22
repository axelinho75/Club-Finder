import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

export default function Club() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>

    <Text style={styles.title}>ClubFinder</Text>
    <Text style={styles.title}>Bienvenue sur ClubFinder</Text>
    </View>

  )};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#151515',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
        color: '#B3995B',
    },
    buttonContainer: {
        marginVertical: 16,
        width: '100%',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#B3995B',
        padding: 16,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        marginVertical: 8,
    },
    buttonText: {
        color: '#151515',
        fontWeight: 'bold',
        fontSize: 16,
    },
    });
