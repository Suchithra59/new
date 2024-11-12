import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, TextInput, Image, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

export default function Bookings({ route }) {
  const navigation = useNavigation();
  const { dj } = route.params; // Get the DJ details from the navigation params
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [location, setLocation] = useState(''); // Location input state

  // Confirm the booking
  const confirmBooking = () => {
    if (!location.trim()) {
      Alert.alert('Warning', 'Location is required for booking.', [{ text: 'OK' }]);
      return; // Prevent booking if location is empty
    }

    const bookingDetails = {
      title: dj.title,
      offers: dj.offers,
      location,
      startDate: startDate.toLocaleDateString(),
      endDate: endDate.toLocaleDateString(),
      image: dj.image, 
    };

    // Display the confirmation alert
    Alert.alert(
      'Confirm Booking',
      `DJ: ${dj.title}\nOffers: ${dj.offers}\nLocation: ${location}\nFrom: ${startDate.toLocaleDateString()} To: ${endDate.toLocaleDateString()}`,
      [
        {
          text: 'OK',
          onPress: () => {
            Alert.alert('Booking Successful!', 'Your booking has been confirmed.', [
              {
                text: 'OK',
                onPress: () => {
                  // Navigate to BookDetails with booking details
                  navigation.navigate('BookDetails', bookingDetails);

                  // Reset the form fields after booking is confirmed
                  setLocation(''); // Clear location input
                  setStartDate(new Date()); // Reset start date to current date
                  setEndDate(new Date()); // Reset end date to current date
                },
              },
            ]);
          },
        },
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={{ uri: dj.image }} style={styles.djImage} />
        <Text style={styles.djTitle}>{dj.title}</Text>
        <Text style={styles.djOffers}>{dj.offers}</Text>
        <Text style={styles.djDetails}>Details: {dj.description}</Text>

        {/* Horizontal Carousel for DJ Photos */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
          {dj.additionalImages?.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.carouselImage} />
          ))}
        </ScrollView>

        {/* Booking Details */}
        <View style={styles.bookingDetailsContainer}>
          <View style={styles.dateContainer}>
            <Button title="Select Start Date" onPress={() => setShowStartPicker(true)} />
            {showStartPicker && (
              <DateTimePicker
                value={startDate}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  setShowStartPicker(false);
                  if (selectedDate) setStartDate(selectedDate);
                }}
              />
            )}

            <View style={styles.spacer} />

            <Button title="Select End Date" onPress={() => setShowEndPicker(true)} />
            {showEndPicker && (
              <DateTimePicker
                value={endDate}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  setShowEndPicker(false);
                  if (selectedDate) setEndDate(selectedDate);
                }}
              />
            )}
          </View>

          <View style={styles.spacer} />
          
          <Button title="Confirm Booking" onPress={confirmBooking} color="#28a745" />
        </View>
      </ScrollView>

      {/* Location Input at the Bottom */}
      <View style={styles.locationInputContainer}>
        <TextInput
          style={styles.locationInput}
          placeholder="Enter Location"
          value={location}
          onChangeText={setLocation}
        />
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
  scrollContainer: {
    paddingBottom: 100, 
  },
  djImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  djTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  djOffers: {
    fontSize: 18,
    color: '#1a6bf0',
    marginBottom: 10,
  },
  djDetails: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  carousel: {
    marginBottom: 20,
    height: 180,
  },
  carouselImage: {
    width: 300,
    height: '70%',
    borderRadius: 10,
    marginRight: 25,
  },
  bookingDetailsContainer: {
    marginBottom: 20,
  },
  locationInputContainer: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  locationInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  spacer: {
    height: 10,
  },
});
