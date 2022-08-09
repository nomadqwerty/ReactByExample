import React from 'react'
import SearchBar from './SearchBar'
import VidList from './vidList'
import preCon from '../api/youTubeApi'
class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {data:[]}
    }

    vidSearch = async (term)=>{
        try {
            let res = await preCon(term).get('/search')
            this.setState({data:res.data.items})
        } catch (error) {
            console.log(error.message)
        }
    }

    render(){
        return(
        <div className="ui container">
            <SearchBar vidSearch={this.vidSearch}/>
            <VidList items={this.state.data}/>
        </div>)
    }
}

export default App
