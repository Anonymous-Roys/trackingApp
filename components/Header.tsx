// components/Header.tsx
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Eye, EyeOff } from 'lucide-react-native';


interface HeaderProps {
  balance: number;
}

const Header: React.FC<HeaderProps> = ({ balance }) => {
    const [isBalanceHidden, setIsBalanceHidden] = useState<boolean>(false);
    return (
    <LinearGradient
          colors={['#4CAF50', '#2196F3']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
    <View style={styles.header}>
      <TouchableOpacity style={styles.menuButton}>
        <Ionicons name="menu-outline" size={24} color="white" />
      </TouchableOpacity>
      
      <View style={styles.balanceContainer}>
         <Text style={styles.balanceText}>
        ${isBalanceHidden ? '***.**' : `${balance.toFixed(2)}`}
      </Text>

      <TouchableOpacity onPress={() => setIsBalanceHidden(!isBalanceHidden)}>
        {isBalanceHidden ? <EyeOff size={20} color="white" /> : <Eye size={20} color="white" />}
      </TouchableOpacity>
      </View>
      
      <View style={styles.scheduleContainer}>
        <View style={styles.badgeContainer1}>
          <Text style={styles.badgeText1}>1</Text>
        </View>
        <View style={styles.badgeContainer2}>
          <Text style={styles.badgeText2}>1</Text>
        </View>
        <TouchableOpacity style={styles.scheduleButton}>

        <Text style={styles.scheduleText}>Schedule</Text>
        </TouchableOpacity>
      </View>
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: 60,
    width: '100%',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  menuButton: {
    padding: 5,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
  },
  refreshIcon: {
    marginLeft: 5,
  },
  scheduleContainer: {
    alignItems: 'center',
  },
  scheduleText: {
    color: 'white',
    fontSize: 12,
  },
  badgeContainer1: {
    backgroundColor: 'red',
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -10,
    left: -9,
    zIndex: 1,
  },
  badgeContainer2: {
    backgroundColor: 'white',
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -10,
    right: -9,
    zIndex: 1,
  },
  badgeText1: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  badgeText2: {
    color: '#2196F3',
    fontSize: 10,
    fontWeight: 'bold',
  },
  scheduleButton: {
    width: 60,
    height: 30,
    backgroundColor: '#f0f0f066',
    borderRadius: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
    color: 'white',
    padding: 5,
  }
});

export default Header;