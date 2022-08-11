import React from 'react'
import SearchBar from './SearchBar'
import VidList from './vidList'
import VideoDetail from './videoDetail'
import preCon from '../api/youTubeApi'
class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {data:[],selectedVideo:{}}
    }

    vidSearch = async (term)=>{
        try {
            let res = await preCon(term).get('/search')
            this.setState({data:res.data.items})
        } catch (error) {
            console.log(error.message)
        }
    }

    onVideoSelect = (video)=>{
        this.setState({selectedVideo:video})
    }

    render(){
        return(
        <div className="ui container">
            <SearchBar vidSearch={this.vidSearch}/>
            <VideoDetail videoDetails={this.state.selectedVideo}/>
            <VidList onVideoSelect={this.onVideoSelect} items={this.state.data}/>
        </div>)
    }
}

export default App
