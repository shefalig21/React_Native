// import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
// import React from 'react';

// const UCampus = () => {
//     return (
//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <Text style={styles.location}>Campus Punjab</Text>

//                 <View style={styles.balanceContainer}>
//                     <Text style={styles.location1}>Chitkara University, Punjab</Text>

//                     <View style={styles.uMoneyContainer}>
//                         <Text style={styles.uMoneyBox}>uMoney</Text>
//                         <Text style={styles.uMoneyBalance}>₹4.46</Text>
//                     </View>
//                 </View>

//                 <View style={styles.searchBarWrapper}>
//                     <TextInput style={styles.searchBar} placeholder="Search Food..." placeholderTextColor="#888" />
//                 </View>
//             </View>

//             <View style={styles.contentContainer}>
//                 <View style={styles.newly}>
//                     <Text style={styles.newlyService}>Newly Launched</Text>

//                     <View style={styles.newlyContent}>
//                         <View style={styles.newlyTextContainer}>
//                             <Text style={styles.newlyTitle}>Venky's</Text>
//                             <Text style={styles.newlySubtitle}>Venky's - CU Punjab Rajpura</Text>

//                             <TouchableOpacity style={styles.fullMenuButton}>
//                                 <Text style={styles.fullMenuText}>Full Menu</Text>
//                             </TouchableOpacity>
//                         </View>
//                         <Image source={require("../../assets/images/venky.jpg")} style={styles.venkyImage} />
//                     </View>

//                     {/* Horizontal ScrollView with Text Overlay on Images */}
//                     <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.foodScroll}>
//                         <View style={styles.foodItem}>
//                             <Image source={require("../../assets/images/non-vegBurger.jpg")} style={styles.foodScrollImage} />
//                             <Text style={styles.foodLabel}>Non-Veg Burger</Text>
//                         </View>
//                         <View style={styles.foodItem}>
//                             <Image source={require("../../assets/images/vegBurger1.png")} style={styles.foodScrollImage} />
//                             <Text style={styles.foodLabel}>Veg Burger</Text>
//                         </View>
//                         <View style={styles.foodItem}>
//                             <Image source={require("../../assets/images/non-vegWrap.jpg")} style={styles.foodScrollImage} />
//                             <Text style={styles.foodLabel}>Non-Veg Wrap</Text>
//                         </View>
//                         <View style={styles.foodItem}>
//                             <Image source={require("../../assets/images/vegWrap.jpg")} style={styles.foodScrollImage} />
//                             <Text style={styles.foodLabel}>Veg Wrap</Text>
//                         </View>
//                         <View style={styles.foodItem}>
//                             <Image source={require("../../assets/images/HeatServe.jpg")} style={styles.foodScrollImage} />
//                             <Text style={styles.foodLabel}>Heat Serve</Text>
//                         </View>
//                         <View style={styles.foodItem}>
//                             <Image source={require("../../assets/images/fryServe.jpg")} style={styles.foodScrollImage} />
//                             <Text style={styles.foodLabel}>Fry Serve</Text>
//                         </View>
//                         <View style={styles.foodItem}>
//                             <Image source={require("../../assets/images/Desserts.jpg")} style={styles.foodScrollImage} />
//                             <Text style={styles.foodLabel}>Desserts</Text>
//                         </View>
//                         <View style={styles.foodItem}>
//                             <Image source={require("../../assets/images/nonVegLite.jpg")} style={styles.foodScrollImage} />
//                             <Text style={styles.foodLabel}>Non-Veg Lite</Text>
//                         </View>
//                         <View style={styles.foodItem}>
//                             <Image source={require("../../assets/images/vegLiteBite.jpg")} style={styles.foodScrollImage} />
//                             <Text style={styles.foodLabel}>Veg Lite Bite</Text>
//                         </View>
//                         <View style={styles.foodItem}>
//                             <Image source={require("../../assets/images/Beverages.jpg")} style={styles.foodScrollImage} />
//                             <Text style={styles.foodLabel}>Beverages</Text>
//                         </View>
//                         <View style={styles.foodItem}>
//                             <Image source={require("../../assets/images/addOns.jpg")} style={styles.foodScrollImage} />
//                             <Text style={styles.foodLabel}>Add Ons</Text>
//                         </View>
//                     </ScrollView>
//                 </View>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f2f2f2',
//     },
//     header: {
//         backgroundColor: 'red',
//         paddingTop: 18,
//         paddingBottom: 40,
//         paddingHorizontal: 15,
//         borderBottomLeftRadius: 40,
//         borderBottomRightRadius: 40,
//         position: 'relative',
//     },
//     location: {
//         color: 'white',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     balanceContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },
//     newly: {
//         backgroundColor: 'white',
//         borderRadius: 10,
//         margin: 15,
//         paddingBottom: 15,
//     },
//     newlyService: {
//         marginTop: 10,
//         color: 'green',
//         fontWeight: 'bold',
//         backgroundColor: 'lightgreen',
//         borderRadius: 10,
//         padding: 5,
//         width: 130,
//         margin: 8,
//     },
//     foodScroll: {
//         marginTop: 10,
//         paddingBottom: 10,
//     },
//     foodItem: {
//         alignItems: "center",
//         marginHorizontal: 10,
//     },
//     foodLabel: {
//         position: "absolute",
//         bottom: 10,
//         left: 0,
//         right: 0,
//         textAlign: "center",
//         fontSize: 14,
//         fontWeight: "bold",
//         color: "white",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         paddingVertical: 3,
//         borderBottomLeftRadius: 10,
//         borderBottomRightRadius: 10,
//     },
//     foodScrollImage: {
//         height: 120,
//         width: 140,
//         borderRadius: 20,
//         backgroundColor: "white",
//         elevation: 5,
//         shadowColor: "red",
//         shadowOffset: { width: 0, height: 3 },
//         shadowOpacity: 0.5,
//         shadowRadius: 5,
//     },
// });

