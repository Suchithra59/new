import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Use MaterialIcons for star icons

const djData = [
  { id: '1', title: 'DJ Remix King', description: 'Top DJ specializing in remixes.', price: '$500 per event', rating: 4.8, image: 'https://wallpapers.com/images/hd/dj-set-pictures-23iylhasc7ka7bkz.jpg' },
  { id: '2', title: 'DJ Night Owl', description: 'Famous for late night performances.', price: '$700 per event', rating: 5.0, image: 'https://img2.exportersindia.com/product_images/bc-small/2019/1/5393014/pickup-dj-system-1547794564-4655263.jpeg' },
  { id: '3', title: 'DJ Beats Master', description: 'High-energy beats to rock the party.', price: '$600 per event', rating: 4.9, image: 'https://i.pinimg.com/236x/14/3a/49/143a4909a386ea2a4998a4cab02c5c9a.jpg' },
  { id: '4', title: 'DJ Mixer', description: 'An advanced DJ mixer with powerful EQ controls and effects.', price: '$850.00', rating: 4.7, image: 'https://5.imimg.com/data5/LF/HC/IU/ANDROID-15762207/product-jpeg-500x500.jpg' },
  { id: '5', title: 'All-in-One DJ System', description: 'An all-in-one DJ system that integrates mixing, effects, and performance features.', price: '$2000.00', rating: 4.9, image: 'https://wallpapers.com/images/hd/dj-set-pictures-2iol68c07g1tbl4c.jpg' },
  { id: '6', title: 'DJ Headphones', description: 'Top-tier DJ headphones with crystal clear sound and noise cancellation.', price: '$250.00', rating: 4.4, image: 'https://media.istockphoto.com/id/1093627396/photo/dj-music-console-in-bright-colors-of-light-in-night-club.jpg?s=612x612&w=0&k=20&c=FXx6C2-sexkkMhHG17c6PYdVTylzItLSpZZdFehfFJY=' },
  { id: '7', title: 'PA System for DJs', description: 'A powerful PA system with superior bass and clarity. Ideal for large DJ events and parties.', price: '$3000.00', rating: 4.5, image: 'https://www.datocms-assets.com/17746/1651679075-1-dj-product-images-new.jpg' },
  { id: '8', title: 'DJ Lights and Effects', description: 'Complete set of DJ lights and visual effects to enhance your live performances.', price: '$700.00', rating: 4.3, image: 'https://png.pngtree.com/thumb_back/fw800/background/20240426/pngtree-a-dj-plays-music-on-a-controller-at-a-party-image_15672582.jpg' },
];

const getStarIcons = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Icon key={`full-${i}`} name="star" size={20} color="#ffd700" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Icon key={`empty-${i}`} name="star-border" size={20} color="#ffd700" />);
  }

  return stars;
};

export default function DJ({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = djData.filter(item => {
    const priceValue = parseFloat(item.price.replace(/[^0-9.-]+/g, '')); // Extract numerical value from price
    const searchValue = parseFloat(searchQuery); // Convert search query to a number
    return !searchQuery || priceValue <= searchValue; // Filter condition
  });

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Details', { item })}
    >
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <Text style={styles.cardPrice}>{item.price}</Text>
        <View style={styles.ratingContainer}>
          {getStarIcons(item.rating)}
          <Text style={styles.cardRating}> ({item.rating.toFixed(1)})</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={24} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Enter max price"
          keyboardType="numeric"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      {filteredData.length === 0 ? (
        <View style={styles.noResultsContainer}>
          <Image
            source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/woman-searching-for-opportunities-illustration-download-in-svg-png-gif-file-formats--opportunity-venture-capital-startup-wakku-pack-professionals-illustrations-4470451.png' }} 
            style={styles.noResultsImage}
          />
          <Text style={styles.noResultsText}>No results found</Text>
        </View>
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    margin: 20,
    padding: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  listContainer: {
    paddingVertical: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    height: 150,
    width: '90%',
    alignSelf: 'center',
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  cardPrice: {
    fontSize: 16,
    color: '#1a6bf0',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardRating: {
    fontSize: 14,
    color: '#777',
    marginLeft: 5,
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  noResultsImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  noResultsText: {
    fontSize: 20,
    color: '#555',
  },
});
