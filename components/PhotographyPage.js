// components/PhotographyPage.js
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function PhotographyPage() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Photography Page</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });
//new
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Photography/components/HomeScreen';
import PhotographerProfileScreen from './Photography/components/PhotographerProfileScreen';
import PreviousWorkScreen from './Photography/components/PreviousWorkScreen';
import BookingScreen from './Photography/components/BookingScreen';
import ContactUsScreen from './Photography/components/ContactUsScreen';
import AboutUsScreen from './Photography/components/AboutUsScreen';
import { ThemeProvider, useTheme } from './Photography/components/ThemeContext';
import { StatusBar, View } from 'react-native';

const Stack = createStackNavigator();

const PhotographyPage = () => {
  return (
    <ThemeProvider>
      <MainNavigator />
    </ThemeProvider>
  );
};

const MainNavigator = () => {
  const { theme } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      <StatusBar barStyle={theme.color === '#fff' ? 'light-content' : 'dark-content'} />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PhotographerProfile" component={PhotographerProfileScreen} />
        <Stack.Screen name="PreviousWork" component={PreviousWorkScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} />
        <Stack.Screen name="AboutUs" component={AboutUsScreen} />
      </Stack.Navigator>
    </View>
  );
};

export default PhotographyPage;
