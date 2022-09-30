export const posts = (state = [], action) => {
  switch (action.type) {
    case "API_CALL":
      if (action.payload instanceof Array) {
        return action.payload;
      }
      return [action.payload];

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
      if (action.payload instanceof Object) {
        return action.payload;
      }
      return [action.payload];

    case "ADD_USER":
      if (state) {
        return [...state, action.payload];
      }
      return state;
    default:
      return state;
  }
};
