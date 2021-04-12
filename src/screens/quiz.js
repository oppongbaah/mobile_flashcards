import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import * as colors from '../utils/colors';
import {Button, Card, CardItem, Icon, Text} from 'native-base';

const viewQuiz = (questions, navigation) => {

    const [isQuestion, toggleView] = useState(true);
    const [header, toggleHeader] = useState("Question");
    let [answeredQuestions, countAnsweredQuestions] = useState(0);
    let [correctAnswers, countCorrectAnswers] = useState(0);

    const toggleAnswer = () => {
        toggleView(!isQuestion);
        header === "Question" ?
        toggleHeader("Answer") :
        toggleHeader("Question")
    }

    const correctAnswer = () => {
        countAnsweredQuestions(answeredQuestions+=1);
        countCorrectAnswers(correctAnswers+=1);
    }

    const incorrectAnswers = () => {
        countAnsweredQuestions(answeredQuestions+=1);
    }

    const restartQuiz = () => {
        countAnsweredQuestions(0);
        countCorrectAnswers(0);
    }

    const backToDeck = () => {
        navigation.navigate("Deck Details");
    }

    return (
        <>
            {
                // return the result page if all questions are answered
                answeredQuestions === questions.length &&
                    <View style={styles.quizComplete}>
                        <Text style={styles.quizCompleteText}> Quiz Completed</Text>
                        <Text style={styles.quizCompleteResults}> 
                            You have answered {correctAnswers} / {questions.length} correctly
                        </Text>
                        <Button block ligh onPress={restartQuiz}
                            style={styles.buttons}>
                            <Text >RESTART QUIZ</Text>
                        </Button>
                        <Button block ligh onPress={backToDeck} 
                            style={styles.buttons}>
                            <Text>BACK TO DECK</Text>
                        </Button>
                    </View>
            }

            {
                // return the quiz page if all questions are not answered
                answeredQuestions !== questions.length &&
                    <View style={styles.container}>
                        <Card style={styles.card} >
                            <Text style={styles.counter}> {answeredQuestions+1} /
                             {questions.length} </Text>
                            <CardItem header >
                                <Text style={styles.headerText}> {header} </Text>
                            </CardItem>
                            <CardItem button style={styles.button} onPress={toggleAnswer}>             
                                {
                                    isQuestion
                                    ?
                                    <Text style={styles.text}>{questions[answeredQuestions].question}
                                    </Text>
                                    :
                                    <Text style={styles.text}>{questions[answeredQuestions].answer}
                                    </Text>
                                }
                            </CardItem>
                            {
                                questions.length === false
                                ?
                                <Text style={styles.questionsRemaining}> Final question! </Text> 
                                :
                                <Text style={styles.questionsRemaining}> 
                                    {questions.length - answeredQuestions} cards remaining 
                                </Text>
                            }
                        </Card>


                        <View style={styles.actionButtons}>
                            <View style={styles.buttonSection}>
                                <Button transparent rounded large style={{ width: 60, height: 60 }}
                                    onPress={incorrectAnswers} >
                                    <Icon style={{ fontSize: 40, color: 'red' }}
                                        name='md-thumbs-down' />
                                </Button>
                            </View>
                            <View style={styles.buttonSection}>
                                <Button transparent rounded large 
                                    style={{width: 60, height: 60, marginTop: -40}} 
                                    onPress={toggleAnswer}>
                                    <Icon style={{ fontSize: 25, color: 'rgb(64,64,64)' }} 
                                        name='refresh' />
                                </Button>
                            </View>
                            <View style={styles.buttonSection}>
                                <Button transparent rounded large style={{ width: 60, height: 60 }} 
                                    onPress={correctAnswer} >
                                    <Icon style={{ fontSize: 40, color: 'green' }} 
                                        name='md-thumbs-up' />
                                </Button>
                            </View>
                        </View>
                    </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
    },
    counter: {
        marginBottom: 20,
        fontSize: 26,
    },
    card: {
        marginTop: "20%",
        display: 'flex',
        height: '60%',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    button: {
        height: "100%",
    },
    headerText: {
        fontSize: 22,
        fontWeight: "bold"
    },
    text: {
        fontSize: 30,
        fontWeight: '400',
        textAlign: 'center',
        color: 'rgb(64,64,64)',
    },
    actionButtons: {
        flexDirection: 'row',
        display: 'flex',
        flexWrap: 'nowrap',
        height: "20%",
        width: '100%',
        justifyContent: 'center',
        marginTop: 30,
    },
    buttonSection: {
        padding: 20,
        paddingTop: 60,
    },
    questionsRemaining: {
        alignSelf: "center",
        marginBottom: 30,
        color: colors.tertiary,
        fontSize: 20,
    },
    quizComplete: {
        marginTop: 120,
        justifyContent: 'center',
    },
    quizCompleteText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.primary,
        marginBottom: 50,
    },
    quizCompleteResults: {
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center',
        color: 'rgb(64,64,64)',
        marginBottom: 100,

    }, 
    buttons: {
        margin: 15,
        fontSize: 92,
        height: 50,
        fontWeight: '600',
        textAlign: 'center',
    },
})

export default viewQuiz;
