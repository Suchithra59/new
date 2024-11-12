// // components/PhotographerProfileScreen.js

// import React from 'react';
// import { View, Text, Image, TouchableOpacity } from 'react-native';
// import { styles } from './styles';
// import { photographerProfiles } from './data';

// const PhotographerProfileScreen = ({ route, navigation }) => {
//   const { photographerId } = route.params;
//   const photographer = photographerProfiles.find(p => p.id === photographerId);

//   if (!photographer) return null;

//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: photographer.image }} style={{ width: 150, height: 150, borderRadius: 8, alignSelf: 'center' }} />
//       <Text style={styles.header}>{photographer.name}</Text>
//       <Text>Location: {photographer.location}</Text>
//       <Text>Specialty: {photographer.specialty}</Text>
//       <Text>Price: {photographer.price}</Text>
//       <Text>Rating: {photographer.rating} ⭐️</Text>
//       <Text>Bio: {photographer.bio}</Text>

//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Booking', { photographerId })}>
//         <Text style={styles.buttonText}>Book Now</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default PhotographerProfileScreen;
// components/PhotographerProfileScreen.js

// components/PhotographerProfileScreen.js

// components/PhotographerProfileScreen.js

import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { styles } from './styles';
import { photographerProfiles } from './data';

const PhotographerProfileScreen = ({ route, navigation }) => {
  const { photographerId } = route.params;
  const photographer = photographerProfiles.find(p => p.id === photographerId);

  if (!photographer) return null;

  const handleSeeMore = () => {
    // Pass the previousPhotos to the PreviousWorkScreen
    navigation.navigate('PreviousWork', { previousPhotos: photographer.previousPhotos });
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: photographer.image }} style={{ width: 150, height: 150, borderRadius: 8, alignSelf: 'center' }} />
      <Text style={styles.header}>{photographer.name}</Text>
      <Text>Location: {photographer.location}</Text>
      <Text>Specialty: {photographer.specialty}</Text>
      <Text>Price: {photographer.price}</Text>
      <Text>Rating: {photographer.rating} ⭐️</Text>
      <Text>Bio: {photographer.bio}</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Booking', { photographerId })}>
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>

      {/* Previous Photos Section */}
      <Text style={{ fontSize: 18, marginTop: 20 }}>Previous Work</Text>
      <TouchableOpacity onPress={handleSeeMore}>
        <Text style={{ fontSize: 15, marginLeft: 250, color: 'blue' }}>See more</Text>
      </TouchableOpacity>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 10 }}>
        {(photographer.previousPhotos ?? []).map((photo, index) => (
          <Image
            key={index}
            source={{ uri: photo }}
            style={styles.previousPhoto}
          />
        ))}
      </ScrollView>

      {/* Client Feedback Section */}
      <Text style={{ fontSize: 18, marginTop: 20 }}>Client Feedback</Text>
      <FlatList
        data={photographer.feedback ?? []}
        renderItem={({ item }) => (
          <View style={styles.feedbackCard}>
            <Text style={styles.feedbackUser}>{item.user}</Text>
            <Text style={styles.feedbackText}>{item.comment}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </ScrollView>
  );
};

export default PhotographerProfileScreen;
//new
// components/PhotographerProfileScreen.js

// components/PhotographerProfileScreen.js

// components/PhotographerProfileScreen.js

// components/PhotographerProfileScreen.js

// import React from 'react';
// import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
// import { styles } from './styles';
// import { photographerProfiles } from './data';
// import { useTheme } from './ThemeContext';

// const PhotographerProfileScreen = ({ route, navigation }) => {
//   const { photographerId } = route.params;
//   const photographer = photographerProfiles.find(p => p.id === photographerId);
//   const { theme, toggleTheme } = useTheme();

//   if (!photographer) return null;

//   const handleSeeMore = () => {
//     navigation.navigate('PreviousWork', { previousPhotos: photographer.previousPhotos });
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
//       {/* Header with Toggle Button */}
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
//         <Text style={{ color: theme.color, fontSize: 20 }}>Photographer Profile</Text>
//         <TouchableOpacity onPress={toggleTheme}>
//           <Text style={{ color: theme.color }}>{theme.color === '#fff' ? 'Light Mode' : 'Dark Mode'}</Text>
//         </TouchableOpacity>
//       </View>

//       <ScrollView style={styles.container}>
//         <Image source={{ uri: photographer.image }} style={{ width: 150, height: 150, borderRadius: 8, alignSelf: 'center' }} />
//         <Text style={[styles.header, { color: theme.color }]}>{photographer.name}</Text>
//         <Text style={{ color: theme.color }}>Location: {photographer.location}</Text>
//         <Text style={{ color: theme.color }}>Specialty: {photographer.specialty}</Text>
//         <Text style={{ color: theme.color }}>Price: {photographer.price}</Text>
//         <Text style={{ color: theme.color }}>Rating: {photographer.rating} ⭐️</Text>
//         <Text style={{ color: theme.color }}>Bio: {photographer.bio}</Text>

//         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Booking', { photographerId })}>
//           <Text style={styles.buttonText}>Book Now</Text>
//         </TouchableOpacity>

//         {/* Previous Photos Section */}
//         <Text style={{ fontSize: 18, marginTop: 20, color: theme.color }}>Previous Work</Text>
//         <TouchableOpacity onPress={handleSeeMore}>
//           <Text style={{ fontSize: 15, marginLeft: 250, color: 'blue' }}>See more</Text>
//         </TouchableOpacity>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 10 }}>
//           {(photographer.previousPhotos ?? []).map((photo, index) => (
//             <Image
//               key={index}
//               source={{ uri: photo }}
//               style={styles.previousPhoto}
//             />
//           ))}
//         </ScrollView>

//         {/* Client Feedback Section */}
//         <Text style={{ fontSize: 18, marginTop: 20, color: theme.color }}>Client Feedback</Text>
//         <FlatList
//           data={photographer.feedback ?? []}
//           renderItem={({ item }) => (
//             <View style={styles.feedbackCard}>
//               <Text style={styles.feedbackUser}>{item.user}</Text>
//               <Text style={styles.feedbackText}>{item.comment}</Text>
//             </View>
//           )}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       </ScrollView>
//     </View>
//   );
// };

// export default PhotographerProfileScreen;
