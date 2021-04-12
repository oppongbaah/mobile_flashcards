import {Alert} from 'react-native';
import {connect} from 'react-redux';
import viewDeckDetails from '../screens/deckDetails';
import {removeDeck} from '../store/middleware';

const DeckDetails = ({route, navigation, dispatch_removeDeck}) => {

    const deck = route.params.deck;
    const numOfCards = route.params.numofCards;

    const handleAddCardBtn = () => {
        return navigation.navigate("Add Card",
        { title: "Add New Card", deckId: deck.id});
    }

    const handleQuizBtn = () => {
        return navigation.navigate("Quiz",
        { title: "Quiz", questions: deck.questions });
    }

    const removeDeck = () => {
        dispatch_removeDeck(deck.id);

        // navigate to the dashboard
        return navigation.navigate("Mobile Flashcards",
        { title: "Mobile Flashcards"});
    }

    const handleRemoveDeckBtn = () => {
        Alert.alert(
            "Delete Deck",
            `Deck "${deck.title}" will be removed permanently. Do you wish to continue?`,
            [
                {
                    text: "Yes",
                    onPress: removeDeck,
                    style: "ok"
                },
                { 
                    text: "Cancel",
                    style: "cancel"
                }
            ]
          );
    }

    return (
        viewDeckDetails(deck, numOfCards, handleAddCardBtn, handleQuizBtn,
             handleRemoveDeckBtn)
    )
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch_removeDeck: (deckId) => dispatch(removeDeck(deckId))
    }
}

export default connect(null, mapDispatchToProps)(DeckDetails);