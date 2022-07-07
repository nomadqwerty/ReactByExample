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
    // display js vars in jsx
    // create var: vars can be of any data type but know, that react cant render bool. so all dataTypes i.e string Nums bigInt symbols etc, but not true, false, null and undefined 

    // datastructures for vars in react. array elements gets smushed into one value, and objects are nit valid react children
    let variable = 'hello world'
    let name = 'david'
    // use of conditionals
    if(Math.random()>0.1){
        // change var based on condition
        variable = 'hello guys'
    }
    // use interpolation{} to return a js var
    // {} can also be used like template literals. for running pure js expressions. cant mix values in {}
    return(<h1>{variable}. My name is {name} and the time is {new Date().toLocaleString()}</h1>)
}
// 5. show the component on screen
// display component with root(the element react has taken control over)
// element.render(<component />)
root.render(<App/>)