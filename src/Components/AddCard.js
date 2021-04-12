import {connect} from 'react-redux';
import viewAddCard from '../screens/addCard';
import {addCard} from '../store/middleware';

const AddCard = ({route, navigation, dispatch_addCardToDeck, decks}) => {

    const handleSubmit = (question, answer) => {
        const card = {question, answer};
        const deckId = route.params.deckId;

        dispatch_addCardToDeck(deckId, card);

        // get deck and pass it to the deck details page
        const deck = decks.filter(deck => deck.id === deckId)[0];
        console.log(deck.questions.length+1);

        navigation.navigate("Deck Details", 
        {numofCards: deck.questions.length+1});
    }

    return (
        viewAddCard(handleSubmit)
    )
}

const mapStateToProps = (state) => {
    return {
        decks: state.decks.payload.decks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch_addCardToDeck: (deckId, card) => {
            dispatch(addCard(deckId, card))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);