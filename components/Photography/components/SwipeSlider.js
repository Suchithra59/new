// components/SwipeSlider.js
import React, { useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import SliderComponent from '@react-native-community/slider';

const SwipeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const photos = [
    { uri: 'http://example.com/path/to/image1.jpg', photographer: 'Photographer 1' },
    { uri: 'http://example.com/path/to/image2.jpg', photographer: 'Photographer 2' },
    { uri: 'http://example.com/path/to/image3.jpg', photographer: 'Photographer 3' },
  ];

  const slides = photos.map((photo, index) => (
    <Image key={index} style={styles.photo} source={{ uri: photo.uri }} />
  ));

  const handleSlideChange = (value) => {
    setCurrentIndex(Math.round(value));
  };

  return (
    <View style={styles.container}>
      <SliderComponent
        minimumValue={0}
        maximumValue={photos.length - 1}
        value={currentIndex}
        onValueChange={handleSlideChange}
      />
      {slides[currentIndex]} {/* Only show the current slide */}
      <View style={styles.bottomLayout}>
        <Text style={styles.photographer}>{photos[currentIndex].photographer}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  photo: {
    width: '100%', // Use percentage for responsive design
    height: 200,   // Set a fixed height
  },
  bottomLayout: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
  },
  photographer: {
    fontSize: 16,
    color: '#333',
  },
});

export default SwipeSlider;
