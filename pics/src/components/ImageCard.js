import React from 'react'

class ImageCard extends React.Component {
    constructor(props){
        super(props)
        this.imgRef = React.createRef()
        this.state={span:0}
    }
    componentDidMount() {
        this.imgRef.current.addEventListener('load',this.setSpan)
    }
    setSpan = ()=> {
        const height = this.imgRef.current.clientHeight
        const spans = Math.ceil(height / 150 +1)
        this.setState({span: spans})
    }
    render() {
        const {alt_description, urls} = this.props.image
        return (
            <div>
                <img ref={this.imgRef} alt={alt_description} src={urls.regular} style={{gridRowEnd:`span ${this.state.span}`}}></img>
            </div>
        )
    }
}

export default ImageCard