import React, { useContext, useEffect } from "react";
import TestContext from "../context/context";

const Comp = () => {
  const { count, setCount } = useContext(TestContext);

  useEffect(() => {
    let showCount = () => {
      console.log(count);
    };

    document.querySelector("body").addEventListener("click", showCount);

    return () => {
      console.log("removed Listener");
      document.querySelector("body").removeEventListener("click", showCount);
    };
  }, [count]);

  return (
    <div>
      {count}:
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add
      </button>
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Comp />
      </div>
    );
  }
}

export default App;
