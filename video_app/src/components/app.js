import React from "react";
import SearchBar from "./SearchBar";
import VidList from "./vidList";
import VideoDetail from "./videoDetail";
import preCon from "../api/youTubeApi";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], selectedVideo: {} };
  }

  vidSearch = async (term) => {
    try {
      let res = await preCon(term).get("/search");
      console.log(res);
      this.setState({ data: res.data.items, selectedVideo: res.data.items[0] });
    } catch (error) {
      console.log(error.message);
    }
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.vidSearch("");
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar vidSearch={this.vidSearch} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail videoDetails={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VidList
                onVideoSelect={this.onVideoSelect}
                items={this.state.data}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
