import React from 'react';

class SearchBar extends React.Component {
    state = {input:''}
    onformSubmit(e){
        e.preventDefault();
        console.log('submitted')
    }
    render(){
        console.log(this.state.input)
        return(
            <div className="ui left icon input loading">
                <form className='ui form' onSubmit={this.onformSubmit}>
                    <div className='field'>
                        <label>image search</label>
                        <input type="text" placeholder="Search..." value={this.state.input} onChange={(e)=>this.setState({input:e.target.value})}/>
                    </div>
                </form>
            </div>
            )
    }
}
export default SearchBar