// components/PhotographerCards.js
import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const PhotographerCards = () => {
  const photographers = [
    { id: 1, name: 'Photographer 1', image: 'https://webneel.com/daily/sites/default/files/images/daily/10-2018/12-famous-indian-photographer-rathika-ramasamy.jpg' },
    { id: 2, name: 'Photographer 2', image: 'https://webneel.com/daily/sites/default/files/images/daily/10-2018/12-famous-indian-photographer-rathika-ramasamy.jpg' },
    { id: 3, name: 'Photographer 3', image: 'https://webneel.com/daily/sites/default/files/images/daily/10-2018/12-famous-indian-photographer-rathika-ramasamy.jpg' },
  ];

  const cards = photographers.map((photographer) => (
    <View key={photographer.id} style={styles.cardContainer}>
      <Image style={styles.cardImage} source={{ uri: photographer.image }} />
      <Text style={styles.cardName}>{photographer.name}</Text>
    </View>
  ));

  return <View style={styles.container}>{cards}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardContainer: {
    //width: Dimensions.get('window').width / 2,
    height: 150,
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardName: {
    fontSize: 16,
    color: '#333',
  },
});

export default PhotographerCards;
