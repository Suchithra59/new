// components/TicketScreen.js

import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { tickets } from './data';

const TicketScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Ticket</Text>
      
      <FlatList
        data={tickets}
        renderItem={({ item }) => (
          <View style={{ padding: 16, backgroundColor: '#FFFFFF', borderRadius: 10, marginBottom: 10 }}>
            <Text>Airline: {item.airline}</Text>
            <Text>Departure: {item.departure}</Text>
            <Text>Arrival: {item.arrival}</Text>
            <Text>Duration: {item.duration}</Text>
            <Text>From: {item.from} - To: {item.to}</Text>
            <Text>Price: {item.price}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TicketScreen;
