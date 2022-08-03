import React from 'react';
import './css/imageList.css'
import ImageCard from './ImageCard';

const ImageList = (props)=>{
    let pictures = props.images.map((image)=>{
        return <ImageCard key={image.id} image={image}/>
    });
    
    return(
        <div className="imageList">{pictures}</div>
    )
}

export default ImageList