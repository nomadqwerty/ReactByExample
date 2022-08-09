import React from 'react'

class VideoCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {video:[]}

    } 
    render(){
        const {snippet} = this.props.video
        return(<div ref={this.ref}>
            <img src={snippet.thumbnails.medium.url} alt={snippet.title}/>
            {snippet.title}
        </div>)
    }
}

export default VideoCard