import {getGifs} from "../../src/helpers/getGifs";

describe('Pruebas en getGifs()', () => { 
    const cat = 'One Punch';
    test('La funcion debe regresar un array de objetos', async () => { 

        const gifResult = await getGifs(cat);
        expect(gifResult.length).toBeGreaterThan(0);

        expect(gifResult[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    });
});