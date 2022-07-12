import React from 'react'
import ReactDOM from 'react-dom/client'
import CommentDetail from './CommentDetail'

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)
let App = ()=>{

    return(
    <div className='ui container comments'>
        <CommentDetail />
    </div>)
}
root.render(<App/>)