import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Loft Métropolis Paris</Text>
      <Image
        source={require('../images/loft.png')} // Chemin vers votre image
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>LOFT Metropolis – Best Club in Paris</Text>
        <Text style={styles.description}>
          Grande boîte de nuit comprenant 4 salles à thème colorées,
          chacune avec un DJ résident et des rythmes allant de la pop au hip-hop.
        </Text>
        <Text style={styles.horaireTitle}>Horaire:</Text>
        <Text style={styles.horaire}>
          Lundi : Fermé{'\n'}
          Mardi : Fermé{'\n'}
          Mercredi : Fermé{'\n'}
          Jeudi : 23:00–00:00{'\n'}
          Vendredi : 00:00–07:00, 23:00–00:00{'\n'}
          Samedi : 00:00–07:00, 23:00–00:00{'\n'}
          Dimanche : 00:00–07:00
        </Text>
        <Text style={styles.adresseTitle}>Adresse:</Text>
        <Text style={styles.adresse}>
          46-48 Rue du faubourg Saint-Antoine, 75011
        </Text>
      </View>

      <View>
        <Text style={styles.eventTitle}>Evènements</Text>
        <Image
          source={require('../images/naza.png')}
          style={styles.imageNaza}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.textBold}>NAZA - L'incroyable Showcase Samedi 5 octobre 2024!!!</Text>

          <Text style={styles.description}>
          Le LOFT Metropolis vous présente, en partenariat avec NRJ, Hustler Agency & HK Events :
          </Text>
          <Text style={styles.description}> NAZA "L'Incroyable Showcase" Son Album "INCROYABLE" ! Tous ses Hits en Live !! #PourquoiCherie #Mmm #NDeko #Bomaye
          </Text>
        <Text style={styles.textBold}>
          Tarif:
          20€ + 1 Consommation // 25€ + 2 Consommation
        </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.reservButton}>
          <Link href={{ pathname: '/boite/metropolis' }}><Text style={styles.reservText}> Réserver sa place maintenant</Text></Link>
          </TouchableOpacity>
        </View>
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
