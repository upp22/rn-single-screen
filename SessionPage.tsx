import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can change the icon library and icon name as per your preference

const SessionPage = () => {
  const handleBackPress = () => {
    // Handle back button press
  };

  const handleHeartPress = () => {
    // Handle heart icon press
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer} onPress={handleBackPress}>
          <Icon name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={handleHeartPress}>
          <Icon name="heart" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Image source={{ uri: 'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg' }} style={styles.personImage} />
        <Text style={styles.speakerName}>John Doe</Text>
        <Text style={styles.designation}>Speaker</Text>
        <Text style={styles.contentText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida felis et nibh pulvinar, ac faucibus
          nulla tempor. Donec nec felis eu purus blandit mattis.
        </Text>
        <View style={styles.infoContainer}>
          <Icon name="clock-o" size={20} color="black" style={styles.icon} />
          <Text style={styles.infoText}>10:00 AM - 12:00 PM</Text>
        </View>
        <View style={styles.infoContainer}>
          <Icon name="map-marker" size={20} color="black" style={styles.icon} />
          <Text style={styles.infoText}>123 Main Street, City, Country</Text>
        </View>
        <Image source={{ uri: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Maps_Blog_hero_022x.width-1300.png' }} style={styles.additionalImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  iconContainer: {
    padding: 10,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  personImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // To make it circular
    marginBottom: 20,
  },
  speakerName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',

  },
  designation: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
    textAlign: 'left',
  },
  contentText: {
    textAlign: 'left',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  infoText: {
    fontSize: 16,
  },
  additionalImage: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
});

export default SessionPage;
