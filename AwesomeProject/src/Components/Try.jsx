import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Wishlist = () => {
  const [selectedItems, setSelectedItems] = useState({});

  const items = [
    {
      id: "1",
      image: require("../assets/images/bracelet.jpg"),
      title: "Swarna Bracelet Girls",
      price: "₹95000",
    },
    {
      id: "2",
      image: require("../assets/images/gucci.jpg"),
      title: "Gucci Lady Bag",
      price: "₹75000",
    },
    {
      id: "3",
      image: require("../assets/images/corset.jpg"),
      title: "Corset Top Stylish",
      price: "₹2500",
    },
    {
      id: "4",
      image: require("../assets/images/denim.jpg"),
      title: "Denim CordSet",
      price: "₹1200",
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
      {/* Header */}
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
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
            {/* Custom Checkbox */}
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
            onPress={() =>
              alert(
                `Order placed for: ${Object.keys(selectedItems)
                  .filter((id) => selectedItems[id])
                  .map((id) => items.find((item) => item.id === id).title)
                  .join(", ")}`
              )
            }
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
    backgroundColor: "white",
    padding: 10,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  title: {
    color: "purple",
    fontSize: 25,
    textAlign: "center",
  },

  list: {
    paddingBottom: 15,
  },

  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderColor: "white",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },

  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 18,
    marginRight: 10,
  },

  itemDetails: {
    flex: 1,
  },

  itemTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 3,
  },

  itemPrice: {
    fontSize: 12,
    color: "#333",
    marginBottom: 8,
  },

  checkboxContainer: {
    padding: 5,
  },

  orderNowButton: {
    backgroundColor: "green",
    paddingVertical: 12,
    marginTop: 20,
    alignItems: "center",
  },

  orderNow: {
    color: "white",
    fontSize: 14,
  },
});

export default Wishlist;















// import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
// import React from 'react';

// const UCampus = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.location}>Campus Punjab</Text>

//         <View style={styles.balanceContainer}>
//           <Text style={styles.location1}>Chitkara University, Punjab</Text>

//           <View style={styles.uMoneyContainer}>
//             <Text style={styles.uMoneyBox}>uMoney</Text>
//             <Text style={styles.uMoneyBalance}>₹4.46</Text>
//           </View>
//         </View>

//         <View style={styles.searchBarWrapper}>
//           <TextInput style={styles.searchBar} placeholder="Search Food..." placeholderTextColor="#888" />
//         </View>
//       </View>

//       <View style={styles.contentContainer}>
//         <View style={styles.servicesContainer}>
//           <TouchableOpacity style={styles.serviceBox}>
//             <Image source={require("../../assets/images/gym1.jpg")} style={styles.serviceImage} />
//             <Text style={styles.serviceTitle}>Gym</Text>
//             <Text style={styles.serviceSubtitle}>Get Membership</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.serviceBox}>
//             <Image source={require("../../assets/images/gucci.jpg")} style={styles.serviceImage} />
//             <Text style={styles.serviceTitle}>Uniform</Text>
//             <Text style={styles.serviceSubtitle}>Professionalism starts here</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f2f2f2',
//   },
//   header: {
//     backgroundColor: 'red',
//     paddingTop: 18,
//     paddingBottom: 40,
//     paddingHorizontal: 15,
//     borderBottomLeftRadius: 40,
//     borderBottomRightRadius: 40,
//     position: 'relative',
//   },
//   location: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   location1: {
//     color: 'white',
//     fontSize: 15,
//     fontWeight: 'bold',
//   },
//   balanceContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   uMoneyContainer: {
//     borderColor: 'white',
//     borderWidth: 1,
//     borderRadius: 22,
//     paddingHorizontal: 22,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   uMoneyBox: {
//     color: 'white',
//     fontSize: 15,
//   },
//   uMoneyBalance: {
//     color: 'white',
//     fontSize: 17,
//     fontWeight: 'bold',
//   },
//   searchBarWrapper: {
//     position: 'absolute',
//     bottom: -20,
//     left: 20,
//     right: 20,
//     backgroundColor: 'transparent',
//     alignItems: 'center',
//   },
//   searchBar: {
//     backgroundColor: 'white',
//     borderRadius: 25,
//     fontSize: 16,
//     width: '100%',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//   },
//   contentContainer: {
//     flex: 1,
//     backgroundColor: '#f2f2f2',
//     paddingTop: 40,
//   },
//   servicesContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 20,
//   },
//   serviceBox: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 130,
//     height: 150,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   serviceImage: {
//     width: 60,
//     height: 60,
//     marginBottom: 10,
//     borderRadius: 10,
//   },
//   serviceTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   serviceSubtitle: {
//     fontSize: 14,
//     color: 'grey',
//     textAlign: 'center',
//   },
// });

// export default UCampus;