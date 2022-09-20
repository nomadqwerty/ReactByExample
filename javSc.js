const f = () => {
  console.log("hi");
  return () => {
    console.log("there,");
    return () => {
      console.log("how are you");
    };
  };
};

f()()();
