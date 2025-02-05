import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Wish = () => {
  const [selectedItems, setSelectedItems] = useState({});
  const [hoveredItem, setHoveredItem] = useState(null);

  const items = [
    {
      id: "1",
      image: require("../assets/images/bracelet.jpg"),
      title: "Swarna Bracelet Girls",
      brand: "Swarna Jewels",
      price: "₹95,000",
    },
    {
      id: "2",
      image: require("../assets/images/gucci.jpg"),
      title: "Gucci Lady Bag",
      brand: "Gucci",
      price: "₹75,000",
    },
    {
      id: "3",
      image: require("../assets/images/corset.jpg"),
      title: "Corset Top Stylish",
      brand: "Zara",
      price: "₹2,500",
    },
    {
      id: "4",
      image: require("../assets/images/denim.jpg"),
      title: "Denim CordSet",
      brand: "Levi's",
      price: "₹1,200",
    },
  ];

  const toggleCheckbox = (id) => {
    setSelectedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Ionicons name="search-outline" size={24} color="black" />
        <Text style={styles.title}>My Wishlist</Text>
        <Ionicons name="menu-outline" size={24} color="black" />
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity
              onPressIn={() => setHoveredItem(item.id)}
              onPressOut={() => setHoveredItem(null)}
            >
              <Image
                source={item.image}
                style={[
                  styles.itemImage,
                  hoveredItem === item.id && styles.itemImageHovered,
                ]}
              />
            </TouchableOpacity>
            <View style={styles.itemDetails}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemBrand}>{item.brand}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
            

            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => toggleCheckbox(item.id)}
            >
              {selectedItems[item.id] ? (
                <Ionicons name="checkbox" size={24} color="green" />
              ) : (
                <Ionicons name="square-outline" size={24} color="gray" />
              )}
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={
          <TouchableOpacity
            style={styles.orderNowButton}
            onPress={() => alert("Order placed successfully")}
          >
            <Text style={styles.orderNow}>Order Now</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    color: "#4B0082",
    fontSize: 26,
    fontWeight: "bold",
  },
  list: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    shadowColor: "#000",
    shadowRadius: 4,
    elevation: 3,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  itemImageHovered: {
    width: 80,
    height: 80,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  itemBrand: {
    fontSize: 14,
    color: "#555",
    fontStyle: "italic",
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 14,
    color: "#008000",
    fontWeight: "bold",
  },
  checkboxContainer: {
    padding: 5,
  },
  orderNowButton: {
    backgroundColor: "#008000",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 25,
    shadowColor: "#000",
    shadowRadius: 4,
    elevation: 3,
  },
  orderNow: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Wish;




























