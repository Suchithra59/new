import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import PhotographerCard from './PhotographerCards';
import axios from 'axios';
import { useState, useEffect } from 'react';

const dummyData = [
  {
    id: 1,
    name: "John Doe",
    bio: "A photographer with a passion for capturing the beauty of nature",
    photo: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Jane Smith",
    bio: "A photographer with a focus on capturing the best moments of life",
    photo: "https://picsum.photos/200/301",
  },
  {
    id: 3,
    name: "Bob Brown",
    bio: "A photographer with a love for capturing the beauty of cityscapes",
    photo: "https://picsum.photos/200/302",
  },
];

const LandingPage = () => {
  const [photographers, setPhotographers] = useState(dummyData);
  const [selectedPhotographer, setSelectedPhotographer] = useState(null);

  useEffect(() => {
    // Add any code that you want to run after the component mounts
  }, []);

  const handlePress = (photographer) => {
    setSelectedPhotographer(photographer);
  };

  const handleHeaderPress = () => {
    // Add code to handle header press
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={handleHeaderPress}>
          <Image style={{ width: 30, height: 30 }} source={{ uri: 'https://picsum.photos/200/301' }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleHeaderPress}>
          <Image style={{ width: 30, height: 30 }} source={{ uri: 'https://picsum.photos/200/300' }} />
        </TouchableOpacity>
      </View>
      <View style={{ padding: 20 }}>
        <FlatList
          data={photographers}
          renderItem={({ item }) => (
            <PhotographerCard photographer={item} onPress={() => handlePress(item)} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      {selectedPhotographer && (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <PhotographerDetails photographer={selectedPhotographer} />
        </View>
      )}
    </View>
  );
};

export default LandingPage;

const PhotographerDetails = ({ photographer }) => {
  return (
    <View style={{ padding: 20 }}>
      <Image style={{ width: 100, height: 100, borderRadius: 50 }} source={{ uri: photographer.photo }} />
      <Text style={{ fontSize: 18 }}>{photographer.name}</Text>
      <Text style={{ fontSize: 14 }}>{photographer.bio}</Text>
    </View>
  );
};
