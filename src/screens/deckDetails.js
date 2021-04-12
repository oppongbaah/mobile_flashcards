import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as colors from '../utils/colors';
import {  Button, Text } from 'native-base';

const viewDeckDetails = (deck, numOfCards, handleAddCardBtn, handleQuizBtn, 
    handleRemoveDeckBtn) => {
    
    return (
        <View>
            <View style={styles.textContainer}>
                <Text style={styles.deckName}> {deck.title} </Text>
                <Text style={styles.deckCount}> 
                    {numOfCards?numOfCards:deck.questions.length} cards 
                </Text>
            </View>

            <View style={styles.btnContainer}>
                <Button block blue style={styles.buttons}
                    onPress={handleAddCardBtn} >
                    <Text style={styles.buttonText}> Add Card </Text>
                </Button>
                <Button block dark style={styles.buttons}
                    onPress={handleQuizBtn} >
                    <Text style={styles.buttonText}> Start Quiz </Text>
                </Button>
                <Button style={styles.buttons} block transparent title='Delete Deck' 
                    onPress={handleRemoveDeckBtn}>
                    <Text style={{color:"red"}} >Delete Deck</Text>
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        height: "60%",
    },
    btnContainer: {
        height: "40%",
    },
    header: {
        color: "red"
    },
    buttons: {
        margin: 15,
        fontSize: 92,
        height: 50,
        fontWeight: '600',
        textAlign: 'center',
    },
    deckName: {
        marginVertical: 30,
        fontSize: 50,
        color: colors.deckName,
        marginTop: "40%",
        alignSelf: "center"
    },
    deckCount: {
        color: colors.deckCount,
        fontSize: 24,
        alignSelf: "center"
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
    }
})

export default viewDeckDetails;