export function getAllFurniture() {
  return dispatch => {
    return fetch("https://api.myjson.com/bins/jbg89")
      .then(res => res.json())
      .then(function(data) {
        console.log("action data", data);
        dispatch({
          type: "GET_ALL_FURNITURE",
          payload: data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}
export function getItems() {
  return dispatch => {
    return fetch("http://127.0.0.1:5000/api/items")
      .then(res => res.json())
      .then(function(data) {
        console.log("action data", data);
        dispatch({
          type: "GET_ALL_ITEMS",
          payload: data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}


export function getImg() {
  return dispatch => {
    return fetch("https://randomuser.me/api/")
      .then(resp => resp.json())
      .then(function(data) {
        //console.log(data.results[0]);
        dispatch({
          type: "GET_IMG",
          url: data.results[0].picture.medium,
          name: data.results[0].name.first + " " + data.results[0].name.last
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}

export const getNextImage = () => {
  return {
    type: "GET_TEXT"
  };
};
