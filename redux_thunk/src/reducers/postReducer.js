export const posts = (state = [], action) => {
  switch (action.type) {
    case "API_CALL":
      return action.payload;

    case "ADD_POST":
      if (state) {
        return [...state, action.payload];
      }
      return state;
    default:
      return state;
  }
};
export const users = (state = [], action) => {
  switch (action.type) {
    case "API_CALL_USER":
      return [...state, action.payload];

    case "ADD_USER":
      if (state) {
        return [...state, action.payload];
      }
      return state;
    default:
      z;
      return state;
  }
};
