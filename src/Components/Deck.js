import viewDeck from '../screens/deck';

const Deck = ({deck, navigation}) => {
   
    const handleViewBtn = () => {
        
        return navigation.navigate('Deck Details',
         { title: deck.title, deck });
    }

    return (
        viewDeck(deck, handleViewBtn)
    )
}

export default Deck;