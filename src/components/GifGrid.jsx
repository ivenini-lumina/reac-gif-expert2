import PropTypes from 'prop-types';

import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">                
                {
                images.map( im => {
                        return <GifItem 
                            key={im.id} 
                            { ...im } />                           
                    })
                }                
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
