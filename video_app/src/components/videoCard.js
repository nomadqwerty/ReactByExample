import React from 'react'
import '../components/css/videoCard.css'

class VideoCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {video:[]}

    } 
    render(){
        const {snippet} = this.props.video
        const {onVideoSelect,video} = this.props
        return(
        <div onClick={()=>{onVideoSelect(video)}} ref={this.ref} className="videoCard item">
            <img className="ui image" src={snippet.thumbnails.medium.url} alt={snippet.title}/>
            <div className="content">
                <div className="header">{snippet.title}</div>
            </div>
        </div>)
    }
}

export default VideoCard