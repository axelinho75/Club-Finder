import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function SignupScreen() {
  const router = useRouter();
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prenom, email, password }),
      });
      if (response.ok) {
        router.push('/connexion/login');
      } else {
        const errorData = await response.json();
        console.error(errorData.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ClubFinder</Text>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/')}>
        <Text style={styles.backButtonText}>Retour</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>Inscription</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Prenom :</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre Prenom"
          placeholderTextColor="#B3995B"
          value={prenom}
          onChangeText={setPrenom}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail :</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre e-mail"
          placeholderTextColor="#B3995B"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mot de passe :</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre mot de passe"
          placeholderTextColor="#B3995B"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    alignItems: 'center',
    justifyContent: 'center',
  },

    header:{
    position: 'absolute',
    top: 50,
    left: 130,
        width:215,
        height:46,

  },
  title: {
        fontSize: 32,
    color: '#B3995B',
        fontWeight: 'bold',
        marginBottom: 10,
  },

      backButton:{
    position: 'absolute',
        top:50,
    left: 20,
    padding: 10,
    backgroundColor: '#B3995B',
        borderRadius: 20,
    
  },
    
      backButtonText:{
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
        position: 'absolute',
        top: 160,
        left: 130,
        fontFamily: 'Inter',
        fontSize: 32,
        fontStyle: 'normal',
        fontWeight: '400',
        color: '#B3995B',
        marginBottom: 30,
  },

  inputContainer: {
    
        width: '80%',
        marginBottom: 20,
  },
  label: {
        color: '#B3995B',
        marginBottom: 5,
        fontSize: 16,
       
  },
  input: {
        backgroundColor: '#303030',
        color: '#B3995B',
        padding: 10,
        borderRadius: 5,
      },

      buttonContainer: {
        position: 'absolute',
        top: 650,
        left: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 30,
      },
      signupButton: {
    backgroundColor: '#B3995B',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
  },
  signupButtonText: {
        color: '#151515',
    fontWeight: 'bold',
  },

      footer: {
        position: 'absolute',
        top: 800,
        alignItems: 'center',
        marginTop: 20,
      },
      footerText: {
        color: '#FFFFFF',
        fontSize: 12,
        marginBottom: 5,
      },
});