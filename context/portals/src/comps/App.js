import React from "react";
import ModalPage from "./modalPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="relative">
      <BrowserRouter>
        <div></div>
        <Routes>
          <Route path="/modal" exact element={<ModalPage />} />
        </Routes>
        {/* <Link to="/modal" style={{ color: "blue" }}>
          click me!
        </Link> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
