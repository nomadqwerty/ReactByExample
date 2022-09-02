let Router = ({ route, children }) => {
  let pathName = window.location.pathname;
  console.log(pathName, route);
  if (pathName === route) {
    return children;
  } else {
    return null;
  }
};

export default Router;
