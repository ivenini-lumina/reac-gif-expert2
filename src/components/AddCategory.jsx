import { useState } from "react"

export const AddCategory = (props) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);        
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const newInputValue = inputValue.trim();

        if (newInputValue.length <= 1){
            return;
        }

        setInputValue('');
        props.onNewCategory(newInputValue);

    }    

    return (
        <form
            onSubmit={event => onSubmit(event)}>
            <input 
                type={"text"}
                placeholder={"Buscar gifs"}
                value={inputValue}
                onChange={ event => onInputChange(event)}
            />
        </form>
    )
}