// export default UCampus;















// import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
// import React from 'react';

// const foodItems = [
//     { name: "Non-Veg Burger", image: require("../../assets/images/non-vegBurger.jpg") },
//     { name: "Veg Burger", image: require("../../assets/images/vegBurger1.png") },
//     { name: "Non-Veg Wrap", image: require("../../assets/images/non-vegWrap.jpg") },
//     { name: "Veg Wrap", image: require("../../assets/images/vegWrap.jpg") },
//     { name: "Heat Serve", image: require("../../assets/images/HeatServe.jpg") },
//     { name: "Fry Serve", image: require("../../assets/images/fryServe.jpg") },
//     { name: "Desserts", image: require("../../assets/images/Desserts.jpg") },
//     { name: "Non-Veg Lite", image: require("../../assets/images/nonVegLite.jpg") },
//     { name: "Veg Lite Bite", image: require("../../assets/images/vegLiteBite.jpg") },
//     { name: "Beverages", image: require("../../assets/images/Beverages.jpg") },
//     { name: "Add Ons", image: require("../../assets/images/addOns.jpg") }
// ];

// const UCampus = () => {
//     return (
//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <Text style={styles.location}>Campus Punjab</Text>

//                 <View style={styles.balanceContainer}>
//                     <Text style={styles.location1}>Chitkara University, Punjab</Text>

//                     <View style={styles.uMoneyContainer}>
//                         <Text style={styles.uMoneyBox}>uMoney</Text>
//                         <Text style={styles.uMoneyBalance}>₹4.46</Text>
//                     </View>
//                 </View>

//                 <View style={styles.searchBarWrapper}>
//                     <TextInput style={styles.searchBar} placeholder="Search Food..." placeholderTextColor="#888" />
//                 </View>
//             </View>

//             <View style={styles.contentContainer}>
//                 <View style={styles.newly}>
//                     <Text style={styles.newlyService}>Newly Launched</Text>

//                     <View style={styles.newlyContent}>
//                         <View style={styles.newlyTextContainer}>
//                             <Text style={styles.newlyTitle}>Venky's</Text>
//                             <Text style={styles.newlySubtitle}>Venky's - CU Punjab Rajpura</Text>

