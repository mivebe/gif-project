import {
    API_KEY,
    uploadEndpoint,
    trendingEndpoint,
    randomEndpoint,
    nakedEndpoint
}
    from "./addresses.js"


const getTrending = async (limit = 50) => {
    const res = await fetch(`${trendingEndpoint}&limit=${limit}`);
    return res.json();
};

const uploadGif = async (gifData) => {
    const res = await fetch(`${uploadEndpoint}`, {
        method: "POST",
        body: gifData
    });
    return res.json();
};

const getGifInfo = async (id) => {
    const res = await fetch(`${nakedEndpoint}${id}?api_key=${API_KEY}`);
    return res.json();
};

const getRandom = async () => {
    const res = await fetch(`${randomEndpoint}`);
    return res.json();
};

const searchGifs = async (search, limit = 50) => {
    const res = await fetch(`${searchEndpoint}&q=${search}&limit=${limit}`);
    return res.json();
};

export {
    getTrending,
    getRandom,
    getGifInfo,
    uploadGif,
    searchGifs
}