// used for displaying components

// in these five steps
// 1. import react lib dom 
// why two libraries?
// react understands and reads components and how multiple components work together. cant display components in the browswer
import React from 'react'

// react dom understands how to get components to show up in the browser
// converts jsx to html
import ReactDOM from 'react-dom/client'

// 2. hook onto html elelment with root id
const el = document.getElementById('root')

// 3. take control of the elelment
// tell reactDom to show are app in the browser 
const root = ReactDOM.createRoot(el)

// 4. create a component
// functions to return jsx
let App = ()=>{
    return(<h1> hello world</h1>)
}
// 5. show the component on screen
// display component with root(the element react has taken control over)
// element.render(<component />)
root.render(<App/>)