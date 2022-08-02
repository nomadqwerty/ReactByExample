import React from 'react'
// import axiosCall from '../api/unSplash'
import preCon from '../api/axiosClient'
import SearchBar from './Searchbar'
import ImageList from './imageList'


class App extends React.Component{
    state = {result: []}
    
    apiCall = async (input)=>{
        try {
            let res = await preCon.get('/search/photos',{
                params:{
                    query:input
                }
            })
            this.setState({result: res.data.results})
        } catch (error) {
            console.log(error)
        }
    }

    render(){
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar fetchData={this.apiCall}/>
            <ImageList images={this.state.result}/>
            </div>
        )
    }
}        

export default App