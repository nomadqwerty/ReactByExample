// import React from 'react'
// import ReactDOM from 'react-dom/client'

const React = require('react')
const ReactDOM = require('react-dom/client')
const faker = require('faker')

const el = document.getElementById('root')

const root = ReactDOM.createRoot(el)
let Component = ()=>{
    return(<div className='ui container comments'>
        <div className='comment'>
            <a href='/' className='avatar'>
                <img alt='avatar' src={faker.image.image()}></img>
            </a>
            <div className='content'>
                <a href='/' className='author'>dave</a>
                <div className='metadata'>
                    <span className='date'>today at 8:20AM</span>
                </div>
                <div className='text'>Nice component!</div>
            </div>
        </div>
    </div>)
}
root.render(<Component/>)