//                             <TouchableOpacity style={styles.fullMenuButton}>
//                                 <Text style={styles.fullMenuText}>Full Menu</Text>
//                             </TouchableOpacity>
//                         </View>
//                         <Image source={require("../../assets/images/venky.jpg")} style={styles.venkyImage} />
//                     </View>

//                     
//                     <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.foodScroll}>
//                         {foodItems.map((item, index) => (
//                             <View key={index} style={styles.foodItem}>
//                                 <Text style={styles.foodLabel}>{item.name}</Text>
//                                 <Image source={item.image} style={styles.foodScrollImage} />
//                             </View>
//                         ))}
//                     </ScrollView>
//                 </View>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f2f2f2',
//     },
//     header: {
//         backgroundColor: 'red',
//         paddingTop: 18,
//         paddingBottom: 40,
//         paddingHorizontal: 15,
//         borderBottomLeftRadius: 40,
//         borderBottomRightRadius: 40,
//         position: 'relative',
//     },
//     location: {
//         color: 'white',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     location1: {
//         color: 'white',
//         fontSize: 15,
//         fontWeight: 'bold',
//     },
//     balanceContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },
//     uMoneyContainer: {
//         borderColor: 'white',
//         borderWidth: 1,
//         borderRadius: 22,
//         paddingHorizontal: 22,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     uMoneyBox: {
//         color: 'white',
//         fontSize: 15,
//     },
//     uMoneyBalance: {
//         color: 'white',
//         fontSize: 17,
//         fontWeight: 'bold',
//     },
//     searchBarWrapper: {
//         position: 'absolute',
//         bottom: -20,
//         left: 20,
//         right: 20,
//         alignItems: 'center',
//     },
//     searchBar: {
//         backgroundColor: 'white',
//         borderRadius: 25,
//         fontSize: 16,
//         width: '100%',
//         shadowColor: 'red',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.5,
//         shadowRadius: 4,
//         elevation: 5,
//         paddingVertical: 10,
//         paddingHorizontal: 15,
//     },
//     contentContainer: {
//         flex: 1,
//         paddingTop: 30,
//     },
//     newly: {
//         backgroundColor: 'white',
//         borderRadius: 10,
//         margin: 15,
//         paddingBottom: 15,
//     },
//     newlyService: {
//         marginTop: 10,
//         color: 'green',
//         fontWeight: 'bold',
//         backgroundColor: 'lightgreen',
//         borderRadius: 10,
//         padding: 5,
//         width: 130,
//         margin: 8,
//     },
//     newlyContent: {
//         flexDirection: 'row',
//         justifyContent: "space-between",
//         alignItems: 'center',
//         padding: 10
//     },
//     newlyTextContainer: {
//         flex: 1,
//         justifyContent: 'center',
//     },
//     newlyTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     newlySubtitle: {
//         fontSize: 14,
//         color: 'grey',
//         marginTop: 2,
//     },
//     fullMenuButton: {
//         backgroundColor: 'red',
//         borderRadius: 10,
//         paddingHorizontal: 15,
//         paddingVertical: 5,
//         marginTop: 5,
//         alignSelf: 'flex-start',
//     },
//     fullMenuText: {
//         color: 'white',
//         fontWeight: 'bold',
//     },
//     venkyImage: {
//         width: 100,
//         height: 80,
//         borderRadius: 10,
//         marginLeft: 15,
//     },
//     foodScroll: {
//         marginTop: 10,
//         paddingBottom: 10,
//     },
//     foodItem: {
//         alignItems: "center",
//         marginHorizontal: 10,
//     },
//     foodLabel: {
//         fontSize: 14,
//         fontWeight: "bold",
//         color: "black",
//         marginBottom: 5,
//     },
//     foodScrollImage: {
//         height: 110,
//         width: 130,
//         borderRadius: 20,
//         backgroundColor: "white",
//         elevation: 5,
//         shadowColor: "red",
//         shadowOffset: { width: 0, height: 3 },
//         shadowOpacity: 0.5,
//         shadowRadius: 5,
//     },
// });

// export default UCampus;
























// import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
// import React from 'react';

