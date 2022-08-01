import React from 'react'
import axiosCall from '../api/unSplash'
import SearchBar from './Searchbar'



class App extends React.Component{
    state = {result: []}
    
    apiCall = async (input)=>{
        try {
            let res = await axiosCall(input)
            console.log(res)
            this.setState({result: res.data.results})
        } catch (error) {
            console.log(error)
        }
    }

    render(){
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar fetchData={this.apiCall}/>
            <h1>found:{this.state.result.length}</h1>
            </div>
        )
    }
}        

export default App