import React from 'react'
import faker from 'faker'


const CommentDetail = ()=>{

    return(
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
    )
}

// use export default
export default  CommentDetail