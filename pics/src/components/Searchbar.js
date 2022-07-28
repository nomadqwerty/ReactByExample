import React from 'react';

class SearchBar extends React.Component {
    state = {input:''}
    onformSubmit = (e)=> {
        e.preventDefault();
        this.props.fetchData(this.state.input)
    }
    onChangeInput = (e)=>{
        this.setState({input:e.target.value})
    }
    render(){
        return(
            <div className="ui left icon input loading">
                <form className='ui form' onSubmit={this.onformSubmit}>
                    <div className='field'>
                        <label>image search</label>
                        <input type="text" placeholder="Search..." value={this.state.input} onChange={this.onChangeInput}/>
                    </div>
                </form>
            </div>
            )
    }
}
export default SearchBar