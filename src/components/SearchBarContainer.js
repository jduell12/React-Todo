import React from 'react';

class SearchBarContainer extends React.Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return(
            <div className="searchBar">
                <label htmlFor="search">
                Search for a task on the list: <br />
                <input id="search" name="search" type="text" onChange={this.props.handleChange}/>
                </label>
            </div>
        )

    }
    
}

export default SearchBarContainer;