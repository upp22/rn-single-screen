import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TopMenu from './TopMenu';
import Footer from './Footer'; // Assuming the Footer component is in a separate file
import SessionPage from './SessionPage'; // Assuming the Footer component is in a separate file



export default function App() {
  return (
    <View style={styles.container}>
      <TopMenu />
      <SessionPage />
      <StatusBar style="auto" />
      <Footer />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
