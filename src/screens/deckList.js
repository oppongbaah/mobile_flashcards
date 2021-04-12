import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Deck from '../Components/Deck';
import * as colors from '../utils/colors';

const viewDeckList = (decks, loadDefaultDecks, navigation) => {

    if (!decks.length) {
        return (
            <View style={styles.container} >
                <Text style={styles.desc} >Deck is empty</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Add New Deck")}>
                    <Text style={styles.addDeck} > Add a Deck </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={loadDefaultDecks}>
                    <Text style={styles.loadDeck} > Load default decks</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <FlatList
            data={decks}
            renderItem={( {item} ) => (
                <Deck deck={item} navigation={navigation} />
            )}
            numColumns={2}
            keyExtractor={(item) => item.id }
        />
    )
}

export default viewDeckList;

const styles = StyleSheet.create({
    container: {
        marginTop: "30%",
    },
    desc: {
        fontSize: 20,
        alignSelf: "center",
    },
    addDeck: {
        fontSize: 16,
        color: colors.secondary,
        alignSelf: "center",
        marginTop: 20,
    },
    loadDeck: {
        fontSize: 16,
        color: colors.tertiary,
        alignSelf: "center",
        marginTop: 20,
    },
})