// const UCampus = () => {
//     return (
//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <Text style={styles.location}>Campus Punjab</Text>

//                 <View style={styles.balanceContainer}>
//                     <Text style={styles.location1}>Chitkara University, Punjab</Text>

//                     <View style={styles.uMoneyContainer}>
//                         <Text style={styles.uMoneyBox}>uMoney</Text>
//                         <Text style={styles.uMoneyBalance}>₹4.46</Text>
//                     </View>
//                 </View>

//                 <View style={styles.searchBarWrapper}>
//                     <TextInput style={styles.searchBar} placeholder="Search Food..." placeholderTextColor="#888" />
//                 </View>
//             </View>

//             <View style={styles.contentContainer}>
//                 <View style={styles.servicesContainer}>
//                     <TouchableOpacity style={styles.serviceBox}>
//                         <View style={styles.serviceRow}>
//                             <View style={styles.textContainer}>
//                                 <Text style={styles.serviceTitle}>Gym</Text>
//                                 <Text style={styles.serviceSubtitle}>Get Membership</Text>
//                             </View>
//                             <Image source={require("../../assets/images/gym1.jpg")} style={styles.serviceImage} />
//                         </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity style={styles.serviceBox}>
//                         <View style={styles.serviceRow}>
//                             <View style={styles.textContainer}>
//                                 <Text style={styles.serviceTitle}>Uniform</Text>
//                                 <Text style={styles.serviceSubtitle}>Professionalism starts here</Text>
//                             </View>
//                             <Image source={require("../../assets/images/uniform.png")} style={styles.serviceImage} />
//                         </View>
//                     </TouchableOpacity>
//                 </View>

//                 <View style={styles.newly}>
//                     <View style={styles.newlyLaunchedBox}>
//                         <Text style={styles.newlyService}>Newly Launched</Text>
//                     </View>

//                     <View style={styles.newlyContent}>
//                         <View style={styles.newlyTextContainer}>
//                             <Text style={styles.newlyTitle}>Venky's</Text>
//                             <Text style={styles.newlySubtitle}>Venky's - CU Punjab Rajpura</Text>

//                             <TouchableOpacity style={styles.fullMenuButton}>
//                                 <Text style={styles.fullMenuText}>Full Menu</Text>
//                             </TouchableOpacity>
//                         </View>
//                         <Image source={require("../../assets/images/venky.jpg")} style={styles.venkyImage} />
//                     </View>

