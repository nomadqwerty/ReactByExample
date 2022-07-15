import React from 'react';
import ReactDOM from 'react-dom/client';


const el = document.getElementById('root')
const root = ReactDOM.createRoot(el);

const App = ()=>{
  window.navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position)
  },(err)=>{console.log(err)})
}
root.render(<App/>)


