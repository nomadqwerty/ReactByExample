import React from "react";
import { selectSong } from "../actions";
import Details from "./songsDets";

//
import SongList from "./SongList";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
      </div>
      <Details />
    </div>
  );
};

export default App;
