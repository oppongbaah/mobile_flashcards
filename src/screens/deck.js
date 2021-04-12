import React from 'react';
import { TouchableOpacity, StyleSheet, Image, Text, View } from 'react-native';
import * as colors from '../utils/colors';
import card from '../utils/assets/card.jpg';

const viewDeck = (deck, handleViewBtn) => {

    return (
        <View style={styles.deck} >
            <Image style={styles.deckImage} source={card} />
            <Text style={styles.deckName}> {deck.title} </Text>
            <Text style={styles.deckCount}> {deck.questions.length} Cards</Text>
            <TouchableOpacity onPress={handleViewBtn.bind(this)}>
                <Text style={styles.cardsView} > View Cards </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    deck: {
        backgroundColor: colors.deck,
        width: "43%",
        height: 200,
        margin: 5,
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    deckImage: {
        width: 60,
        height: 60,
        alignSelf: "center",
        marginTop: 10
    },
    deckName: {
        marginVertical: 10,
        fontSize: 22,
        color: colors.deckName
    },
    deckCount: {
        color: colors.deckCount,
        fontSize: 16,
    },
    cardsView: {
        color: colors.deckView,
        marginTop: 10,
        fontSize: 18
    }
})

export default viewDeck;