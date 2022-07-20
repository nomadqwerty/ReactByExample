import {React,Component} from 'react';
import ReactDOM from 'react-dom/client';


const el = document.getElementById('root')
const root = ReactDOM.createRoot(el);

// xtend react Comp class
// recat.comp gives use nesassary methods our class needs to work
class App extends Component{
  constructor(props){
    super(props)
    this.state={lat:null,lng:null,errorMsg:''}

    
      window.navigator.geolocation.getCurrentPosition((position)=>{
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude
        this.setState({lat:latitude,lng:longitude})
      },(err)=>{
        console.log(err)
        this.setState({errorMsg:err.message})
      })
    
      
    
  }
  
  // it has a render method
  render(){
    if(!this.state.lat && !this.state.lng && !this.state.errorMsg){
      return(<div>loading...</div>)
    }
    if(this.state.errorMsg){
      return(<div>please try again {this.state.errorMsg}</div>)
    }
    return(<div>LAT:{this.state.lat}, LNG:{this.state.lng}</div>)
  }
}

root.render(<App/>)


