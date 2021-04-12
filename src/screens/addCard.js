import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import * as colors from '../utils/colors';
import{Button} from 'native-base';

const viewAddCard = (handleSubmit) => {

    let [question, setQuestionText] = useState("");
    let [answer, setAnswerText] = useState("");

    const handleQuestion = (char) => {
        setQuestionText(char);
    }

    const handleAnswer = (char) => {
        setAnswerText(char);
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder='type your question here'
                onChangeText={(char) => handleQuestion(char)}
                value={question}
            />
            <TextInput 
                style={styles.input} 
                placeholder='give a possible answer' 
                onChangeText={(char) => handleAnswer(char)}
                value={answer}
            />
            <Button block style={styles.buttons} 
                onPress={handleSubmit.bind(this, question, answer)} >
                <Text style={styles.titles} > Add Card </Text>
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

export default viewAddCard;