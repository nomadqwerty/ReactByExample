import React from 'react';

const ImageList = (props)=>{
    let pictures = props.images.map(({alt_description,urls},i)=> <img key={i+1} src={urls.regular} alt={alt_description} />);
    console.log(props.images)
    return(
        <div>{pictures}</div>
    )
}

export default ImageList