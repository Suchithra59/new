import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';  // Import StatusBar
import Home from '../Homescreen/Home';
import Cart from '../Cartscreen/Cart';
import Profile from '../Profilescreen/Profile';
import Contact from '../Contactscreen/Contact';
import { StyleSheet } from 'react-native';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Choose the icon name based on the screen route name
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';  // Filled for active, outline for inactive
              break;
            case 'Cart':
              iconName = focused ? 'cart' : 'cart-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            case 'Contact':
              iconName = focused ? 'call' : 'call-outline';
              break;
            
            default:
              iconName = 'home';
          }

          // Return the icon for each tab with dynamic color and size
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1a6bf0',  // Active icon color
        tabBarInactiveTintColor: 'gray',   // Inactive icon color
        tabBarStyle: styles.tabBar,        // Custom tab bar styles
        tabBarLabelStyle: styles.tabBarLabel,  // Custom label styles
        tabBarIconStyle: styles.tabBarIcon,  // Custom icon styles
      })}
    >
      {/* Home tab */}
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Home' }} 
      />
      
      {/* Cart tab */}
      <Tab.Screen 
        name="Cart" 
        component={Cart} 
        options={{ title: 'Cart' }} 
      />
      
      {/* Profile tab */}
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{ title: 'Profile' }} 
      />
      
      {/* Contact tab */}
      <Tab.Screen 
        name="Contact" 
        component={Contact} 
        options={{ title: 'Contact Us' }} 
      />
      
     
      {/* StatusBar component (hidden in the tab) */}
      <Tab.Screen 
        name="StatusBar" 
        component={() => <StatusBar style="auto" />} 
        options={{ tabBarButton: () => null }}  // Hide tab button
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',  // Tab bar background color
    height: 60,  // Height of the tab bar
    borderTopWidth: 0,  // Remove top border line (if any)
    paddingBottom: 5,  // Padding at the bottom
  },
  tabBarLabel: {
    fontSize: 14,  // Font size of the tab label
    fontWeight: 'bold',  // Font weight
    paddingBottom: 5,  // Padding between label and bottom edge
  },
  tabBarIcon: {
    size: 28,  // Default icon size
  },
});
