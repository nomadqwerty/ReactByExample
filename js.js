const accounts = (bag = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    if (action.payload.amount) {
      bag = bag - action.payload.amount;
    }
    return bag;
  } else if (action.type === "CREATE_POLICY") {
    if (action.payload.amount) {
      bag = bag + action.payload.amount;
    }
    return bag;
  } else {
    return bag;
  }
};
