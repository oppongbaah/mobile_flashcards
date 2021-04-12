import React from 'react';
import {connect} from 'react-redux';
import viewDeckList from '../screens/deckList';
import {getAllDecks} from '../store/middleware';

const DeckList = ({decks, loadDecks, navigation}) => {

    const loadDefaultDecks = () => {
        loadDecks();
        navigation.navigate("Mobile Flashcards");
    }

    return (
        viewDeckList(decks, loadDefaultDecks, navigation)
    )
}

const mapStateToProps = state => {
    return {
      decks: state.decks.payload.decks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadDecks: () => dispatch(getAllDecks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);