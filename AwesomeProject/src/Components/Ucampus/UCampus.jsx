import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';

const UCampus = () => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.location}>Campus Punjab</Text>

                <View style={styles.balanceContainer}>
                    <Text style={styles.location1}>Chitkara University, Punjab</Text>

                    <View style={styles.uMoneyContainer}>
                        <Text style={styles.uMoneyBox}>uMoney</Text>
                        <Text style={styles.uMoneyBalance}>₹4.46</Text>
                    </View>
                </View>

                <View style={styles.searchBarWrapper}>
                    <TextInput style={styles.searchBar} placeholder="Search Food..." placeholderTextColor="#888" />
                </View>
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
                    <View style={styles.newlyLaunchedBox}>
                        <Text style={styles.newlyService}>Newly Launched</Text>
                    </View>

                    <View style={styles.newlyContent}>
                        <View style={styles.newlyTextContainer}>

                            <Text style={styles.newlyTitle}>Venky's</Text>
                            <Text style={styles.newlySubtitle}>Venky's - CU Punjab Rajpura</Text>

                            <TouchableOpacity
                                style={styles.fullMenuButton}>
                                <Text style={styles.fullMenuText}>Full Menu</Text>
                            </TouchableOpacity>
                        </View>
                        <Image source={require("../../assets/images/venky.jpg")} style={styles.venkyImage} />
                    </View>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={true}
                        style={styles.foodScroll}
                    >
                        <Image source={require("../../assets/images/non-vegBurger.jpg")} style={styles.foodScrollImage} />
                        <Image source={require("../../assets/images/vegBurger1.png")} style={styles.foodScrollImage} />
                        <Image source={require("../../assets/images/non-vegWrap.jpg")} style={styles.foodScrollImage} />
                        <Image source={require("../../assets/images/vegWrap.jpg")} style={styles.foodScrollImage} />
                        <Image source={require("../../assets/images/HeatServe.jpg")} style={styles.foodScrollImage} />
                        <Image source={require("../../assets/images/fryServe.jpg")} style={styles.foodScrollImage} />
                        <Image source={require("../../assets/images/Desserts.jpg")} style={styles.foodScrollImage} />
                        <Image source={require("../../assets/images/nonVegLite.jpg")} style={styles.foodScrollImage} />
                        <Image source={require("../../assets/images/vegLiteBite.jpg")} style={styles.foodScrollImage} />
                        <Image source={require("../../assets/images/Beverages.jpg")} style={styles.foodScrollImage} />
                        <Image source={require("../../assets/images/addOns.jpg")} style={styles.foodScrollImage} />
                    </ScrollView>

                </View>




            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    header: {
        backgroundColor: 'red',
        paddingTop: 18,
        paddingBottom: 40,
        paddingHorizontal: 15,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        position: 'relative',
    },
    location: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    location1: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    balanceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    uMoneyContainer: {
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 22,
        paddingHorizontal: 22,
        alignItems: 'center',
        justifyContent: 'center',
    },
    uMoneyBox: {
        color: 'white',
        fontSize: 15,
    },
    uMoneyBalance: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
    },
    searchBarWrapper: {
        position: 'absolute',
        bottom: -20,
        left: 20,
        right: 20,
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    searchBar: {
        backgroundColor: 'white',
        borderRadius: 25,
        fontSize: 16,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingTop: 30,
    },
    servicesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 5,
        paddingHorizontal: 12,
    },
    serviceBox: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
        width: '48%',
        height: 100,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
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
    },
    newlyLaunchedBox: {
        marginBottom: 8,
    },
    newlyService: {
        marginTop: 10,
        color: 'green',
        fontWeight: 'bold',
        backgroundColor: 'lightgreen',
        borderRadius: 10,
        borderColor: 'green',
        borderWidth: 1,
        padding: 5,
        paddingHorizontal: 5,
        paddingVertical: 5,
        width: 130,
        margin: 8,
    },
    newlyContent: {

        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 10
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
        backgroundColor: 'red',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginTop: 5,
        alignSelf: 'flex-start',
    },
    fullMenuText: {
        color: 'white',
        fontWeight: 'bold',

    },
    venkyImage: {
        width: 100,
        height: 80,
        borderRadius: 10,
        marginLeft: 15,
    },
    foodScroll: {

    },
    foodScrollImage: {
        height: 100,
        width: 120,
        borderRadius: 15,
        marginLeft: 10,

    },

});

export default UCampus;
