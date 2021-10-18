import React, { } from 'react'
import UseFetchGifs from '../hooks/UseFetchGifs'
import GifGridItem from '../components/GifGridItem'

const GifGrid = ({ categories }) => {

    const { data, loading } = UseFetchGifs( categories );


    return (
        <>
            <h3>{categories}</h3>

            {loading && <p className='animate__animated animate__pulse'>Loading..</p>}

            <div className='card-grid'>
                {
                    data.map(img => (
                        <GifGridItem 
                        key={img.id}
                        {...img}
                        />
                    ))
                }
            </div>

        </>
    )
}

export default GifGrid
