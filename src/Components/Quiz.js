import React from 'react';
import viewQuiz from '../screens/quiz';

const Quiz = ({navigation, route}) => {

    const questions = route.params.questions;

    return (
        viewQuiz(questions, navigation)
    )
}

export default Quiz;