// components/HomeScreen.js

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, ScrollView, Dimensions } from 'react-native';
import { styles } from './styles';
import { popularPhotographers } from './data';

const windowWidth = Dimensions.get('window').width;

const HomeScreen = ({ navigation }) => {
  const sliderData = [
    { id: '1', title: 'Top Deals on Portraits', image: 'https://cdn.create.vista.com/downloads/864b014e-738d-40d7-99a4-f75a933b38ea_1024.jpeg' },
    { id: '2', title: 'Wedding Packages', image: 'https://az827626.vo.msecnd.net/cdn/localservices/promotions/local-services_2022-04-13-07-22-07-239.jpg', offer: '15% off' },
    { id: '3', title: 'Outdoor Photography', image: 'https://d168jcr2cillca.cloudfront.net/uploadimages/coupons/10842-Pankaj_Banner.jpg', offer: '25% off' },
   // { id: '4', title: 'Outdoor Photography', image: 'https://webneel.com/daily/sites/default/files/images/daily/10-2018/12-famous-indian-photographer-rathika-ramasamy.jpg', offer: '25% off' },
   //https://wildromanticphotography.com/wp-content/uploads/Wedding-Photographer-Focus.jpg
       { id: '4', title: 'Outdoor Photography', image: 'https://wildromanticphotography.com/wp-content/uploads/Wedding-Photographer-Focus.jpg', offer: '25% off' },

];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Find Photographers</Text>
      <TextInput style={styles.searchInput} placeholder="Search for photographers, locations..." />

      {/* Slider Section */}
      <Text style={{ fontSize: 18, marginTop: 20 }}>Top Deals</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 10 }}>
        {sliderData.map((item) => (
          <View key={item.id} style={styles.sliderCard}>
            <Image source={{ uri: item.image }} style={styles.sliderImage} />
            <Text style={styles.sliderTitle}>{item.title}</Text>
            <Text style={styles.sliderOffer}>{item.offer}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Photographers Grid */}
      <Text style={{ fontSize: 18, marginTop: 20 }}>Popular Photographers</Text>
      <FlatList
        data={popularPhotographers}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.photographerCard}
            onPress={() => navigation.navigate('PhotographerProfile', { photographerId: item.id })}
          >
            <Image source={{ uri: item.image }} style={styles.photographerImage} />
            <Text style={styles.photographerName}>{item.name}</Text>
            <Text style={styles.photographerLocation}>Location: {item.location}</Text>
            <Text style={styles.photographerRating}>Rating: {item.rating} ⭐️</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
};

export default HomeScreen;
