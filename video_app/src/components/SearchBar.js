import React from 'react'

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state={userInput:''}
    }
    onFormSubmit=(e)=>{
        e.preventDefault()
        this.props.vidSearch(this.state.userInput)
    }
    onInput=(e)=>{
        let userVal = e.target.value
        this.setState({userInput:userVal})
    }
    render(){
        return(
            <div className="ui left icon input loading">
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className="field ui input focus">
                        <label>Video search</label>
                        <input type="text" value={this.state.userInput} placeholder="Search..." onChange={this.onInput}/>
                    </div>
                </form>
            </div>
            )
    }
}

export default SearchBar