import React from 'react'
import SearchBar from './Searchbar'

class App extends React.Component{
    apiCall = (input)=>{
        console.log(input)
    }
    render(){
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar fetchData={this.apiCall}/>
            </div>
        )
    }
}        

export default App