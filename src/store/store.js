import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

// reducers
import { cardsReducer, itemsReducer, imagesReducer } from "./reducer";

export const store = createStore(
  combineReducers({
    cards: cardsReducer,
    items: itemsReducer,
    images: imagesReducer
  }),
  applyMiddleware(thunk)
);
