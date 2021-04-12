import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import * as colors from '../utils/colors';
import {Button} from 'native-base';

const viewNewDeck = (handleSubmit) => {

    let [deckTitle, setDeckTitle] = useState("");

    const handleDeckTitle = (char) => {
        setDeckTitle(char);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.desc}> What is the title of your new deck? </Text>
            <TextInput 
                style={styles.input}
                placeholder='title of your deck'
                onChangeText={(char) => handleDeckTitle(char)}
                value={deckTitle}
            />
            <Button block style={styles.buttons} 
                onPress={handleSubmit.bind(this, deckTitle)} >
                <Text style={styles.titles} > Add New Deck </Text>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: "20%",
        height: "80%",
    },
    buttons: {
        margin: 15,
        height: 80,
        fontWeight: "600",
        textAlign: "center",
        backgroundColor: colors.primary,
    },
    titles: {
        fontWeight: "600",
        fontSize: 28,
        margin: 10,
        color: "rgb(64,64,64)",
        color: "white",
    },
    desc: {
        fontWeight: "600",
        fontSize: 28,
        margin: 10,
        color: "rgb(64,64,64)",
        color: "black",
        textAlign: "center",
        marginBottom: 100,
    },
    input: {
        alignContent: "center",
        fontSize: 28,
        textAlign: "center",
        borderBottomColor: colors.primary,
        borderBottomWidth: 1.5,
        marginBottom: 100,
        color: "rgb(64,64,64)",
            
    },
})

export default viewNewDeck;