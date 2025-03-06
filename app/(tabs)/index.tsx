// App.tsx
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import * as Location from 'expo-location';
import Header from '@/components/Header';
import MapComponent from '@/components/MapComponent';
import ZoomControl from '@/components/ZoomControl';
import BottomBar from '@/components/BottomBar';


export default function HomeScreen() {
  const [isOn, setIsOn] = useState<boolean>(false);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [balance, setBalance] = useState<number>(100.00);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  const toggleSwitch = () => setIsOn(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle="dark-content" /> */}
      <Header balance={balance} />
      <MapComponent location={location} errorMsg={errorMsg} />
  
      <ZoomControl />
      <BottomBar isOn={isOn} toggleSwitch={toggleSwitch} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});