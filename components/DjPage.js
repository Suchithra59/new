import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import TabNavigator from './DJS/Tabscreen/Tab';
import Details from './DJS/Detailscreen/Details';
import DJ from './DJS/DJscreen/DJ';
import Tap from './DJS/Topscreen/Tap';
import SearchComponent from './DJS/Searchscreen/SearchComponent';
import BookDetails from './DJS/Bookingscreen/BookDetails';
import Bookings from './DJS/Bookingscreen/Bookings';

const Stack = createStackNavigator();

export default function DjPage() {
  return (
 
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="DJ" component={DJ} />
      <Stack.Screen name="Tap" component={Tap} />
      <Stack.Screen name="Bookings" component={Bookings} />
      <Stack.Screen name="SearchComponent" component={SearchComponent} />
      <Stack.Screen name="BookDetails" component={BookDetails} />
    
    </Stack.Navigator>
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
