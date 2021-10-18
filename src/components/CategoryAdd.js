import React, { useState } from 'react'

const CategoryAdd = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue('');
        if(inputValue === 'Clean'){
            setCategories([]);
        }else {
            setCategories( cat => [inputValue, ...cat, ] )
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                ></input>
            </form>
        </>
    )
}



export default CategoryAdd
