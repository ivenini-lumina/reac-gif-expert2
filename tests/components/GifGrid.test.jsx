import  { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en <GifGrid />', () => { 

    const category = 'One Punch';

    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true,
    });
    
    test("Debe mostrar el loading inicialmente", () =>{

        render(<GifGrid category={category}/>);
        screen.getByText('Cargando...');
        screen.getByText(category);
        
    });   

    test("Debe mostrar lo items cuando son cargados mediante el useFetchGifs", () =>{

        useFetchGifs.mockReturnValue({
            images: [
                    {id:'1', title: 'saitama', url: 'https://img.com/op.jpg'},
                    {id:'2', title: 'goku', url: 'https://img.com/goku.jpg'}
            ],
            isLoading: false,
        });

        render(<GifGrid category={category}/>);

        expect(screen.getAllByRole('img').length).toBe(2);

    });     

});
