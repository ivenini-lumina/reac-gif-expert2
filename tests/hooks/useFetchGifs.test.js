import  { renderHook, waitFor } from "@testing-library/react";

import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => { 

    test('Debe regresar el estado inicial', () => { 

        const { result } = renderHook( () => useFetchGifs('One Punch') );
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
        
    });

    test('Debe cargar los gifs al terminar de inicializar', async () => { 

        const { result } = renderHook( () => useFetchGifs('One Punch') );

        await waitFor(
            () => expect (result.current.isLoading).toBeFalsy()
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
        
    });

});