const albumReducers = (state = {}, action) => {
  switch (action.type) {
    case "GET_ALBUM":
      return { state: action.payload };

    default:
      return state;
  }
};

export default albumReducers;
