import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface NotificationBadgeProps {
  count: number;
}

const NotificationBadge: React.FC<NotificationBadgeProps> = ({ count }) => {
  return (
    <View>

    <View style={styles.badge}>
      <Text style={styles.badgeText}>{count}</Text>
    </View>
    <View style={styles.notificationNumber}>
              <Text style={styles.badgeText2}>1</Text>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  notificationNumber: {
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
  badge: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -8,
    right: -8
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold'
  },
 
  badgeText2: {
    color: '#2196F3',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default NotificationBadge;