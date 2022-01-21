import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CategoryAdd = ( {setCategories} ) => {

    const [inputVal, setInputVal] = useState('');

    const handleInputVal = (e) => {
        setInputVal(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputVal.trim().length > 1) {
            setCategories(oldCategories => [inputVal, ...oldCategories])
            setInputVal('')
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputVal}
                onChange={handleInputVal}
                placeholder='Ingrese el nombre...'
            />
        </form>
    );
};

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
};

export default CategoryAdd;
