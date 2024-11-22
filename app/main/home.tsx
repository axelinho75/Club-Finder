import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

interface NightClub {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  description?: string;
}

export default function Map() {
  const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null);

  const nightClubs: NightClub[] = [
    { id: "1", name: "Le Pachamama", latitude: 48.85207308877604, longitude: 2.372469425901498 },
    { id: "2", name: "Le Loft Métropolis", latitude: 48.757770380718895, longitude: 2.3479421547321646 },
    { id: "3", name: "L'Arc", latitude: 48.87395752372737, longitude: 2.293178998920916 },
  ];

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let userLocation = await Location.getCurrentPositionAsync({});
      setLocation(userLocation.coords);
    })();
  }, []);

  const parisRegion = {
    latitude: 48.8566,
    longitude: 2.3522,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={parisRegion}
        showsUserLocation={true}
        followsUserLocation={true}
      >
        {/* Marqueur pour la position de l'utilisateur */}
        {location && (
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Vous êtes ici"
          />
        )}

        {/* Marqueurs pour les boîtes de nuit */}
        {nightClubs.map((club) => (
          <Marker
            key={club.id}
            coordinate={{
              latitude: club.latitude,
              longitude: club.longitude,
            }}
            title={club.name}
            description={club.description}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
