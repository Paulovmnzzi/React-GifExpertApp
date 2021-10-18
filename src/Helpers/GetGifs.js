const GetGifs = async (categories) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categories)}&limit=7&api_key=mTA21vrVuUWkIgu0Ckh0uHdnqlwKvkVw`
    const respuesta = await fetch(url)
    const { data } = await respuesta.json();

    const gifs = data.map(x => {
        return {
            id: x.id,
            title: x.title,
            url: x.images?.downsized_medium.url
        }
    })

    return gifs;

}

export default GetGifs;