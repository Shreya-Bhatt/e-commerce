import React from 'react';

import classes from './Searchbar.module.css';

const searchbar = (props) => {
    return (
        <div className={classes.Searchbar}>
            <i className="fa fa-search"></i>
            <input type="search" placeholder="Search by product name" id="searchBar"/>
            <button>Search</button>
        </div>
    );
};

export default searchbar;