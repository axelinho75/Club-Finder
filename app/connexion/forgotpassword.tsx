import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link, router } from 'expo-router';
import { useRouter } from 'expo-router';


export default function Password(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.title}>ClubFinder</Text>
            </View>

            <TouchableOpacity style={styles.backButton} onPress={() => router.push('/connexion/login')}>
            <Text style={styles.backButtonText}>Retour</Text>
            </TouchableOpacity>

            <Text style={styles.subtitle}>Reinitialisez votre mot de passe</Text>

            <View style={styles.inputContainer}>
            <Text style={styles.label}>E-mail :</Text>
            <TextInput
            style={styles.input}
            placeholder="Entrez votre e-mail"
            placeholderTextColor="#B3995B"
          
            />
            </View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => router.push('/connexion/login')}>
            <Text style={styles.buttonText}>Reinisialisez le mot de passe</Text>
            </TouchableOpacity>
            </View>

          


      


        </View>  
    )
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
        left: 60,
        fontFamily: 'Inter',
        fontSize: 20,
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
      buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
      },
});