// reducers
import { cardsReducer, itemsReducer, imagesReducer } from "./reducer";
import { combineReducers } from 'redux';

export default combineReducers({
    cards: cardsReducer,
    items: itemsReducer,
    images: imagesReducer
})