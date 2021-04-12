import React from 'react';
import { SafeAreaView, StyleSheet, Image, Text, View, StatusBar } from 'react-native';
import * as colors from '../utils/colors';
import profilePic from '../utils/assets/profile.png';
import DeckList from '../Components/DeckList';

const viewDashboard = (navigation) => {

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.profile}>
                    <Image style={styles.profileImage} source={profilePic} />
                    <Text style={styles.welcomeText}> Welcome Back </Text>
                </View>
                <View style={styles.deckContainer}>
                        <DeckList navigation={navigation}/>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: StatusBar.currentHeight,
        width: "100%"
    },
    deckContainer: {
        width: "95%",
        marginTop: 10,
        height: "80%"
    },
    profile: {
        flex: 2,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "20%",
        marginTop: 10,
        width: "95%"
    },
    deckGroup: {
        flex: 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    scrollView: {
        marginHorizontal: 10,
        marginTop: 10
    },
    profileImage: {
        width: 66,
        height: 58,
        alignSelf: "center"
    },
    welcomeText: {
        color: "black",
        marginTop: 10,
        fontSize: 26,
        fontWeight: "bold"
    }
})

export default viewDashboard;