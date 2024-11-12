import React, { useState } from 'react';
import { View, Text, Image, FlatList, Modal, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useTheme } from './ThemeContext'; // Assuming you're using ThemeContext
import { styles } from './styles';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

const PreviousWorkScreen = ({ route }) => {
  const { previousPhotos } = route.params;
  const { theme } = useTheme(); // For dynamic theme styles
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageViewer = (image) => {
    setSelectedImage(image);
    setIsVisible(true);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
        <Text style={[styles.header, { color: theme.color }]}>Previous Work</Text>
        <FlatList
          data={previousPhotos}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => openImageViewer(item)}>
              <Image source={{ uri: item }} style={styles.fullPhoto} />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        {/* Modal for Full-Screen Image Viewer */}
        <Modal visible={isVisible} transparent={true} animationType="fade">
          <View style={styles.modalBackground}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setIsVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            <ScrollView
              style={{ flex: 1 }}
              maximumZoomScale={3}
              minimumZoomScale={1}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.zoomContainer}
            >
              <Image source={{ uri: selectedImage }} style={styles.fullscreenImage} />
            </ScrollView>
          </View>
        </Modal>
      </View>
    </GestureHandlerRootView>
  );
};


export default PreviousWorkScreen;
