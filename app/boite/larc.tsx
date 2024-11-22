import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { Link, useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/main/club')}>
        <Text style={styles.backButtonText}>Retour</Text>
      </TouchableOpacity>
      <Text style={styles.text}>L'Arc Paris</Text>

      <Image
        source={require('../images/arc.png')} // Chemin vers votre image
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>L'arc</Text>
        <Text style={styles.description}>
        L'Arc est une boîte de nuit chic et prisée située près de l'Arc de Triomphe, offrant une ambiance exclusive et glamour. Ce lieu élégant attire une clientèle cosmopolite et propose des soirées animées par des DJs internationaux.
        </Text>
        <Text style={styles.horaireTitle}>Horaire:</Text>
        <Text style={styles.horaire}>
        Lundi : Fermé{'\n'}
        Mardi : Fermé{'\n'}
        Mercredi : Fermé{'\n'}
        Jeudi : 23:55 – 06:00{'\n'}
        Vendredi : 23:55 – 06:00{'\n'}
        Samedi : 23:55 – 06:00{'\n'}
        Dimanche : Fermé{'\n'}
        </Text>
        <Text style={styles.adresseTitle}>Adresse:</Text>
        <Text style={styles.adresse}>
        12 Rue de Presbourg, 75116 Paris, France​
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1b',
    padding: 20,
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
  text: {
    fontSize: 32,
    color: '#B3995B',
    marginTop: 50,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  imageNaza: {
    width: '100%',
    height:550,

  },
  infoContainer: {
    backgroundColor: '#dfdfdf',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 10,
  },
  description: {
    color: '#000000',
    marginBottom: 10,
  },
  horaireTitle: {
    fontSize: 20,
    color: '#000000',
    marginTop: 10,
    marginBottom: 5,
  },
  horaire: {
    color: '#000000',
    marginBottom: 10,
  },
  adresseTitle: {
    fontSize: 20,
    color: '#000000',
    marginTop: 10,
    marginBottom: 5,
  },
  adresse: {
    color: '#000000',
  },
  eventTitle: {
    fontSize: 32,
    color: '#B3995B',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  textBold: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reservButton: {
    backgroundColor: '#B3995B', // Couleur de fond dorée
    borderRadius: 25, // Pour un arrondi
    paddingVertical: 10, // Espacement vertical
    paddingHorizontal: 20, // Espacement horizontal
    marginTop: 20,
    marginBottom: 200,
  },
  reservText: {
    color: '#000', // Couleur du texte
    fontSize: 16,
    fontWeight: 'bold', // Texte en gras
    textAlign: 'center', // Centrage du texte
  },
});