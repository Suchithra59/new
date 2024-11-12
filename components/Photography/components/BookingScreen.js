// // components/BookingScreen.js

// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity } from 'react-native';
// import { styles } from './styles';
// import { bookingOptions } from './data';

// const BookingScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Available Booking Slots</Text>
      
//       <FlatList
//         data={bookingOptions}
//         renderItem={({ item }) => (
//           <View style={{ padding: 16, backgroundColor: '#FFFFFF', borderRadius: 10, marginBottom: 10 }}>
//             <Text>Date: {item.date}</Text>
//             <Text>Time: {item.time}</Text>
//             <Text>Price: {item.price}</Text>
//           </View>
//         )}
//         keyExtractor={item => item.id}
//       />
      
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Confirm Booking</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default BookingScreen;
// components/BookingScreen.js

// components/BookingScreen.js

// components/BookingScreen.js

// components/BookingScreen.js

// components/BookingScreen.js

// components/BookingScreen.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from './styles';

const availableSlots = [
  { id: '1', time: '9:00 AM - 11:00 AM', price: '$50/hr' },
  { id: '2', time: '12:00 PM - 2:00 PM', price: '$60/hr' },
  { id: '3', time: '3:00 PM - 5:00 PM', price: '$55/hr' },
];

const BookingScreen = ({ route }) => {
  const { photographerId } = route.params;

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleConfirmBooking = () => {
    if (!selectedSlot) {
      Alert.alert("No Slot Selected", "Please select a time slot.");
      return;
    }
    Alert.alert(
      "Booking Confirmed!",
      `Photographer ID: ${photographerId}\nSlot: ${selectedSlot.time}\nPrice: ${selectedSlot.price}\nFrom: ${startDate.toLocaleDateString()} To: ${endDate.toLocaleDateString()}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Booking for Photographer ID: {photographerId}</Text>

      {/* Date Pickers Row */}
      <View style={styles.dateRow}>
        <TouchableOpacity onPress={() => setShowStartPicker(true)} style={styles.dateButton}>
          <Text style={styles.dateButtonText}>From: {startDate.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showStartPicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="default"
            onChange={(event, date) => {
              setShowStartPicker(false);
              if (date) setStartDate(date);
            }}
          />
        )}

        <TouchableOpacity onPress={() => setShowEndPicker(true)} style={styles.dateButton}>
          <Text style={styles.dateButtonText}>To: {endDate.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showEndPicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="default"
            onChange={(event, date) => {
              setShowEndPicker(false);
              if (date) setEndDate(date);
            }}
          />
        )}
      </View>

      {/* Confirm Booking Button */}
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmBooking}>
        <Text style={styles.confirmButtonText}>Confirm Booking</Text>
      </TouchableOpacity>

      {/* Slot Selection Section */}
      <Text style={{ fontSize: 18, marginVertical: 10 }}>For One Day:</Text>
      <Text style={{ fontSize: 18, marginVertical: 10 }}>Choose a Slot:</Text>

      <FlatList
        data={availableSlots}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.slotRow}
            onPress={() => {
              setSelectedSlot(item);
              setModalVisible(true);
            }}
          >
            <Text style={styles.slotText}>{item.time}</Text>
            <Text style={styles.slotPrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Modal for Slot Confirmation */}
      {selectedSlot && (
        <Modal
          transparent
          animationType="slide"
          visible={isModalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Do you want to book this slot?
              </Text>
              <Text style={styles.modalText}>
                Date: {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
              </Text>
              <Text style={styles.modalText}>
                Time: {selectedSlot.time} - {selectedSlot.price}
              </Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={styles.okButton}
                  onPress={() => {
                    setModalVisible(false);
                    handleConfirmBooking();
                  }}
                >
                  <Text style={styles.okButtonText}>OK</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default BookingScreen;
