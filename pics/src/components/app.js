import React from 'react'
import axios from 'axios'
import SearchBar from './Searchbar'

class App extends React.Component{
    apiCall = async (input)=>{
        let data = await axios.get(' https://api.unsplash.com/search/photos',{
            params:{
                query:input
            },
            headers:{
                Authorization:'Client-ID oducr95UOqhhHjU10oU5uaLofUg0TOhC_yp3rxz1KSI'
            }
        })
        console.log(data)
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