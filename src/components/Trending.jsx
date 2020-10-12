import React, { useState, useEffect } from "react";
import axios from "axios";
import Gifs from "./Gifs";

const Trending = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setIsError(false);

            try {
                const response = await axios("https://api.giphy.com/v1/gifs/trending", {
                    params: {
                        api_key: "m5o2VM82nhD0xeSF6Drxh2SQ4DjWJiGh",
                        limit: 40,
                        offset: 0
                    }
                });
                setData(response.data.data);

            } catch (err) {
                setIsError(true)
                setTimeout(() => { setIsError(false) }, 5000)
            }
            setIsLoading(false)
        };
        fetchData()
    }, []);
    console.log("qwe");
    return <Gifs data={data} isLoading={isLoading} isError={isError} />
}


export default Trending