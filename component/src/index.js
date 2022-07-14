import React from 'react'
import ReactDOM from 'react-dom/client'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
import faker from 'faker'
import './style/App.css'

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)
let App = ()=>{

    return(
    <div className='ui container comments'>
        <ApprovalCard>
            <CommentDetail author='rick' timeAgo={new Date().toISOString()} profilePic={faker.image.image()} comment='Great show'/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author='morty' timeAgo={new Date().toISOString()} profilePic={faker.image.image()} comment='ohh jeez!!'></CommentDetail>
        </ApprovalCard>
       
    </div>)
}


root.render(<App/>)