import { INC, DEC, TOGGLE_AUTH, POST_LOAD, POST_ADD } from "./action-types";

// Counter
export const inc = num => ({ type: INC, payload: num });
export const dec = num => ({ type: DEC, payload: num });

//  Auth
export const toggleAuth = () => ({ type: TOGGLE_AUTH });

export const getData = () => {
  return function(dispatch, getState) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => {

        if (res.ok) {
          return res.json();
        }else{
          return Promise.reject(res.status)
        }
      })
      .then(json => {
        dispatch({
          type: POST_LOAD,
          payload: json
        });
      })
      .catch(err => console.log("Error: ", err));
  };
};

    

export const postData = (post) => {

  const options = {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json"
      }
    };

  return function(dispatch, getState) {
    return fetch("https://jsonplaceholder.typicode.com/posts", options)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(res.status);
        }
      })
      .then(json => {
        console.log(json)
        dispatch({
          type: POST_ADD
        });
      })
      .catch(err => console.log("Error: ", err));
  };
};
