import * as actions from './actions';

const initialState = {
    payload : 
        {
            decks: [],
            status: '',
            selectedDeck: {}
        }
}

export default deckRed = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_DECKS:

            return {...state, payload:
                {
                    decks: action.payload.deck,
                    status: action.payload.status
                }
            }
        case actions.DELETE_DECK:

            const decks = state.payload.decks
            .filter(deck => deck.id !== action.payload.deckId)

            return {...state, payload:
                {
                    decks: [...decks],
                    status: action.payload.status
                }
            }
        case actions.ADD_CARD:

            const {deckId, card, status} = action.payload;

            const newDeck = state.payload.decks
            .filter((deck) => deck.id === deckId)[0]

            if(newDeck) {
                const newQuestions = newDeck.questions.concat([card])
                newDeck.questions = newQuestions;
                
                return {...state, payload:
                    {
                        decks: [...state.payload.decks
                            .filter(deck => deck.id !== deckId), newDeck],
                        status: status
                    }
                }
            }

            return state;
        case actions.SELECTED_DECK:

            return {...state, payload:
                {
                    selectedDeck: action.payload.selectedDeck
                }
            }
        case actions.ADD_DECK:

            return {...state, payload:
                {
                    decks: [...state.payload.decks, action.payload.deck],
                    status: action.payload.status
                }
            }
        default:
            return state;
    }
}
  