import { createStore } from "redux";
const initialState = { email: "", password: "" };

//const increment = {
//    type: "INCREMENT",
//    payload: {
//     value: 1
//
//    }
//  }
//
//

////
const authReducer = (state = initialState, action) => {
  if (localStorage.getItem("user")) {
    return (state = JSON.parse(localStorage.getItem("user")));
  } else {
    switch (action.type) {
     
      case "LOGIN":
        return action.payload.value;
      case "LOG_OUT":
        return state - 1;
      default:
        return state;
    }
  }
};
export const store = createStore(authReducer);
export const logInAction = (value) => {
  localStorage.setItem("user", JSON.stringify(value))
  return { type: "LOGIN", payload: value };
};
export const logOut = () => {
  return { type: "LOG_OUT", payload: initialState };
};
