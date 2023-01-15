import  { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en GifItem', () => { 

    const url = 'https://saitama.com/saitama.jpg';
    const title = 'test title';
    
    test("Debe hacer match con el snapshot", () =>{
        const { container } = render(<GifItem title={title} url={url} />);
        expect( container ).toMatchSnapshot();
    });      

    test("Debe de tener el url y alt correcto en la imagen", () =>{
        render(<GifItem title={title} url={url} />);

        // expect( screen.getByRole('img').src ).toBe(url);
        const { src, alt } = screen.getByRole('img');
        expect (src).toBe(url);
        expect (alt).toBe(title);
    });  
    
    test("Debe de contener el titulo", () =>{
        render(<GifItem title={title} url={url} />);

        expect (screen.getByText(title)).toBeTruthy();
        
    });      
    
    
    

});
