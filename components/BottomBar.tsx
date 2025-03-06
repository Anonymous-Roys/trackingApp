// components/BottomBar.tsx
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface BottomBarProps {
  isOn: boolean;
  toggleSwitch: () => void;
}

const BottomBar: React.FC<BottomBarProps> = ({ isOn, toggleSwitch }) => {
  return (
    <LinearGradient
      colors={['#4CAF50', '#2196F3']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.bottomBar}
    >
      <FilterButton />
      <ToggleSwitch isOn={isOn} toggleSwitch={toggleSwitch} />
      <InfoButton />
  
    </LinearGradient>
  );
};

const FilterButton: React.FC = () => {
  return (
    <TouchableOpacity style={styles.filterButton}>
      <Ionicons name="options-outline" size={20} color="white" />
    </TouchableOpacity>
  );
};

interface ToggleSwitchProps {
  isOn: boolean;
  toggleSwitch: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, toggleSwitch }) => {
  return (
    <View style={styles.toggleContainer}>
      <View style={isOn ? styles.toggleLineOn: styles.toggleLineOff}>
      <TouchableOpacity 
        style={[styles.toggleCircle, isOn ? styles.toggleMove : styles.toggleOff]}
        onPress={toggleSwitch}
      >
         <TouchableOpacity 
        style={[styles.toggleMiniCircle, isOn ? styles.toggleMiniOn : styles.toggleMiniOff]}
        onPress={toggleSwitch}
      >
        <View style={[styles.innerCircle, isOn ? styles.innerCircleOn : styles.innerCircleOff]}>
        <Text style={[styles.toggleText, !isOn && styles.toggleTextOff]}>
          {isOn ? 'ON' : 'OFF'}
        </Text>
        </View>
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.toggleSlider} />
      </View>
    </View>
  );
};

const InfoButton: React.FC = () => {
  return (
    <TouchableOpacity style={styles.infoButton}>
  <Ionicons name="notifications-outline" size={22} color="white" style={{ transform: [{ rotate: '20deg' }] }} />
</TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    height: 90,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  filterButton: {
    width: 40,
    height: 40,
    backgroundColor: '#f0f0f066',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  toggleContainer: {
    flexDirection: 'row',
    width: 140,
    height: 25,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#eeeeee88',
  },
  toggleLineOff: {
    flexDirection: 'row',
    width: 120,
    height: 3,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'red',
  },
  toggleLineOn: {
    flexDirection: 'row',
    width: 120,
    height: 3,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#3fa83d',
  },
  toggleSlider: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 25,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  toggleCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'flex-start',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    position: 'absolute',
    zIndex: 10,
  },
  toggleMiniCircle: {
    width: 42,
    height: 42,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  alignSelf: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  borderWidth: 1,
   
    position: 'relative',
    zIndex: 10,
  },

  innerCircle: {
    width: 39,
    height: 39,
    borderRadius: 20, // Half of width/height to make it fully round
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white', // Creates the spacing effect
    borderWidth: 2, // Inner red border
    
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  innerCircleOff:{
    borderColor: 'red',
    backgroundColor: 'white',
    
  },
  innerCircleOn:{
 borderColor: '#3fa83d',
    backgroundColor: '#3fa83d'
  },
  toggleMove:{
    right: -10, backgroundColor: '#3fa83d',
  },
  toggleOn: {
    backgroundColor: '#3fa83d',
    right: -10,
  },
 
  toggleMiniOn: {
    backgroundColor: '#3fa83d',
    right: 0,
    borderColor: '#3fa83d',
  },
  toggleOff: {
    backgroundColor: 'white',
    left: -15,
    
  },
  toggleMiniOff: {
    backgroundColor: 'white',
    left: 0,
    borderColor: 'red',
  },
  toggleText: {
    fontWeight: 'bold',
    color: 'white',
  },
  toggleTextOff: {
    color: 'red',
  },
  infoButton: {
    width: 40,
    height: 40,
    backgroundColor: '#f0f0f066',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
});

export default BottomBar;