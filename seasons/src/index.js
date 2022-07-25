import {React,Component} from 'react';
import ReactDOM from 'react-dom/client';
import Seasons from './Seasons';
import Loader from './Loading';
import './style/App.css'


const el = document.getElementById('root')
const root = ReactDOM.createRoot(el);

// xtend react Comp class
// recat.comp gives use nesassary methods our class needs to work
class App extends Component{
  // initialize state
  state={lat:null,lng:null,errorMsg:''}
  
  // life Cycle methods
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition((position)=>{
      let latitude = position.coords.latitude
      let longitude = position.coords.longitude
      this.setState({lat:latitude,lng:longitude})
    },(err)=>{
      console.log(err)
      this.setState({errorMsg:err.message})
    })
  }
  //avoid conditionals in render()
  renderContent(){
    if(!this.state.lat && !this.state.lng && !this.state.errorMsg){
      return(<Loader message='Please Allow location request...'/>)
    }
    if(this.state.errorMsg){
      return(<div>please try again {this.state.errorMsg}</div>)
    }
    return(<div> <Seasons lat={this.state.lat} lng={this.state.lng}/> </div>)
  }
  // it has a render method
  render(){
    return(<div style={{border:'10px solid red'}}>{this.renderContent()}</div>)
  }
}

root.render(<App/>)


