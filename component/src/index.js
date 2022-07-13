import React from 'react'
import ReactDOM from 'react-dom/client'
import CommentDetail from './CommentDetail'
import faker from 'faker'

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)
let App = ()=>{

    return(
    <div className='ui container comments'>
        <CommentDetail author='rick' timeAgo={new Date().toISOString()} profilePic={faker.image.image()} comment='Great show'/>
        <CommentDetail author='morty' timeAgo={new Date().toISOString()} profilePic={faker.image.image()} comment='Oh no'/>
        <CommentDetail author='rick' timeAgo={new Date().toISOString()} profilePic={faker.image.image()} comment='f u morty'/>
       
    </div>)
}
root.render(<App/>)