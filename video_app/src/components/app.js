import React from 'react'
import SearchBar from './SearchBar'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
        <div className="ui container">
            <SearchBar/>
        </div>)
    }
}

export default App
