// components/Header.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={{uri:'https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png'}} />
      </View>
      <TouchableOpacity
        onPress={() => alert('Profile Clicked!')}
        style={styles.profilePicContainer}
      >
        <Image style={styles.profilePic} source={{uri:'https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png'}} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 10,
    height: 60,
  },
  logoContainer: {
    marginRight: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  profilePicContainer: {
    marginLeft: 10,
  },
  profilePic: {
    width: 30,
    height: 30,
  },
});

export default Header;
