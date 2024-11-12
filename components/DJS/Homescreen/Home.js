import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For notification icon
import { useNavigation } from "@react-navigation/native";
import SearchComponent from '../Searchscreen/SearchComponent';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const navigation = useNavigation();

  // Dummy data for top deals
  const topDealsData = [
    {
      id: "1",
      title: "Turntable DJ Setup",
      price: "$1200.00",
      image:
        "https://wallpapers.com/images/hd/dj-set-pictures-23iylhasc7ka7bkz.jpg",
    },
    {
      id: "2",
      title: "DJ Controller",
      price: "$600.00",
      image:
        "https://img.freepik.com/free-vector/dj-set-typographic-header-person-standing-turntable-mixer-make-music-club-club-music-composer-with-headphones-isolated-flat-vector-illustration_613284-2663.jpg",
    },
    {
      id: "3",
      title: "Portable Speaker",
      price: "$300.00",
      image:
        "https://www.shoutlo.com/uploads/articles/header-img-top-10-djs-in-india.jpg",
    },
    {
      id: "4",
      title: "Headphones",
      price: "$150.00",
      image:
        "https://plus.unsplash.com/premium_photo-1682391039938-e9782294c1a3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGolMjBtaXhlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  // Dummy data for card container
  const cardData = [
    {
      id: "1",
      title: "High-End Mixer",
      description: "Professional-grade mixer with 16 channels.",
      price: "$1000.00",
      category: "Mixers",
      rating: 4.8,
      image:
        "https://st4.depositphotos.com/1000904/30295/i/450/depositphotos_302956266-stock-photo-professional-dj-audio-equipment-on.jpg",
    },
    {
      id: "2",
      title: "Studio Monitors",
      description: "High fidelity studio monitors for perfect sound.",
      price: "$800.00",
      category: "Monitors",
      rating: 4.7,
      image:
        "https://cdn.shopify.com/s/files/1/0617/2308/3005/files/DJ_Professional_Package_1_480x480.jpg?v=1641427414",
    },
    {
      id: "3",
      title: "DJ Software",
      description: "Advanced DJ software for seamless mixing.",
      price: "$200.00",
      category: "Software",
      rating: 4.5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkVnm-Rql9po0GvDXcQWP7vCC6rlf-7mpEA&s",
    },
    {
      id: "4",
      title: "Microphone",
      description: "High-quality microphone for recording.",
      price: "$250.00",
      category: "Microphones",
      rating: 4.6,
      image:
        "https://i.pinimg.com/736x/e0/1f/40/e01f403a9f72f0add476605c09b23fc0.jpg",
    },
    {
      id: "5",
      title: "DJ Light Set",
      description: "Professional DJ light set for performances.",
      price: "$400.00",
      category: "Lighting",
      rating: 4.9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiCqxW8ovRxaz7b4xBy4wxbkCLqKrty13MaA&s",
    },
    {
      id: "6",
      title: "DJ Stand",
      description: "Sturdy stand for DJs on the go.",
      price: "$150.00",
      category: "Accessories",
      rating: 4.4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEGgtA7pL6icR9I7zuIv3lUxvzteTw4pQgOA&s",
    },
  ];

  const renderDealItem = ({ item }) => (
    <TouchableOpacity
      style={styles.dealCard}
      onPress={() => navigation.navigate("Details", { item })}
    >
      <Image source={{ uri: item.image }} style={styles.dealImage} />
      <View style={styles.dealDetails}>
        <Text style={styles.dealTitle}>{item.title}</Text>
        <Text style={styles.dealInfo}>Deals: {item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderCardRow = ({ item }) => (
    <View style={styles.cardRow}>
      {item.map((card) => (
        <TouchableOpacity
          key={card.id}
          style={styles.card}
          onPress={() => navigation.navigate("Details", { item: card })}
        >
          <Image source={{ uri: card.image }} style={styles.image} />
          <Text style={styles.title}>{card.title}</Text>
          <Text style={styles.price}>Price: {card.price}</Text>
          <Text style={styles.category}>Category: {card.category}</Text>
          <Text style={styles.rating}>Rating: {card.rating} ★</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const cardRows = [];
  for (let i = 0; i < cardData.length; i += 2) {
    cardRows.push(cardData.slice(i, i + 2));
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* Left: Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={{
              uri: "https://thumbs.dreamstime.com/b/dj-logo-design-dj-logo-design-creative-vector-logo-design-headphones-dj-glasses-music-logotype-template-246229247.jpg",
            }}
            style={styles.logo}
          />
        </View>

        {/* Right: Profile Pic and Notification */}
        <View style={styles.rightSection}>
          <TouchableOpacity style={styles.notificationIcon}>
            <Ionicons name="notifications-outline" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://cdni.iconscout.com/illustration/premium/thumb/woman-profile-illustration-download-in-svg-png-gif-file-formats--young-female-girl-avatar-portraits-pack-people-illustrations-6590622.png?f=webp",
              }}
              style={styles.profilePic}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.headerText}>
        <Text style={styles.text}>
          Welcome to <Text style={styles.italicText}>DJ Pool...</Text>
        </Text>
      </View>

      <SearchComponent/>
      {/* <View style={styles.searchContainer}>
      <TextInput
        style={[styles.searchInput, isHovered && styles.hoveredInput]}
        placeholder="Search..."
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      />
      <TouchableOpacity
        style={styles.searchIconContainer}
        onPress={() => {
          
          console.log("Search pressed");
        }}
      >
        <Ionicons name="search" size={24} color={isHovered ? "blue" : "gray"} />
      </TouchableOpacity>
    </View> */}

      {/* Top Deals */}
      <View style={styles.topDealsContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.dealsTitle}>Top Deals</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Tap")}>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {topDealsData.map((item) => renderDealItem({ item }))}
        </ScrollView>
      </View>

      <View style={styles.djHereContainer}>
        <Text style={styles.djHereText}>DJ Here</Text>
        <TouchableOpacity onPress={() => navigation.navigate("DJ")}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={cardRows}
        renderItem={renderCardRow}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: "contain",
    marginLeft: -10,
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationIcon: {
    marginRight: 15,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: "blue",
  },
  text: {
    textAlign: "left",
    fontSize: 26,
    marginTop: 20,
    color: "black",
  },
  italicText: {
    fontStyle: "italic",
    color: "#1a6bf0",
    fontWeight: "600",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 25,
    backgroundColor: "#fff",
  },
  hoveredInput: {
    borderColor: "blue",
    borderWidth: 1.5,
  },
  searchIconContainer: {
    padding: 10,
  },
  topDealsContainer: {
    marginVertical: 15,
  },
  dealsTitle: {
    fontSize: 24,
    color: "#1a6bf0",
    marginBottom: 10,
    fontFamily: "sans-serif",
  },
  dealCard: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
    marginRight: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    width: 300,
    height: 200,
  },
  dealImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  dealDetails: {
    marginTop: 10,
  },
  dealTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dealInfo: {
    color: "gray",
  },
  image: {
    width: "100%",
    height: 80,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    color: "#1a6bf0",
  },
  category: {
    fontSize: 12,
    color: "gray",
  },
  rating: {
    fontSize: 12,
    color: "gold",
  },
  list: {
    justifyContent: "center",
  },
  seeAll: {
    fontSize: 18,
    color: "#1a6bf0",
    textDecorationLine: "underline",
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    width: "48%",
  },
  djHereContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 15,
  },
  djHereText: {
    fontSize: 24,
    fontFamily: "sans-serif",
    color: "#1a6bf0",
  },
  topDealsContainer: {
    marginVertical: 20,
    paddingHorizontal: 15,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default Home;
