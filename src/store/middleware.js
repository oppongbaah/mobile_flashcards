import * as api from "../utils/api";
import 
    {
        fetchDecks,
        deleteDeck, 
        addCardToDeck,
        addNewDeck,
        selectedDeck
    } from './actionCreators';

export const getAllDecks = () => {
    return dispatch => {
        dispatch(fetchDecks([], "loading"));

        api.getDecks()
        .then(decks => {
            dispatch(fetchDecks(decks, "success"));
        })
        .catch (() => {
            dispatch(fetchDecks([], "failed"));
        })
    };
}

export const removeDeck = (deckId) => {
    return dispatch => {
        dispatch(deleteDeck("", "loading"));

        api.removeDeck(deckId)
        .then((status) => {
            dispatch(deleteDeck(deckId, status));
        })
        .catch (() => {
            dispatch(deleteDeck("", "failed"));
        })
    }
}

export const addCard = (deckId, card) => {
    return dispatch => {
        dispatch(addCardToDeck("", {}, "loading"));

        api.addCard(deckId, card)
        .then(status => {
            dispatch(addCardToDeck(deckId, card, status));
        })
        .catch(() => {
            dispatch(addCardToDeck("", {}, "failed"));
        })
    }
}

export const getDeck = (deckId) => {
    return dispatch => {

        api.getDeck(deckId)
        .then((deck) => {
            dispatch(selectedDeck(deck));
        })
        .catch((e) => {
            console.log(e);
        })
    }
}

export const addDeck = (deck) => {

    return dispatch => {
        api.addDeck(deck)
        .then(status => {
            dispatch(addNewDeck(deck, status))
        })
        .catch((e) => {
            console.log(e);
        })
    }
}