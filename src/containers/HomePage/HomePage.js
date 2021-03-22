import React from 'react';

import Aux from '../../hoc/Auxiliary';
import Products from '../../components/Products/Products';
// import Categories from '../../components/Category/Category';
import Searchbar from '../../components/Navigation/Searchbar/Searchbar';

const homePage = (props) => {
    return (
        <Aux>
            <Searchbar />
            {/* <Categories /> */}
            <Products />
        </Aux>
    );
};

export default homePage;