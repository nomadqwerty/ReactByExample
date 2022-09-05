import React, { useEffect, useState } from "react";

let Router = ({ route, children }) => {
  let pathName = window.location.pathname;
  const [curPath, setCurPath] = useState(pathName);
  useEffect(() => {
    let onChange = () => {
      setCurPath(pathName);
    };
    window.addEventListener("change", onChange);

    return () => {
      window.removeEventListener("change", onChange);
    };
  }, []);

  console.log(curPath, route);
  if (curPath === route) {
    return children;
  } else {
    return null;
  }
};

export default Router;
