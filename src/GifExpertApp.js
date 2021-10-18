import React, { useState } from 'react'
import CategoryAdd from './components/CategoryAdd'
import PropTypes from 'prop-types'
import GifGrid from './components/GifGrid'


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Game of Thrones'])

    // const handleSubmit = () => {
    //     setCategories([...categories, 'Saga de los confines']);
    // }

    return (
        <div>
            <h2>Gif Expert App</h2>
            <CategoryAdd setCategories={setCategories}></CategoryAdd>
            <hr id='hr'></hr>
            <ol>
                {categories.map(x => <GifGrid
                    key={x}
                    categories={x}
                />)}

            </ol>
        </div>
    )
}

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default GifExpertApp
