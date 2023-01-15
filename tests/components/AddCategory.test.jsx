import { fireEvent, render, screen } from "@testing-library/react";

import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory />', () => { 
    test('Debe cambiar el valor ingresado en la caja de texto', () => { 
        render(<AddCategory onNewCategory={ () => {} }/>);   
        const inputBox = screen.getByRole('textbox');      
        const newInputValue = 'Saitama';

        fireEvent.input(inputBox, { target: { value: newInputValue} } );
        
        expect(inputBox.value).toBe(newInputValue);
    });

    test('Debe llamar al onNewCategory si el input tienen un valor al hacer submit', () => {
        
        const newInputValue = 'Saitama ';        
        const onNewCategoryFn = jest.fn(); 

        render(<AddCategory onNewCategory={ onNewCategoryFn }/>);           
        const inputBox = screen.getByRole('textbox'); 
        const form = screen.getByRole('form');         

        // disparar los eventos
        fireEvent.input(inputBox, { target: { value: newInputValue} } );                        
        expect(inputBox.value).toBe(newInputValue);
        fireEvent.submit(form);
        expect(inputBox.value).toBe('');

        expect(onNewCategoryFn).toHaveBeenCalledTimes(1);
        expect(onNewCategoryFn).toHaveBeenCalledWith(newInputValue.trim());

    }); 

    test('No debe llamar al onNewCategory si el input es vacio', () => {
        const onNewCategoryFn = jest.fn(); 

        render(<AddCategory onNewCategory={ onNewCategoryFn }/>);           
        const form = screen.getByRole('form');         
        fireEvent.submit(form);
        expect(onNewCategoryFn).not.toHaveBeenCalled();
    }); 

});