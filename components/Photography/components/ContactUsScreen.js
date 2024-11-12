// components/ContactUsScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useTheme } from './ThemeContext';

const ContactUsScreen = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleSubmit = () => {
    // Handle form submission
    console.log({ email, password, contactNumber });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.header, { color: theme.color }]}>Contact Us</Text>
      <TextInput
        style={[styles.input, { borderColor: theme.color }]}
        placeholder="Email Address"
        placeholderTextColor={theme.color}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, { borderColor: theme.color }]}
        placeholder="Password"
        placeholderTextColor={theme.color}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={[styles.input, { borderColor: theme.color }]}
        placeholder="Contact Number"
        placeholderTextColor={theme.color}
        value={contactNumber}
        onChangeText={setContactNumber}
      />
      <Button title="Submit" onPress={handleSubmit} color="#841584" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default ContactUsScreen;
