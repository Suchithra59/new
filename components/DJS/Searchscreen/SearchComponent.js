import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const DJs = [
  { id: "1", title: "High-End Mixer", price: 1000, frequency: "High" },
  { id: "2", title: "Studio Monitors", price: 800, frequency: "Medium" },
  { id: "3", title: "DJ Software", price: 200, frequency: "Low" },
  { id: "4", title: "Microphone", price: 250, frequency: "Medium" },
  { id: "5", title: "DJ Light Set", price: 400, frequency: "High" },
  { id: "6", title: "DJ Stand", price: 150, frequency: "Low" },
  { id: "7", title: "DJ Mixer", price: 850, frequency: "Medium" },
  { id: "8", title: "All-in-One DJ System", price: 2000, frequency: "High" },
  { id: "9", title: "DJ Headphones", price: 250, frequency: "Medium" },
  { id: "10", title: "PA System for DJs", price: 3000, frequency: "High" },
  { id: "11", title: "DJ Lights and Effects", price: 700, frequency: "Low" },
];

const SearchComponent = () => {
  const navigation = useNavigation();
  const [isHovered, setIsHovered] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [availableDJs, setAvailableDJs] = useState(DJs); // Store original DJs
  const [filteredDJs, setFilteredDJs] = useState([]); // Start with an empty filtered list

  const handleSearch = () => {
    const maxPrice = Number(searchText);
    const priceFilteredDJs = availableDJs.filter(item => item.price <= maxPrice);
    setFilteredDJs(priceFilteredDJs); // Set DJs filtered by price
    setSelectedFilter(null); // Reset frequency filter
  };

  const applyFrequencyFilter = (freq) => {
    const frequencyFilteredDJs = filteredDJs.filter(item => item.frequency === freq);
    setFilteredDJs(frequencyFilteredDJs); // Update filtered DJs based on frequency
  };

  const navigateToDetails = (item) => {
    navigation.navigate('Details', { item });
  };

  // Count the DJs available for each frequency after filtering by price
  const frequencyCounts = filteredDJs.reduce((acc, dj) => {
    acc[dj.frequency] = (acc[dj.frequency] || 0) + 1;
    return acc;
  }, {});

  return (
    <View>
      <TouchableOpacity
        style={styles.searchIconContainer}
        onPress={() => setIsSearchVisible(!isSearchVisible)}
      >
        <Ionicons name="search" size={24} color={isHovered ? "blue" : "gray"} />
      </TouchableOpacity>

      {isSearchVisible && (
        <View style={styles.searchContainer}>
          <TextInput
            style={[styles.searchInput, isHovered && styles.hoveredInput]}
            placeholder="Max Price..."
            value={searchText}
            keyboardType="numeric"
            onChangeText={setSearchText}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={handleSearch}
          >
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Always show filters */}
      <View style={styles.filterContainer}>
        {['Low', 'Medium', 'High'].map((freq) => (
          <TouchableOpacity
            key={freq}
            style={[styles.filterButton, selectedFilter === freq && styles.selectedFilter]}
            onPress={() => {
              const newFilter = selectedFilter === freq ? null : freq;
              setSelectedFilter(newFilter);
              if (newFilter) {
                applyFrequencyFilter(newFilter);
              } else {
                // Reset to show DJs based on the initial price search
                handleSearch();
              }
            }}
          >
            <Text style={styles.filterText}>{freq} Frequency ({frequencyCounts[freq] || 0})</Text>
          </TouchableOpacity>
        ))}
      </View>

      {filteredDJs.length === 0 && searchText ? (
        <Text style={styles.notFoundText}>No DJs found for the selected criteria.</Text>
      ) : (
        <FlatList
          data={filteredDJs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigateToDetails(item)}>
              <View style={styles.djItem}>
                <Text>{item.title} - ${item.price}</Text>
                <Text>Frequency: {item.frequency}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 25,
    backgroundColor: '#fff',
  },
  hoveredInput: {
    borderColor: 'blue',
    borderWidth: 1.5,
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: 'blue',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  searchButtonText: {
    color: '#fff',
  },
  searchIconContainer: {
    padding: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  filterButton: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#eee',
  },
  selectedFilter: {
    backgroundColor: 'blue',
  },
  filterText: {
    color: '#000',
  },
  djItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  notFoundText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'red',
  },
});

export default SearchComponent;
