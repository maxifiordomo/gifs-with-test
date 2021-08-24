import React, { useState } from 'react'
import PropTypes from 'prop-types'



export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('');
    //si yo dejo el useState en undefined (es decir vacio literalmente), me va a tirar un error.
    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //validacion
        if (inputValue.trim().length > 2) {
            //esto se trata de un callback, cats hace referencia a categories y por eso puede desestructurar el array.
            setCategories(cats => [inputValue, ...cats]);
            setinputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propType = {
    setCategories: PropTypes.func.isRequired
}