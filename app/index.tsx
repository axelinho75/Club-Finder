import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Acceuil() {
  const router = useRouter();

  return (
    
    <SafeAreaView style={styles.container}>
      
      <View style={styles.container}>
        </View>
      <Text style={styles.title}>ClubFinder</Text>
      <SafeAreaView>
        <Link style={styles.title} href="/connexion/login">Bienvenue sur ClubFinder</Link>
      </SafeAreaView>


      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/connexion/login')}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/connexion/signup')}>
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#151515',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 24,
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
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 24,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

