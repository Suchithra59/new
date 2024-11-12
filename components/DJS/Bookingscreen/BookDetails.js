import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function BookDetails({ route }) {
  console.log(route.params);  // Log the params to verify if they are being passed
  const { title, offers, location, startDate, endDate, image } = route.params;
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.offers}>Offers: {offers}</Text>
          <Text style={styles.location}>Location: {location}</Text>
          <Text style={styles.date}>From: {startDate}</Text>
          <Text style={styles.date}>To: {endDate}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    padding: 15,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  offers: {
    fontSize: 16,
    color: '#1a6bf0',
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
    marginBottom: 5,
  },
});
