import React from 'react';
import { View, Text, Image } from 'react-native';

const PhotographerDetails = ({ photographer }) => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Image style={{ width: 120, height: 120, borderRadius: 60 }} source={{ uri: photographer.photo }} />
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{photographer.name}</Text>
      <Text style={{ fontSize: 16, marginBottom: 20 }}>{photographer.bio}</Text>
      <Text style={{ fontSize: 14, color: '#666' }}>{photographer.description}</Text>
    </View>
  );
};

export default PhotographerDetails;
