import React from 'react'

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state={userInput:''}
    }
    onFormSubmit=(e)=>{
        e.preventDefault()
        console.log('submitted')
    }
    onInput=(e)=>{
        let userVal = e.target.value
        this.setState({userInput:userVal})
        console.log(userVal)
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