import React from 'react'

const VideoDetail = ({videoDetails})=>{
    const {snippet} = videoDetails
    if(!Object.keys(videoDetails).length){
        return(<div>loading...</div>)
    }
    return(
        <div>
            <div className='ui segment'>
                <h4 className='ui header'>{snippet.title}</h4>
                <p>{snippet.description}</p>
            </div>
        </div>)
}

export default VideoDetail