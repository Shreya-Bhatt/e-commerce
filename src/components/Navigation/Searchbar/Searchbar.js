import React, { useState } from 'react';

import classes from './Searchbar.module.css';

const Searchbar = (props) => {
    const [ productSearch, setProductSearch] = useState("");

    const searchInputEvent = (event) => {
        setProductSearch(event.target.value);
    };

    return (
        <div className={classes.Searchbar}>
            <i className="fa fa-search"></i>
            <input type="search" 
                placeholder="Search by product name" 
                id="searchBar"
                onChange={searchInputEvent}
                value={productSearch}/>
            <button>Search</button>
        </div>
    );
};

export default Searchbar;