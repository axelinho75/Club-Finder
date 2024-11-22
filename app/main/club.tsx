import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Importer useRouter

export default function ClubList() {
  const router = useRouter(); // Utilisation de useRouter pour la navigation

  // Liste simple de boîtes de nuit avec des noms et des images
  const clubs = [
    {
      id: '1',
      name: 'Le Pachamama',
      image: 'https://www.pachamama-paris.com/wp-content/uploads/2022/11/accueil-3-min-scaled.jpg',
      description: 'Club-restaurant inspiré Amérique du Sud proposant de la musique et des danses traditionnelles, et des plats comme le ceviche.',
      route: '/boite/pachamama', // Ajouter une route spécifique à chaque club
    },
    {
      id: '2',
      name: 'Metropolis',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy3HDaToWyiw_y6mWMom3W2ALg_e-a__Jhlw&s',
      description: 'Grande boîte de nuit comprenant 4 salles à thème colorées, chacune avec un DJ résident et des rythmes allant de la pop au hip-hop.',
      route: '/boite/metropolis',
    },
    {
      id: '3',
      name: "L'Arc",
      image: 'https://s3.amazonaws.com/a.storyblok.com/f/116532/1440x1440/ffbe2e8e1e/l-arc-paris-club.webp',
      description: 'Discothèque chic à la déco avant-gardiste, avec une carte des champagnes et un jardin sur le toit offrant une vue sur la ville.',
      route: '/boite/larc',
    },
  ];

  return (
    <View style={styles.container}>
      {/* En-tête */}
      <Text style={styles.title}>Nos soirées</Text>
      
      {/* Liste des clubs */}
      <FlatList
        data={clubs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.clubCard}>
            <Image source={{ uri: item.image }} style={styles.clubImage} />
            <View style={styles.clubInfo}>
              <Text style={styles.clubName}>{item.name}</Text>
              <Text style={styles.clubDescription}>{item.description}</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push({ pathname: item.route as any })} // Utilisation de la route dynamique
            >
              <Text style={styles.buttonText}>Plus d'info</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#B3995B',
    textAlign: 'center',
    marginVertical: 20,
  },
  backButton:{
    position: 'absolute',
    top:50,
    left: 20,
    padding: 10,
    backgroundColor: '#B3995B',
    borderRadius: 20,

  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  clubCard: {
    backgroundColor: '#2D2D2D',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  clubImage: {
    width: '100%',
    height: 230,
    borderRadius: 10,
  },
  clubInfo: {
    marginTop: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  clubName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  clubDescription: {
    fontSize: 14,
    color: '#000',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#B3995B',
    paddingVertical: 5,
    paddingHorizontal: 143,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});