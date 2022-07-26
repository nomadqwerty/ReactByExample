import React from 'react';

class SearchBar extends React.Component {
    render(){
        return(
            <div class="ui left icon input loading">
                <form className='ui form'>
                    <div className='field'>
                        <label>image search</label>
                        <input type="text" placeholder="Search..."/>
                    </div>
                </form>
            </div>
            )
    }
}
export default SearchBar