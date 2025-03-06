// components/ZoomControl.tsx
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ZoomControl: React.FC = () => {
  return (
    <View style={styles.zoomContainer}>
      <TouchableOpacity style={styles.zoomButton}>
        <Ionicons name="add" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  zoomContainer: {
    position: 'absolute',
    right: 15,
    bottom: 90,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  zoomButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ZoomControl;