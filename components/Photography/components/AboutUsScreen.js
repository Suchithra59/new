// components/AboutUsScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from './ThemeContext';

const AboutUsScreen = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.header, { color: theme.color }]}>About Us</Text>
      <View style={styles.content}>
        <View style={styles.leftSide}>
          <Text style={{ color: theme.color }}>
            We are a team of passionate photographers dedicated to capturing the perfect moments.
          </Text>
        </View>
        <View style={styles.rightSide}>
          <Text style={{ color: theme.color }}>Follow us on social media:</Text>
          <Text style={{ color: theme.color }}>Instagram: @youraccount</Text>
          <Text style={{ color: theme.color }}>Facebook: @youraccount</Text>
          <Text style={{ color: theme.color }}>Twitter: @youraccount</Text>
        </View>
      </View>
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
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  leftSide: {
    flex: 1,
    marginRight: 10,
  },
  rightSide: {
    flex: 1,
    marginLeft: 10,
  },
});

export default AboutUsScreen;
