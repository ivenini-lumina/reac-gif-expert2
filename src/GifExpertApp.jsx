import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const initialCategories = ['One Punch', 'Dragon Ball'];

    const [categories, setCategories] = useState( initialCategories );

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)){
            // No inserta la nueva categoria si ya existe. case insensitive
            return;
        }

        setCategories( [ newCategory, ...categories] ); 

        // No usar push para agregar elementos al arreglo ya que provoca "mutaciones"
        // y react trata de evitar las mutaciones
        /*
        let categoriesUpdated = categories.copyWithin();
        // const categoriesUpdated = categories;
        // categoriesUpdated.push(cat);
       
        console.log(`prev ${categoriesUpdated}`);

        categories.push(cat);
        //console.log(categories);

        console.log(`post ${categoriesUpdated}`);

        categoriesUpdated = ['Duro1', 'duro2', 'duro3'];
        console.log(`duro ${categoriesUpdated}`);
        setCategories((c) => categoriesUpdated);        
        // setCategories((c) => catEnDuro);   
        // setCategories((c) => categories); 
        */  
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}    
            <AddCategory 
                onNewCategory={(cat) => onAddCategory(cat)} 
            />

            {/* Listado de Gif */}
            {
                categories.map( (category) => (

                <GifGrid 
                    key= { category }
                    category= { category } />                                
                ))
            }
        </>
    )
}
