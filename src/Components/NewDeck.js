import React from 'react';
import {connect} from 'react-redux';
import viewNewDeck from '../screens/newDeck';
import {addDeck} from '../store/middleware';
import { generateUID } from '../utils/helpers';

const NewDeck = ({dispatch_addDeck}) => {

    const handleSubmit = (deckTitle) => {
        // generate an id
        const id = generateUID();

        // construct the deck object
        const deck = {
            id: id,
            title: deckTitle,
            questions: []
        };
        
        dispatch_addDeck(deck);

        alert(`${deckTitle} has been added successfully`)
    }

    return (
        viewNewDeck(handleSubmit)
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch_addDeck: (deck) => {
            dispatch(addDeck(deck))
        }
    }
}

export default connect(null, mapDispatchToProps)(NewDeck);