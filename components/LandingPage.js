import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Switch,
} from "react-native";
import { Avatar, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons"; 

export default function LandingPage() {
  const navigation = useNavigation();
  const scrollViewRef1 = useRef(null);
  const scrollViewRef2 = useRef(null);
  const scrollIntervalRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    { id: 1, name: "Photography", uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfxPedWjxkXJc2auRUiKEWahf_7ONYV_JkFQ&s", page: "PhotographyPage" },
    { id: 2, name: "DJ", uri: "https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_1280.jpg", page: "DjPage" },
    { id: 3, name: "Technology", uri: "https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg", page: "TechnologyPage" },
    { id: 4, name: "Travel", uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmSpF-ATKbyHD9niu7UfZj-5C1Job4b5HE5Q&s", page: "TravelPage" },
    { id: 5, name: "Fashion", uri: "https://thumbs.dreamstime.com/b/fashion-pretty-cool-youngwith-shopping-bags-wearing-black-hat-white-pants-over-colorful-orange-background-79063329.jpg", page: "FashionPage" },
    { id: 6, name: "Food", uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQinN1wubYdS8-H3M3kwMOvQmYbHyzUj3xk_2iJHCTIqWwF85Wg36wx_GYs8xQHzRJ2M_4&usqp=CAU", page: "FoodPage" },
    { id: 7, name: "Sports", uri: "https://www.shutterstock.com/image-vector/colorful-concept-sports-silhouettes-sport-260nw-2378868431.jpg" },
    { id: 8, name: "Music", uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNruz_L5zomAgetWwD1yIb6hBUA-JgLdWWbA&s" },
    { id: 9, name: "Art", uri: "https://m.media-amazon.com/images/I/81DO2H9zhwL._AC_UF1000,1000_QL80_.jpg" },
    { id: 10, name: "Nature", uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmsbxSm-9IKrCVj24vL_J20Wmhfm3F-HXIOQ&s" },
    { id: 11, name: "Gaming", uri: "https://signal.avg.com/hs-fs/hubfs/Blog_Content/Avg/Signal/AVG%20Signal%20Images/how_to_improve_your_gaming_pc_performance_2nd_refresh_signal/How_to_Improve_Your_Gaming_PC_Performance-Hero.jpg?width=1200&name=How_to_Improve_Your_Gaming_PC_Performance-Hero.jpg" },
    { id: 12, name: "Fitness", uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqD3-1ZndN_jgibj3GsRszgGh2bnFWniA8g&s" },
    { id: 13, name: "Movies", uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaoo1scDe5zYs8c-C0ZhmQa3nFLsFgkH8vGw&s" },
    { id: 14, name: "Books", uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvcnNi736PLb_gHhLd2_i1doaM9RB0U_C_Wg&s" },
    { id: 15, name: "Science", uri: "https://static.vecteezy.com/system/resources/thumbnails/022/006/725/small_2x/science-background-illustration-scientific-design-flasks-glass-and-chemistry-physics-elements-generative-ai-photo.jpeg" },
    
  ];
  

  const newItems = [
    { id: 1, name: "Item 1", uri: "https://img.freepik.com/free-vector/special-offer-modern-sale-banner-template_1017-20667.jpg" },
    { id: 2, name: "Item 2", uri: "https://i.pinimg.com/736x/20/2d/6a/202d6aed6af25e2afec26baea4b4cff4.jpg" },
    { id: 3, name: "Item 3", uri: "https://thumbs.dreamstime.com/b/special-offer-price-tag-sign-paper-against-rustic-red-painted-barn-wood-55863934.jpg" },
    { id: 4, name: "Item 4", uri: "https://www.cloudhealthsolution.com/assets/images/offers.jpg" },
  ];

  // State to store the filtered list based on search query
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [filteredItems, setFilteredItems] = useState(newItems);
  const [errorMessage, setErrorMessage] = useState('');
  
  // State to hold the search text input
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);

    // Filter categories based on search text (case-insensitive)
    const filteredCat = categories.filter((category) =>
      category.name.toLowerCase().includes(text.toLowerCase())
    );

    // Filter new items based on search text (case-insensitive)
    const filteredNewItems = newItems.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );

    // Check if no matching results are found
    if (filteredCat.length === 0 && filteredNewItems.length === 0) {
      setErrorMessage('No results found');
    } else {
      setErrorMessage(''); // Clear error message if results are found
    }

    // Update filtered lists
    setFilteredCategories(filteredCat);
    setFilteredItems(filteredNewItems);
  };

  // Scroll functionality for the new items (same as before)
  useEffect(() => {
    const scrollToNextItem = () => {
      if (scrollViewRef2.current) {
        const nextIndex = (currentIndex + 1) % filteredItems.length;
        scrollViewRef2.current.scrollTo({ x: nextIndex * 300, animated: true });
        setCurrentIndex(nextIndex);
      }
    };

    scrollIntervalRef.current = setInterval(scrollToNextItem, 1000);
    return () => clearInterval(scrollIntervalRef.current);
  }, [currentIndex, filteredItems]);

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    setScrollPosition(contentOffset.x);
    const index = Math.floor(contentOffset.x / 300);
    setCurrentIndex(index < filteredItems.length ? index : filteredItems.length - 1);
  };

  const renderDots = () => {
    return (
      <View style={styles.dotsContainer}>
        {filteredItems.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, { opacity: index === currentIndex ? 1 : 0.5 }]}
          />
        ))}
      </View>
    );
  };

  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleSwitch = () => setIsDarkMode((previousState) => !previousState);
  const dynamicStyles = isDarkMode ? styles.dark : styles.light;

  return (
    <View style={[styles.container, dynamicStyles.container]}>
      {/* Top Row with Logo and Profile Picture */}
      <View style={styles.topRow}>
        <Text style={[styles.logo, dynamicStyles.logo]}>MyApp Logo</Text>
        <Avatar
          rounded
          source={{ uri: "https://plus.unsplash.com/premium_photo-1676660359316-273bb172a0df?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fHww" }}
          size="medium"
          onPress={() => navigation.navigate("ProfilePage")}
          containerStyle={styles.profilePic}
        />
      </View>

      {/* Search Bar with Alphabetical Search */}
      <View style={styles.searchRow}>
        <View style={[styles.searchContainer, dynamicStyles.searchContainer]}>
          <Input
            placeholder="Search"
            value={searchText}
            onChangeText={handleSearch}
            containerStyle={[styles.searchBarContainer, dynamicStyles.searchBarContainer]}
            inputContainerStyle={dynamicStyles.searchBar}
            leftIcon={<Ionicons name="search" size={24} color={isDarkMode ? "white" : "gray"} />}
            rightIconContainerStyle={styles.rightIcons}
            rightIcon={
              <>
                <MaterialIcons name="mic" size={24} color={isDarkMode ? "white" : "gray"} />
                <MaterialIcons name="camera-alt" size={24} color={isDarkMode ? "white" : "gray"} />
              </>
            }
          />
        </View>
      

        <View style={styles.toggleContainer}>
          <Switch
            value={isDarkMode}
            onValueChange={toggleSwitch}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
            style={styles.toggleSwitch}
          />
        </View>
      </View>
      {errorMessage ? <Text style={[styles.errorMessage, dynamicStyles.errorMessage]}>{errorMessage}</Text> : null}
      {/* Horizontal Scroll for Filtered Categories */}
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={[styles.horizontalScroll, dynamicStyles.horizontalScroll]}
    >
      {filteredCategories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={[styles.categoryContainer, dynamicStyles.categoryContainer]}
          onPress={() => navigation.navigate(category.page)} 
        >
          <Image
            source={{ uri: category.uri }}
            style={[styles.categoryImage, dynamicStyles.categoryImage]}
          />
          <Text style={[styles.categoryText, dynamicStyles.categoryText]}>
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
      {/* Horizontal Scroll for Filtered New Items */}
      <View style={styles.newItemsContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[styles.horizontalScroll, dynamicStyles.horizontalScroll]}
          ref={scrollViewRef2}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {filteredItems.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={[styles.newItemContainer, dynamicStyles.newItemContainer]}
              onPress={() => console.log(item.name)}
            >
              <Image
                source={{ uri: item.uri }}
                style={[styles.newItemImage, dynamicStyles.newItemImage]}
              />
              <Text style={[styles.newItemText, dynamicStyles.newItemText]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {renderDots()}
      </View>

      {/* <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate('DjPage')}
        >
          <Text style={styles.optionText}>D</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate('PhotographyPage')}
        >
          <Text style={styles.optionText}>P</Text>
        </TouchableOpacity>
      </View> */}

      {/* Bottom Navigation Bar */}
      <View style={[styles.bottomTabContainer, dynamicStyles.bottomTabContainer]}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Icon name="home" size={30} color="#007bff" />
          <Text style={[styles.tabText, dynamicStyles.tabText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ContactUs")}>
          <Icon name="contacts" size={30} color="#007bff" />
          <Text style={[styles.tabText, dynamicStyles.tabText]}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Icon name="shopping-cart" size={30} color="#007bff" />
          <Text style={[styles.tabText, dynamicStyles.tabText]}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("More")}>
          <Icon name="more-horiz" size={30} color="#007bff" />
          <Text style={[styles.tabText, dynamicStyles.tabText]}>More</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ProfilePage")}>
          <Icon name="person" size={30} color="#007bff" />
          <Text style={[styles.tabText, dynamicStyles.tabText]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    padding: 5,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 32,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profilePic: {
    marginRight: 16,
  },
  horizontalScroll: {
    paddingHorizontal: 0,
    maxHeight: 90,
  },
  categoryContainer: {
    alignItems: "center",
    marginRight: 10,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginTop: 5,
  },
  categoryImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  newItemsContainer: {
    marginTop: 20,
  },
  newItemContainer: {
    alignItems: "center",
    marginRight: 10,
    borderRadius: 5,
    
  },
  newItemImage: {
    width: 300,
    height: 200,
    borderRadius: 5,
  },
  newItemText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginTop: 5,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  rightIcons: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 10,
  },
  toggleContainer: {
    marginLeft: 10,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  optionButton: {
    padding: 20,
    borderRadius: 10,
  },
  optionText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  bottomTabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: "#ccc",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#f9f9f9",
  },
  tabText: {
    fontSize: 12,
    color: "#007bff",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#007bff",
    marginHorizontal: 4,
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign:'center',
    fontSize:20,
  },
  light: {
    container: {
      backgroundColor: "#fff",
    },
    logo: {
      color: "#000",
    },
    searchContainer: {
      flex: 1,
    },
    searchBarContainer: {
      backgroundColor: "transparent",
    },
    searchBar: {
      backgroundColor: "#fff",
      borderRadius: 25,
      height: 45,
      borderWidth: 2,
      borderColor: "black",
      marginBottom: 5,
    },
    toggleSwitch: {
      transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
      marginTop: -5,
    },
    categoryContainer: {
      backgroundColor: "#fff", // Background color of categories in light mode
    },
    categoryText: {
      color: "#000",
    },
    newItemContainer: {
      backgroundColor: "#fff", // Background color for new items
    },
    newItemText: {
      color: "#000",
    },
    optionButton: {
      backgroundColor: "#007bff",
    },
    optionText: {
      color: "#fff",
    },
    errorMessage: {
      color: 'red',
      marginBottom: 10,
      fontWeight: 'bold',
    },
  },
  dark: {
    container: {
      backgroundColor: "#333",
    },
    logo: {
      color: "#fff",
    },
    searchContainer: {
      flex: 1,
    },
    searchBarContainer: {
      backgroundColor: "transparent",
    },
    searchBar: {
      backgroundColor: "#444",
      borderRadius: 25,
      height: 45,
      borderWidth: 2,
      borderColor: "black",
      marginBottom: 5,
    },
    toggleSwitch: {
      transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
      marginTop: -10,
    },
    categoryContainer: {
      backgroundColor: "#555", // Dark background for categories
    },
    categoryText: {
      color: "#fff", // Text color in dark mode
    },
    newItemContainer: {
      backgroundColor: "#444", // Dark background for new items
    },
    newItemText: {
      color: "#fff", // Text color for new items
    },
    optionButton: {
      backgroundColor: "#1e90ff",
    },
    optionText: {
      color: "#fff",
    },
    errorMessage: {
      color: 'white',
      marginBottom: 10,
      fontWeight: 'bold',
    },
  },
});
