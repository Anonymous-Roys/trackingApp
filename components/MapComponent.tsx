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
type LocationMarkerProps = {
  direction?: number;
};

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
        // customMapStyle={mapStyle}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            tracksViewChanges={true}
            title="Your Current Location"
            description="This is your current location"
          >
            <LocationMarker direction={location.coords.heading || 0} />
          </Marker>
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            anchor={{ x: 0.5, y: 0.5 }}
            zIndex={1}
            tracksViewChanges={true}
            flat={true}
          >
            <DirectionCone direction={location.coords.heading || 0} />
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


const LocationMarker: React.FC<LocationMarkerProps> = ({ direction = 0 }) => {
  return (
    <View style={styles.container}>
      <View style={styles.markerContainer}>

        <View style={styles.markerOuterRing} />
        <View style={styles.markerRing}>
          <View style={styles.markerInner}>
            <FontAwesome5 name="location-arrow" size={16} color="#4a80f5" />
          </View>
        </View>
        {/* </View> */}
      </View>
    </View>
  );
};


const DirectionCone: React.FC<{ direction: number }> = ({ direction }) => {
  return (
    <View style={styles.coneContainer}>
      <View
        style={[
          styles.directionCone,
          // { transform: [{ rotate: `${direction}deg` }] }
        ]}
      />
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
  container: {
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',

    // width: 200,
    // height: 200,
    // borderRadius: 50,
    width: '800%',
  },
  markerContainer: {

    // position: 'relative',
    // elevation: 4,
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',

  },
  markerInner: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    elevation: 3,
  },
  markerRing: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'rgba(74, 128, 245, 0.3)',
    zIndex: 2,
    elevation: 2,
    padding: 2,
    position: 'absolute',
    top: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerOuterRing: {
    position: 'absolute',
    top: 0,
    left: 10,
    borderTopRightRadius: 100,
    borderWidth: 20,
    borderColor: 'rgba(74, 128, 245, 0.1)',

    // backgroundColor: 'rgba(74, 128, 245, 0.1)',
    zIndex: 1,
    elevation: 1,

  },
  coneContainer: {
    backgroundColor: 'red',
    overflow: 'visible',
    borderRadius: 50,
    // position: 'absolute',
   
    transform: [{ rotate: '-90deg' }],
    // elevation: 4,
  },
  directionCone: {
    borderStyle: 'solid',
    borderLeftWidth: 60,
    borderRightWidth: 100,
    borderBottomWidth: 600,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'rgba(74, 128, 245, 0.15)',
  },
});

export default MapComponent;