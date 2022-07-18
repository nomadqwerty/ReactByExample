import {React,Component} from 'react';
import ReactDOM from 'react-dom/client';


const el = document.getElementById('root')
const root = ReactDOM.createRoot(el);

// xtend react Comp class
// recat.comp gives use nesassary methods our class needs to work
class App extends Component{
  // it has a render method
  render(){
    window.navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position)
    },(err)=>{console.log(err)})

    return(<div>Lat</div>)
  }
}

root.render(<App/>)


