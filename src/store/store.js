import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

// reducers
import { cardsReducer, itemsReducer, imagesReducer } from "./reducer";

const initialState = {};
const middleWare = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    cards: cardsReducer,
    items: itemsReducer,
    images: imagesReducer
  }),
  initialState,
  composeEnhancers(applyMiddleware(...middleWare))
);