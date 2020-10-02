const API_KEY = "m5o2VM82nhD0xeSF6Drxh2SQ4DjWJiGh";
const uploadEndpoint = `upload.giphy.com/v1/gifs?api_key=${API_KEY}`;
const trendingEndpoint = `api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`;
const randomEndpoint = `api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const nakedEndpoint = `api.giphy.com/v1/gifs/`;
const searchEndpoint = `api.giphy.com/v1/gifs/search?api_key=${API_KEY}`;

export {
    API_KEY,
    uploadEndpoint,
    trendingEndpoint,
    randomEndpoint,
    nakedEndpoint,
    searchEndpoint
};