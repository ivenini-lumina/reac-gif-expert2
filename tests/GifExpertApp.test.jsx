import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas en <GifExpertApp />', () => {

    // FIXME: Pareciera que estas prueban tiran warning porque queda corriendo un worker
    // prbablemente sea el useEffect que se dispara al instanciar el GifExpertApp

    test('Debe hacer match con el snapshot', () => {     
        const { container } = render(<GifExpertApp />);
        expect( container ).toMatchSnapshot();
    });    

    test('No debe agregar una categoria que ya existe', () => {        
        const newInputValue = 'Goku';   

        render( <GifExpertApp /> );

        const inputBox = screen.getByRole('textbox'); 
        const form = screen.getByRole('form');         

        // disparar los eventos
        fireEvent.input(inputBox, { target: { value: newInputValue} } );                        
        fireEvent.submit(form);
        
        const elems = screen.getAllByText(newInputValue);
        expect(elems.length).toBe(1);

        // disparar los eventos
        fireEvent.input(inputBox, { target: { value: newInputValue} } );                        
        fireEvent.submit(form);

        const elems2 = screen.getAllByText(newInputValue);
        expect(elems2.length).toBe(1);

    });    

    test('Debe agregar una categoria aunque exista si difiere el case', () => {        
        const newInputValue = 'Goku';   
        const newInputValueLowerCase = 'goku';             

        render( <GifExpertApp /> );

        const inputBox = screen.getByRole('textbox'); 
        const form = screen.getByRole('form');         

        // disparar los eventos
        fireEvent.input(inputBox, { target: { value: newInputValue} } );                        
        fireEvent.submit(form);

        const elems2 = screen.getAllByText(newInputValue);
        expect(elems2.length).toBe(1);

        fireEvent.input(inputBox, { target: { value: newInputValueLowerCase} } );                        
        fireEvent.submit(form);

        const elems3 = screen.getAllByText(newInputValue);
        expect(elems3.length).toBe(1);

        const elems4 = screen.getAllByText(newInputValueLowerCase);
        expect(elems4.length).toBe(1);

    });
    
});