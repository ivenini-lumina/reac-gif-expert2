import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getGifs(category)
            .then((imgs) => {
                setImages(imgs);
                setIsLoading(false);
            });        
    }, [] );

    // deps = [] significa que solo se ejecuta una vez al crear el componente  

    const resultFetch = {
        images: images,
        isLoading: isLoading,
    };

    return resultFetch;
}
