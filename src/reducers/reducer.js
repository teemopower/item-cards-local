const cardsState = {
  payload: []
};

const itemsState = {
  items: []
};

const imagesState = {
  nextImage: 1,
  text: "Person#",
  name: "tester",
  url: "https://randomuser.me/api/portraits/men/10.jpg"
};

export const cardsReducer = (state = cardsState, action) => {
  switch (action.type) {
    case "GET_ALL_FURNITURE":
      return Object.assign({}, state, {
        payload: action.payload
      });
    default:
      return state;
  }
};

export const itemsReducer = (state = itemsState, action) => {
  switch (action.type) {
    case "GET_ALL_ITEMS":
      return Object.assign({}, state, {
        items: action.payload
      });
    case "ADD_ITEM":
      return Object.assign({}, state, {
        items: [...state.items, action.payload]
      });
    case "DELETE_ITEM":
      return Object.assign({}, state, {
        items: state.items.filter(item => item._id !== action.payload)
      })
    default:
      return state;
  }
};

export const imagesReducer = (state = imagesState, action) => {
  switch (action.type) {
    case "GET_TEXT":
      return Object.assign({}, state, {
        text: "Person# ",
        nextImage: state.nextImage + 1
      });
    case "GET_IMG":
      return Object.assign({}, state, {
        name: action.name,
        url: action.url
      });
    default:
      return state;
  }
};
