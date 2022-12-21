import { createContext, useState } from "react";

const TestContext = createContext();

const Provider = ({ children }) => {
  let [count, setCount] = useState(0);

  // global state obj
  let state = {
    count,
    setCount,
  };

  return <TestContext.Provider value={state}>{children}</TestContext.Provider>;
};

export { Provider };
export default TestContext;