//                     {/* Horizontal ScrollView for Food Items */}
//                     <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.foodScroll}>
//                         <Image source={require("../../assets/images/non-vegBurger.jpg")} style={styles.foodScrollImage} />
//                         <Image source={require("../../assets/images/vegBurger1.png")} style={styles.foodScrollImage} />
//                         <Image source={require("../../assets/images/non-vegWrap.jpg")} style={styles.foodScrollImage} />
//                         <Image source={require("../../assets/images/vegWrap.jpg")} style={styles.foodScrollImage} />
//                         <Image source={require("../../assets/images/HeatServe.jpg")} style={styles.foodScrollImage} />
//                         <Image source={require("../../assets/images/fryServe.jpg")} style={styles.foodScrollImage} />
//                         <Image source={require("../../assets/images/Desserts.jpg")} style={styles.foodScrollImage} />
//                         <Image source={require("../../assets/images/nonVegLite.jpg")} style={styles.foodScrollImage} />
//                         <Image source={require("../../assets/images/vegLiteBite.jpg")} style={styles.foodScrollImage} />
//                         <Image source={require("../../assets/images/Beverages.jpg")} style={styles.foodScrollImage} />
//                         <Image source={require("../../assets/images/addOns.jpg")} style={styles.foodScrollImage} />
//                     </ScrollView>
//                 </View>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f2f2f2',
//     },
//     header: {
//         backgroundColor: 'red',
//         paddingTop: 18,
//         paddingBottom: 40,
//         paddingHorizontal: 15,
//         borderBottomLeftRadius: 40,
//         borderBottomRightRadius: 40,
//         position: 'relative',
//     },
//     location: {
//         color: 'white',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     location1: {
//         color: 'white',
//         fontSize: 15,
//         fontWeight: 'bold',
//     },
//     balanceContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },
//     uMoneyContainer: {
//         borderColor: 'white',
//         borderWidth: 1,
//         borderRadius: 22,
//         paddingHorizontal: 22,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     uMoneyBox: {
//         color: 'white',
//         fontSize: 15,
//     },
//     uMoneyBalance: {
//         color: 'white',
//         fontSize: 17,
//         fontWeight: 'bold',
//     },
//     searchBarWrapper: {
//         position: 'absolute',
//         bottom: -20,
//         left: 20,
//         right: 20,
//         alignItems: 'center',
//     },
//     searchBar: {
//         backgroundColor: 'white',
//         borderRadius: 25,
//         fontSize: 16,
//         width: '100%',
//         shadowColor: 'red',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.5,
//         shadowRadius: 4,
//         elevation: 5,
//         paddingVertical: 10,
//         paddingHorizontal: 15,
//     },
//     contentContainer: {
//         flex: 1,
//         paddingTop: 30,
//     },
//     newly: {
//         backgroundColor: 'white',
//         borderRadius: 10,
//         margin: 15,
//         paddingBottom: 15,
//     },
//     newlyService: {
//         marginTop: 10,
//         color: 'green',
//         fontWeight: 'bold',
//         backgroundColor: 'lightgreen',
//         borderRadius: 10,
//         padding: 5,
//         width: 130,
//         margin: 8,
//     },
//     foodScroll: {
//         marginTop: 10,
//         paddingBottom: 10,
//     },
//     foodScrollImage: {
//         height: 110,
//         width: 130,
//         borderRadius: 20,
//         marginLeft: 10,
//         backgroundColor: "white",
//         elevation: 5,
//         shadowColor: "red",
//         shadowOffset: { width: 0, height: 3 },
//         shadowOpacity: 0.5,
//         shadowRadius: 5,
//     },
// });

// export default UCampus;
















































// import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
// import React from 'react';

// const UCampus = () => {
//     return (
//         <View style={styles.container}>

//             <View style={styles.header}>
//                 <Text style={styles.location}>Campus Punjab</Text>

//                 <View style={styles.balanceContainer}>
//                     <Text style={styles.location1}>Chitkara University, Punjab</Text>

//                     <View style={styles.uMoneyContainer}>
//                         <Text style={styles.uMoneyBox}>uMoney</Text>
//                         <Text style={styles.uMoneyBalance}>₹4.46</Text>
//                     </View>
//                 </View>

//                 <View style={styles.searchBarWrapper}>
//                     <TextInput style={styles.searchBar} placeholder="Search Food..." placeholderTextColor="#888" />
//                 </View>
//             </View>


//             <View style={styles.contentContainer}>
//                 <View style={styles.servicesContainer}>

//                     <TouchableOpacity style={styles.serviceBox}>
//                         <View style={styles.serviceRow}>
//                             <View style={styles.textContainer}>
//                                 <Text style={styles.serviceTitle}>Gym</Text>
//                                 <Text style={styles.serviceSubtitle}>Get Membership</Text>
//                             </View>
//                             <Image source={require("../../assets/images/gym1.jpg")} style={styles.serviceImage} />
//                         </View>
//                     </TouchableOpacity>


//                     <TouchableOpacity style={styles.serviceBox}>
//                         <View style={styles.serviceRow}>
//                             <View style={styles.textContainer}>
//                                 <Text style={styles.serviceTitle}>Uniform</Text>
//                                 <Text style={styles.serviceSubtitle}>Professionalism starts here</Text>
//                             </View>
//                             <Image source={require("../../assets/images/gucci.jpg")} style={styles.serviceImage} />
//                         </View>
//                     </TouchableOpacity>
//                 </View>

//                 <View style={styles.newly}>
//                     <View style={styles.newlyLaunchedBox}>
//                         <Text style={styles.newlyService}>Newly Launched</Text>
//                     </View>

//                     <View style={styles.newlyContent}>
//                         <View style={styles.newlyTextContainer}>

