const { combineReducers, createStore } = require("redux");

//
const actionCreator = (kind, name, amount = 0) => {
  return {
    type: kind,
    payload: {
      name: name,
      amount: amount,
    },
  };
};

// reducer
const claims = (oldClaims = [], action) => {
  if (action.type == "CREATE_CLAIM") {
    if (action.payload.name) {
      return [...oldClaims, action];
    }
    return oldClaims;
  }
  return oldClaims;
};

const policy = (oldPolicies = [], action) => {
  if (action.type == "CREATE_POLICY") {
    if (action.payload.name) {
      return [...oldPolicies, action];
    }
    return oldPolicies;
  } else if (action.type == "REMOVE_POLICY") {
    if (action.payload.name) {
      return oldPolicies.filter(
        (policy) => policy.payload.name != action.payload.name
      );
    }
  }
  return oldPolicies;
};

const accounts = (bag = 100, action) => {
  if (action.type == "CREATE_POLICY") {
    if (action.payload.amount) {
      return (bag = bag + action.payload.amount);
    }
    return bag;
  } else if (action.type == "CREATE_CLAIM") {
    if (action.payload.amount) {
      return (bag = bag - action.payload.amount);
    }
    return bag;
  }
  return bag;
};

// combineReducers
const dept = combineReducers({
  claim: claims,
  policy: policy,
  account: accounts,
});

const store = createStore(dept);

const action = actionCreator("CREATE_CLAIM", "john", 10);
const policyAction = actionCreator("CREATE_POLICY", "john", 10);
const policyAct2 = actionCreator("REMOVE_POLICY", "john");
const actionA = actionCreator("CREATE_CLAIM", "amanda", 10);
const policyActionA = actionCreator("CREATE_POLICY", "amanda", 10);
const policyActA2 = actionCreator("REMOVE_POLICY", "amanda");

store.dispatch(action);
store.dispatch(actionA);
store.dispatch(policyAction);
store.dispatch(policyActionA);
store.dispatch(policyAct2);
store.dispatch(policyActA2);
let state = store.getState();
console.log(state);
