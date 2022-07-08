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
// functions to return 
// eg.1
// let App = ()=>{
//     // display js vars in jsx
//     // create var: vars can be of any data type but know, that react cant render bool. so all dataTypes i.e string Nums bigInt symbols etc, but not true, false, null and undefined 

//     // datastructures for vars in react. array elements gets smushed into one value, and objects are nit valid react children
//     let variable = 'hello world'
//     let name = 'david'
//     // use of conditionals
//     if(Math.random()>0.1){
//         // change var based on condition
//         variable = 'hello guys'
//     }
//     // use interpolation{} to return a js var
//     // {} can also be used like template literals. for running pure js expressions. cant mix values in {}
//     return(<h1>{variable}. My name is {name} and the time is {new Date().toLocaleString()}</h1>)
// }
/////////////////////////////////////////////////////////////////
// eg 2
// costumize element with props
// let App = ()=>{
//     // input
//     // props is short for properties. 
//     // we use propbs to costumize elements in jsx.
//     // we can use js to specify props to be referenced inside elements
//     // props can be of string and numbers, but of also arrays and objects
//     // arrays and objects are to be wrapped with curly {} jst like numbers
//     let arr = [1,2,3]
//     let obj = {color:'red'}
//     let mins = 5
//     return(
//         <input type='number' max={10} min={mins} style={obj} list={arr}></input>
//     )
//     // when specifiying props directly on elements. if string wrap with "number", if number wrap with {3} 
// }

////////////////////////////////////////////////////////////////////
//textArea auto focus doesnt work in jsx how it does in html
// convert html to jsx in 5 steps
// 1. all props follow camelCase, maxlength is now maxLength 
// 2. props meant for numbers should be wrapped in curly braces{4},maxLength={4}
// 3. probs meant for booleans should be wrapped in {}, in case of 'true' there is no need to specify true. ie spellCheck, but if false specify it in {}, spellCheck={false}
// 4. in jsx className is the same as class in html. classes are used in styling for css. jsx is in javascript and class in js is a keyword
// 5. in jsx inlin css styles are in objects. properties are specified with camelCases. ie padding-top is paddingTop

let App = ()=>{
    let csss = {
        border:'6px solid red',
        paddingTop:'100px'
    }
return(<textarea maxLength={5} autoFocus={true} spellCheck={false} style={csss}></textarea>)
} 

// 5. show the component on screen
// display component with root(the element react has taken control over)
// element.render(<component />)
root.render(<App/>)