//                             <Text style={styles.newlyTitle}>Venky's</Text>
//                             <Text style={styles.newlySubtitle}>Venky's - CU Punjab Rajpura</Text>

//                             <TouchableOpacity
//                                 style={styles.fullMenuButton}>
//                                 <Text style={styles.fullMenuText}>Full Menu</Text>
//                             </TouchableOpacity>
//                         </View>
//                         <Image source={require("../../assets/images/venky.jpg")} style={styles.venkyImage} />
//                     </View>

//                 </View>


//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f2f2f2',
//     },
//     header: {
//         backgroundColor: 'red',
//         paddingTop: 18,
//         paddingBottom: 40,
//         paddingHorizontal: 15,
//         borderBottomLeftRadius: 40,
//         borderBottomRightRadius: 40,
//         position: 'relative',
//     },
//     location: {
//         color: 'white',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     location1: {
//         color: 'white',
//         fontSize: 15,
//         fontWeight: 'bold',
//     },
//     balanceContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },
//     uMoneyContainer: {
//         borderColor: 'white',
//         borderWidth: 1,
//         borderRadius: 22,
//         paddingHorizontal: 22,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     uMoneyBox: {
//         color: 'white',
//         fontSize: 15,
//     },
//     uMoneyBalance: {
//         color: 'white',
//         fontSize: 17,
//         fontWeight: 'bold',
//     },
//     searchBarWrapper: {
//         position: 'absolute',
//         bottom: -20,
//         left: 20,
//         right: 20,
//         backgroundColor: 'transparent',
//         alignItems: 'center',
//     },
//     searchBar: {
//         backgroundColor: 'white',
//         borderRadius: 25,
//         fontSize: 16,
//         width: '100%',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 3,
//         elevation: 3,
//         paddingVertical: 10,
//         paddingHorizontal: 15,
//     },
//     contentContainer: {
//         flex: 1,
//         backgroundColor: '#f2f2f2',
//         paddingTop: 30,
//     },
//     servicesContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         marginTop: 5,
//         paddingHorizontal: 12,
//     },
//     serviceBox: {
//         backgroundColor: 'white',
//         borderRadius: 20,
//         padding: 15,
//         width: '48%',
//         height: 100,
//         shadowColor: '#000',
//         shadowOpacity: 0.1,
//         shadowRadius: 4,
//         elevation: 3,
//     },
//     serviceRow: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//     },
//     textContainer: {
//         flex: 1,
//     },
//     serviceImage: {
//         width: 65,
//         height: 60,
//         borderRadius: 10,
//     },
//     serviceTitle: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: 'black',
//     },
//     serviceSubtitle: {
//         fontSize: 13,
//         color: 'grey',
//         marginTop: 3,
//     },
//     newly: {
//         backgroundColor:'white',
//         borderRadius:10,
//         margin:15,

//     },
//     newlyLaunchedBox: {
//         marginBottom: 8,
//     },
//     newlyService: {
//         color:'green',
//         fontWeight:'bold',
//         backgroundColor:'lightgreen',
//         borderRadius:10,
//         borderColor:'green',
//         borderWidth:1,
//         padding:5,
//         paddingHorizontal:5,
//         width:130,
      

//     },
//     newlyContent:{

//         flexDirection:'row',
//         justifyContent:"space-between",
//         alignItems:'center',
//     },
//     newlyTextContainer:{
//         flex:1,
//         justifyContent: 'center',
//     },
//     newlyTitle:{
//         fontSize:18,
//         fontWeight:'bold',
//     },
//     newlySubtitle:{
//         fontSize:14,
//         color:'grey',
//         marginTop: 2,
//     },
//     fullMenuButton:{
//         backgroundColor:'red',
//         borderRadius:10,
//         paddingHorizontal:15,
//         paddingVertical:5,
//         marginTop:5,
//         alignSelf: 'flex-start',
//     },
//     fullMenuText:{
//         color:'white',
//         fontWeight:'bold',

//     },
//     venkyImage: {
//         width: 100,
//         height: 80,
//         borderRadius: 10,
//         marginLeft: 15,
//     },
// });

// export default UCampus;






