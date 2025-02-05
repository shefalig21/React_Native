import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UCampus= () => {

    const [selectedTab, setSelectedTab] = useState(null);

    return (

        <ScrollView>
            <View style={styles.container}>

                <LinearGradient colors={['#f80000', '#f83e3e', '#f87c7c']} style={styles.linearGradient}>
                    <View style={styles.headerContainer}>
                        <View style={styles.locationWrapper}>
                            <Image source={require("../../assets/images/location.png")} style={styles.locationIcon} />
                            <Text style={styles.locationText}>Campus Punjab</Text>
                            <Image source={require("../../assets/images/chevronDown.png")} style={styles.chevronIcon} />
                        </View>
                        <Text style={styles.universityText}>Chitkara University, Punjab</Text>

                        <View style={styles.uMoneyContainer}>
                            <Image source={require("../../assets/images/IndianRupee.png")} style={styles.rupeeIcon} />
                            <View style={styles.uMoneyTextContainer}>
                                <Text style={styles.uMoneyText}>uMoney</Text>
                                <Text style={styles.uMoneyBalance}>₹4.46</Text>
                            </View>
                        </View>
                    </View>
                </LinearGradient>

                <View style={styles.searchBarWrapper}>
                    <TextInput style={styles.searchBar} placeholder="Search Food..." placeholderTextColor="#888" />
                </View>

                <View style={styles.contentContainer}>

                    <View style={styles.servicesContainer}>
                        <TouchableOpacity style={styles.serviceBox}>
                            <View style={styles.serviceRow}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.serviceTitle}>Gym</Text>
                                    <Text style={styles.serviceSubtitle}>Get Membership</Text>
                                </View>
                                <Image source={require("../../assets/images/gym1.jpg")} style={styles.serviceImage} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.serviceBox}>
                            <View style={styles.serviceRow}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.serviceTitle}>Uniform</Text>
                                    <Text style={styles.serviceSubtitle}>Professionalism starts here</Text>
                                </View>
                                <Image source={require("../../assets/images/uniform.png")} style={styles.serviceImage} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.newly}>
                        <Text style={styles.newlyService}>Newly Launched</Text>
                        <View style={styles.newlyContent}>
                            <View style={styles.newlyTextContainer}>
                                <Text style={styles.newlyTitle}>Venky's</Text>
                                <Text style={styles.newlySubtitle}>Venky's - CU Punjab Rajpura</Text>
                                <TouchableOpacity style={styles.fullMenuButton}
                                    onPress={() => alert("You can view the full menu of Venky's!")}
                                >
                                    <Text style={styles.fullMenuText}>Full Menu</Text>
                                </TouchableOpacity>
                            </View>
                            <Image source={require("../../assets/images/venky.jpg")} style={styles.venkyImage} />
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.foodScroll}>
                            {[
                                { name: 'Non-Veg Burger', image: require("../../assets/images/non-vegBurger.jpg") },
                                { name: 'Veg Burger', image: require("../../assets/images/vegBurger1.png") },
                                { name: 'Non-Veg Wrap', image: require("../../assets/images/non-vegWrap.jpg") },
                                { name: 'Veg Wrap', image: require("../../assets/images/vegWrap.jpg") },
                                { name: 'Heat Serve', image: require("../../assets/images/HeatServe.jpg") },
                                { name: 'Fry Serve', image: require("../../assets/images/fryServe.jpg") },
                                { name: 'Desserts', image: require("../../assets/images/Desserts.jpg") },
                            ].map((item, index) => (
                                <View key={index} style={styles.foodItem}>
                                    <Image source={item.image} style={styles.foodScrollImage} />
                                    <Text style={styles.foodLabel}>{item.name}</Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>

                    <View style={styles.collectionContainer}>
                        <Text style={styles.CollectionTitle}>Collections __________________________________</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.collectionScroll}>
                            <View style={styles.collectionWrapper}>
                                <View style={styles.row}>
                                    {[
                                        { name: 'Beverages', image: require("../../assets/images/beverages2.jpg") },
                                        { name: 'Coffee and Chai', image: require("../../assets/images/ChaiCoffee.jpg") },
                                        { name: 'Snacks', image: require("../../assets/images/snacks.jpg") },
                                        { name: 'Maggie', image: require("../../assets/images/maggie.jpg") },
                                        { name: 'Breakfast', image: require("../../assets/images/breakfast.jpg") },
                                        { name: 'Sandwich', image: require("../../assets/images/sandwhich.jpg") },
                                    ].map((item, index) => (
                                        <View key={index} style={styles.collectionItem}>
                                            <Image source={item.image} style={styles.collectionImage} />
                                            <Text style={styles.collectionText}>{item.name}</Text>
                                        </View>
                                    ))}
                                </View>

                                <View style={styles.row}>
                                    {[
                                        { name: 'Cake & Desserts', image: require("../../assets/images/cake.jpg") },
                                        { name: 'North Indian', image: require("../../assets/images/north.jpg") },
                                        { name: 'Ice Creams', image: require("../../assets/images/iceCream.jpg") },
                                        { name: 'Pizza & Burgers', image: require("../../assets/images/pizza.jpg") },
                                        { name: 'Chinese', image: require("../../assets/images/chinese.jpg") },
                                        { name: 'Salad', image: require("../../assets/images/salad2.jpg") },
                                    ].map((item, index) => (
                                        <View key={index} style={styles.collectionItem}>
                                            <Image source={item.image} style={styles.collectionImage} />
                                            <Text style={styles.collectionText}>{item.name}</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </ScrollView>
                    </View>


                    <View style={styles.outletContainer}>
                        <Text style={styles.outletText}>Trending Outlets _____________________________</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.outletscroll}>
                            {
                                [
                                    { title: "Grab N Go", image: require("../../assets/images/juicebar.jpg") },
                                    { title: "Panjaab 13", image: require("../../assets/images/punjab13.jpg") },
                                    { title: "Sip stop", image: require("../../assets/images/sipstop.jpg") },
                                    { title: "Venky", image: require("../../assets/images/venky11.jpg") },
                                    { title: "Baskin Robbin", image: require("../../assets/images/baskinRobin.png") },
                                ].map((store, index) => {
                                    const [isHovered, setIsHovered] = useState(false);

                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            style={styles.outletItem}
                                            onPressIn={() => setIsHovered(true)}
                                            onPressOut={() => setIsHovered(false)}
                                        >
                                            <Image
                                                source={store.image}
                                                style={[styles.outletImage, isHovered && styles.hoveredImage]}
                                            />
                                            <Text style={styles.outletText}>{store.title}</Text>
                                        </TouchableOpacity>
                                    );
                                })
                            }
                        </ScrollView>
                    </View>

                     {/* // <View key={index} style={styles.outletItem}>
                                    //     <Image source={store.image} style={styles.outletImage} />
                                    //     <Text style={styles.outletText}>{store.title}</Text>
                                    // </View> */}



                    {/* <View style={styles.exploreContainer}>
                        <Text style={styles.exploreTitle}>Explore All Outlets</Text>

                        {[
                            { title: "Barista", image: require("../../assets/images/barista.png"), rating: 4.8, orders: 3300 },
                            { title: "Panjaab 13", image: require("../../assets/images/punjab13jpg"), rating: 3.5, orders: 540 },
                            { title: "Baskin Robbin", image: require("../../assets/images/baskinRobin.png"), rating: 4.1, orders: 1200 },
                            { title: "Sip stop", image: require("../../assets/images/sipstop.jpg"), rating: 3.2, orders: 960 },
                            { title: "SubWay", image: require("../../assets/images/subway.jpg"), rating: 3.8, orders: 1050 },
                            { title: "Chai Nagri", image: require("../../assets/images/chaiNagri.jpg"), rating: 4.6, orders: 350 },
                            { title: "La Pinoz's", image: require("../../assets/images/laPinoz.png"), rating: 4.3, orders: 780 },
                            { title: "Grab N Go", image: require("../../assets/images/juicebar.jpg"), rating: 4.2, orders: 1500 },
                        ].map((outlet, index) => (
                            <View key={index} style={styles.exploreItem}>

                                <Image source={outlet.image} style={styles.exploreImage} />

                                <View style={styles.infoContainer}>
                                    <Text style={styles.exploreText}>{outlet.title}</Text>

                                    <View style={styles.ratingContainer}>
                                        <Image source={require("../../assets/icons/star.png")} style={styles.icon} />
                                        <Text style={styles.ratingText}>{outlet.rating}</Text>

                                        <Image source={require("../../assets/icons/increase.png")} style={styles.icon} />
                                        <Text style={styles.ordersText}>{outlet.orders} people ordered from here</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View> */}




                    {/* <View style={styles.tabContainer}>

                        <TouchableOpacity style={styles.tabButton}>
                            <Ionicons name="storefront-outline" size={24} color="gray" />
                            <Text style={styles.tabText}>Outlets</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.tabButton}>
                            <Ionicons name="receipt-outline" size={24} color="gray" />
                            <Text style={styles.tabText}>Order</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.tabButton}>
                            <Ionicons name="wallet-outline" size={24} color="gray" />
                            <Text style={styles.tabText}>UMoney</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.tabButton}>
                            <Ionicons name="person-outline" size={24} color="gray" />
                            <Text style={styles.tabText}>Profile</Text>
                        </TouchableOpacity>
                    </View> */}

                    <View style={styles.tabContainer}>
                        <TouchableOpacity style={styles.tabButton} onPress={() => setSelectedTab('Outlets')}>
                            <Ionicons name="storefront-outline" size={24} color={selectedTab === 'Outlets' ? 'red' : 'gray'} />
                            <Text style={[styles.tabText, { color: selectedTab === 'Outlets' ? 'red' : 'gray' }]}>Outlets</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.tabButton} onPress={() => setSelectedTab('Order')}>
                            <Ionicons name="receipt-outline" size={24} color={selectedTab === 'Order' ? 'green' : 'gray'} />
                            <Text style={[styles.tabText, { color: selectedTab === 'Order' ? 'green' : 'gray' }]}>Order</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.tabButton} onPress={() => setSelectedTab('UMoney')}>
                            <Ionicons name="wallet-outline" size={24} color={selectedTab === 'UMoney' ? 'blue' : 'gray'} />
                            <Text style={[styles.tabText, { color: selectedTab === 'UMoney' ? 'blue' : 'gray' }]}>UMoney</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.tabButton} onPress={() => setSelectedTab('Profile')}>
                            <Ionicons name="person-outline" size={24} color={selectedTab === 'Profile' ? 'orange' : 'gray'} />
                            <Text style={[styles.tabText, { color: selectedTab === 'Profile' ? 'orange' : 'gray' }]}>Profile</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        </ScrollView>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey'
    },
    linearGradient:
    {
        paddingTop: 20,
        paddingBottom: 40,
        paddingHorizontal: 15
    },
    headerContainer: {
        alignItems: 'flex-start',
        paddingHorizontal: 10
    },
    locationWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    locationIcon: {
        width: 17,
        height: 15,
        tintColor: 'white',
        marginRight: 5
    },
    locationText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    chevronIcon: {
        width: 12,
        height: 12,
        tintColor: 'white',
        marginLeft: 5
    },

    universityText: {
        color: 'white',
        fontSize: 14,
        marginTop: 3,
        fontWeight: 'bold',
    },
    uMoneyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        right: 15,
        top: 10,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 22,
        paddingHorizontal: 23,
        paddingVertical: 3,
    },
    rupeeIcon: {
        width: 20,
        height: 20,
        tintColor: 'white',
        marginRight: 8,
    },
    uMoneyTextContainer: {
        alignItems: 'center',
    },
    uMoneyText: {
        color: 'white',
        fontSize: 14,
    },
    uMoneyBalance: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    searchBarWrapper: {
        position: 'absolute',
        top: 90,
        left: 15,
        right: 15,
        zIndex: 10,
    },
    searchBar: {
        backgroundColor: 'white',
        borderRadius: 25,
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingTop: 20,
    },
    servicesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 22,
        paddingHorizontal: 12,
    },
    serviceBox: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
        width: '48%',
        height: 100,
        shadowColor: 'red',
        elevation: 4,
    },
    serviceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textContainer: {
        flex: 1,
    },
    serviceImage: {
        width: 65,
        height: 60,
        borderRadius: 10,
    },
    serviceTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    serviceSubtitle: {
        fontSize: 13,
        color: 'grey',
        marginTop: 3,
    },
    newly: {
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: 'green'
    },
    newlyService: {
        marginTop: 10,
        color: 'green',
        fontWeight: 'bold',
        backgroundColor: '#E1FFE1',
        borderRadius: 15,
        borderColor: 'green',
        borderWidth: 1,
        padding: 7,
        width: 140,
        margin: 3,
    },
    newlyContent: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    newlyTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    newlyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    newlySubtitle: {
        fontSize: 14,
        color: 'grey',
        marginTop: 2,
    },
    fullMenuButton: {
        backgroundColor: '#C62828',
        borderRadius: 12,
        paddingHorizontal: 18,
        paddingVertical: 7,
        marginTop: 5,
        alignSelf: 'flex-start',
    },
    fullMenuText: {
        color: 'white',
        fontWeight: 'bold',
    },
    // venkyImage: {
    //     width: 100,
    //     height: 80,
    //     borderRadius: 10,
    //     marginLeft: 15,
    // },
    venkyImage: {
        width: 100,
        height: 80,
        borderRadius: 10,
        marginLeft: 10,
        marginTop: -25,
        alignSelf: 'flex-end',
    },
    foodScroll: {
        marginTop: 20,
    },
    foodScrollImage: {
        height: 100,
        width: 120,
        borderRadius: 15,
        marginLeft: 10,
    },
    foodItem: {
        alignItems: 'center',
        marginRight: 10,
    },
    foodImageWrapper: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    foodLabel: {
        position: 'absolute',
        bottom: 10,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'black',
        textShadowRadius: 5,
        fontSize: 14,
    },
    collectionContainer: {
        marginTop: 5,
        paddingLeft: 5,
    },
    CollectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#36454F',
    },
    collectionScroll: {
        marginTop: 10,
    },
    collectionWrapper: {
        flexDirection: 'column',
        width: 750,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    collectionItem: {
        alignItems: 'center',
        width: 120,
        marginHorizontal: 1,
        marginVertical: 1,
    },
    collectionImage: {
        height: 65,
        width: 65,
        borderRadius: 60,
        // borderColor:'red',
        // borderWidth:1,
        shadowColor: 'red',
        elevation: 4,
    },
    collectionText: {
        fontSize: 14,
        marginTop: 5,
        color: '#36454F',

    },
    outletContainer: {
        marginTop: 5,
        paddingLeft: 5,
        marginBottom: 80,

    },
    outletText: {
        marginTop: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#36454F',

    },
    outletscroll: {
        marginTop: 20,
    },
    outletItem: {
        marginBottom:30,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 8,
        shadowColor: "blue",
        // borderWidth:2,
        marginRight: 15,
        marginLeft: 15,
        shadowRadius: 8.65,
        elevation: 80,
    },
    hoveredImage: {
        width: 200, 
        height: 230, 
    },

    outletImageWrapper: {
        position: 'relative',
        borderRadius: 12,
        overflow: 'hidden',

    },
    outletImage: {
        height: 120,
        width: 120,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'black',
    },
    outletOverlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 12,
    },

    // exploreContainer: {
    //     marginTop: 20,
    //     paddingHorizontal: 15,
    // },

    // exploreTitle: {
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //     color: '#36454F',
    //     marginBottom: 10,
    // },

    // exploreItem: {
    //     backgroundColor: 'white',
    //     padding: 10,
    //     borderRadius: 10,
    //     marginBottom: 15,
    //     shadowColor: "#000",
    //     shadowOpacity: 0.1,
    //     shadowRadius: 4,
    //     elevation: 3,
    //     alignItems: 'center', 
    // },

    // exploreImage: {
    //     width: '100%', 
    //     height: 150,
    //     borderRadius: 10,
    // },

    // infoContainer: {
    //     alignItems: 'center',
    //     marginTop: 8,
    // },

    // exploreText: {
    //     fontSize: 16,
    //     fontWeight: 'bold',
    //     color: '#333',
    //     textAlign: 'center',
    // },

    // ratingContainer: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     marginTop: 5,
    // },
    // icon: {
    //     width: 16,  
    //     height: 16, 
    //     marginRight: 5,
    // },

    // ratingText: {
    //     fontSize: 14,
    //     fontWeight: 'bold',
    //     color: 'green',
    //     marginRight: 8,
    // },

    // ordersText: {
    //     fontSize: 12,
    //     color: '#666',
    // },

    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 60,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    tabButton: {
        alignItems: 'center',
    },
    tabText: {
        fontSize: 12,
        color: 'gray',
        marginTop: 2,
    },

});

export default UCampus;
































