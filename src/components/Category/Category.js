import React from 'react';

import classes from './Category.module.css';

const category = (props) => {
    return (
        <div className={classes.Category}>
            <select>
                <optgroup label="Clothes">
                    <option>Pick a category!</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="kids">Kids</option>
                </optgroup>
                <optgroup label="Footwear">
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="kids">Kids</option>
                </optgroup>
                <optgroup label="Dairy Products">
                    <option>Cheese</option>
                    <option>Milk</option>
                    <option>Chocolates & Icecreams</option>
                </optgroup>
            </select>
        </div>
    );
};

export default category;