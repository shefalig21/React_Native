import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Wishlist = () => {
  const [selectedItems, setSelectedItems] = useState({});
  const [hoveredItem, setHoveredItem] = useState(null);

  const items=[
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
            <TouchableOpacity
              onPressIn={() => setHoveredItem(item.id)}
              onPressOut={() => setHoveredItem(null)}
            >
              <Image
                source={item.image}
                style={[
                  styles.itemImage,
                  hoveredItem === item.id && styles.itemImageHovered
                ]}
              />
            </TouchableOpacity>
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

  itemImageHovered: {
    width: 70,
    height: 70,
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













































// import React from "react";
// import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
// import Ionicons from "react-native-vector-icons/Ionicons";

// const Wishlist=()=>{
//   const items=[
//     { 
//       id: "1", 
//       image: require("../assets/images/bracelet.jpg"), 
//       title: "Swarna Bracelet Girls", 
//       price: "₹95000" 
//     },
//     { 
//         id: "2", 
//         image: require("../assets/images/gucci.jpg"), 
//         title: "Gucci Lady Bag", 
//         price: "₹75000" 
//     },
//     { 
//         id: "3", 
//         image: require("../assets/images/corset.jpg"), 
//         title: "Corset Top Stylish", 
//         price: "₹2500" },
//     { 
//         id: "4", 
//         image: require("../assets/images/denim.jpg"), 
//         title: "Denim CordSet", 
//         price: "₹1200" 
//     },
//   ];

//   return (
//     <View style={styles.container}>
//       {/* making heeader */}
//       <View style={styles.header}>
//         <Ionicons name="search-outline" size={24} color="black"/>
//         <Text style={styles.title}>My Wishlist</Text>
//         <Ionicons name="menu-outline" size={24} color="black"/>
//       </View>

//       <FlatList
//         data={items}
//         keyExtractor={(item)=>item.id}
//         contentContainerStyle={styles.list}

//         renderItem={({ item })=>(
//           <View style={styles.itemContainer}>

//             <Image source={item.image} style={styles.itemImage} />

//             <View style={styles.itemDetails}>
//               <Text style={styles.itemTitle}>{item.title}</Text>
//               <Text style={styles.itemPrice}>{item.price}</Text>
//             </View>
//           </View>
//         )}

//         ListFooterComponent={
//           <TouchableOpacity style={styles.orderNowButton} onPress={()=>alert(("Order Placed successfully"))}>
//             <Text style={styles.orderNow}>Order Now</Text>
//           </TouchableOpacity>
//         }
//       />
//     </View>
//   );
// };

// const styles=StyleSheet.create({

//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     padding: 10,
//   },

//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginBottom: 15,
//   },

//   title: {
//     color: "purple",
//     fontSize: 25,
//     textAlign: "center",
//   },

//   list: {
//     paddingBottom: 15,
//   },

//   itemContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     borderRadius: 5,
//     borderColor: "white",
//     borderWidth: 1,
//     padding: 10,
//   },

//   itemImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 18,
//     marginRight: 10,
//   },
//   itemDetails: {
//     flex: 1,
//   },

//   itemTitle: {
//     fontSize: 14,
//     fontWeight: "bold",
//     marginBottom: 3,
//   },

//   itemPrice: {
//     fontSize: 12,
//     color: "#333",
//     marginBottom: 8,
//   },

//   orderNowButton: {
//     backgroundColor: "green",
//     paddingVertical: 12,
//     marginTop: 20,
//     alignItems: "center",
//   },

//   orderNow: {
//     color: "white",
//     fontSize: 14,
//   },
// });

// export default Wishlist;