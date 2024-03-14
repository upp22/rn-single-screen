import React from 'react';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can change the icon library and icon name as per your preference

const TopMenu = () => {
  return (
    <View style={[styles.container, shadowStyle]}>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="ellipsis-v" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="bell" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const shadowStyle = Platform.select({
  ios: {
    shadowColor: 'rgba(50, 50, 93, 0.25)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  android: {
    elevation: 5,
  },
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 50,
    backgroundColor: 'white',
    borderRadius:5,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  iconContainer: {
    padding: 10,
  },
});

export default TopMenu;
