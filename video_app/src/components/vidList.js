import React from 'react'
import VideoCard from './videoCard'

const vidList = (props)=>{
    const videos = props.items.map((video,i)=>{
        return <VideoCard key={i+1} video={video}/>
    })
    return(
        <div>{videos}</div>
    )
}

export default vidList