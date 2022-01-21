import React from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ( {category} ) => {

    const {data:images, loading} = useFetchGifs(category);
 
    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            {loading ? <p className='animate__animated animate__fadeIn'>Loading...</p> : null}

            <div className='card-grid'>       
                <ol>             
                    {
                        images.map( img => (
                            <GifGridItem key={img.id} { ...img } />
                        ))
                    }
                </ol>
            </div>
        </>     
    );
};

// {
//     categories.map( (category,idx) => 
//         <GifGrid key={idx} category={category}/>
//     )
// }

GifGrid.propTypes = {};

export default GifGrid;
