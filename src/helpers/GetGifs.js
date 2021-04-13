export const getGifs = async (category) => {
    const name = category
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(name)}&limit=10&api_key=e6Gn5uzdKorN7qTA4IcuE43VcdsfCtR0`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,

        }
    })

    return gifs;

}

