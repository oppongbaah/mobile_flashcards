import * as actions from './actions';

export const fetchDecks = (deck, status) => {
    return {
        type: actions.FETCH_DECKS,
        payload: {
            deck,
            status
        }
    }
}

export const deleteDeck = (deckId, status) => {
    return {
        type: actions.DELETE_DECK,
        payload: {
            deckId,
            status
        }
    }
}

export const addCardToDeck = (deckId, card, status) => {
    return {
        type: actions.ADD_CARD,
        payload: {
            deckId,
            card,
            status
        }
    }
}

export const addNewDeck = (deck, status) => {
    return {
        type: actions.ADD_DECK,
        payload: {
            deck,
            status
        }
    }
}

export const selectedDeck = (deck) => {
    return {
        type: actions.SELECTED_DECK,
        payload: {
            selectedDeck: deck
        }
    }
}