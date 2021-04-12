import AsyncStorage from "@react-native-community/async-storage";
import seed from './database';
    
const STORAGE_KEY = "mega_flashcards_data";

export async function getDecks(){
    try {
        let data = [];

        const results = await AsyncStorage.getItem(STORAGE_KEY);

        let parsedData = JSON.parse(results);

        if (results && results !== '{}'){
            for(let i in parsedData) {
                data.push(parsedData[i]);
            }

            return data;
        } 
        else {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(seed()));
            
            return seed();
        }
    }
    catch (error) {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(seed()));
        return seed();
    }
}

export async function removeDeck(deckId){
    const results = await AsyncStorage.getItem(STORAGE_KEY);
    if (results) {
      const data = JSON.parse(results);
      delete data[deckId];

      console.log(data)
  
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));

      return "success";
    }

    return "NaN";
}

export async function addCard(deckId, card) {
    const results = await AsyncStorage.getItem(STORAGE_KEY);

    if (results) {
      const data = JSON.parse(results);
      const deck = data[deckId];
      deck.questions = deck.questions.concat([card]);

      await AsyncStorage.mergeItem(
        STORAGE_KEY,
        JSON.stringify({
          [deckId]: deck
        })
      );

      return "success";
    }

    return "NaN"
}

export async function addDeck(deck) {
    const ID = deck.id;

    await AsyncStorage.mergeItem(
        STORAGE_KEY,
        JSON.stringify({
        [ID]: deck
        })
    );

    return "success";
}

export async function getDeck(deckId) {
    try {
        const results = await AsyncStorage.getItem(STORAGE_KEY);   

        if(results) {
            const data = JSON.parse(results);
            const deck = data[deckId];

            return deck;
        }

        return {};
    }
    catch (error) {

    }
}