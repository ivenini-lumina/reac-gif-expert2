 
 export const getGifs = async (category) => {
    // console.log(`Invoking ${category}`)
    const apiKey = 'apFuGEEMQHLCoy9y8R8KU1WO1i1nz4Gs';
    const query = `${category}`;
    const limit = '5';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=${limit}`;
   
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    // console.log(gifs);
    return gifs;
 }