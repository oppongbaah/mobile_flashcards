import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import deckRed from './reducers';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    decks: deckRed,
});

const enhancer = compose(
  applyMiddleware(ReduxThunk, logger)
);

const store = createStore(rootReducer, enhancer);
  
export default store;