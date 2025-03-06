// components/MapComponent.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Location from 'expo-location';

import { mapStyle } from '../styles/mapStyle';

interface MapComponentProps {
  location: Location.LocationObject | null;
  errorMsg: string | null;
}

const MapComponent: React.FC<MapComponentProps> = ({ location, errorMsg }) => {
  return (
    <>
      {location ? (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          customMapStyle={mapStyle}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          >
            <LocationMarker />
          </Marker>
        </MapView>
      ) : (
        <View style={styles.loadingContainer}>
          <Text>{errorMsg || 'Loading map...'}</Text>
        </View>
      )}
    </>
  );
};

const LocationMarker: React.FC = () => {
  return (
    <View style={styles.markerContainer}>
      <View style={styles.markerInner}>
        <FontAwesome5 name="location-arrow" size={16} color="#4a80f5" />
      </View>
      <View style={styles.markerRing} />
      <View style={styles.markerOuterRing} />
      <View style={styles.directionCone} />
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: '100%',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerInner: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
  },
  markerRing: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(74, 128, 245, 0.3)',
    zIndex: 2,
  },
  markerOuterRing: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(74, 128, 245, 0.1)',
    zIndex: 1,
  },
  directionCone: {
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 400,
    borderRightWidth: 300,
    borderBottomWidth: 250,
    borderLeftColor: 'rgba(74, 128, 245, 0.1)',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    transform: [{ rotate: '300deg' }],
    zIndex: 0,
    top: -340,
  },
});

export default MapComponent;