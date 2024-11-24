const initialState = {
  user: null,
  token: "",
  isAuth: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return state;

    case "SIGNUP":
      return state;

    case "LOGOUT":
      return state;

    //*
    default:
      return state;
  }
};

export default userReducer;
