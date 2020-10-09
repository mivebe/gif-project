import React, { useState, useEffect } from "react";
import axios from "axios";
import Gifs from "./Gifs";

const Search = (searchText) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect((searchText) => {

        const fetchData = async () => {
            setIsLoading(true);
            setIsError(false);
            try {
                const response = await axios(`https://api.giphy.com/v1/gifs/search?api_key=m5o2VM82nhD0xeSF6Drxh2SQ4DjWJiGh&q=${searchText}&limit=40`);
                setData(response.data.data);

            } catch (err) {
                setIsError(true);
                setTimeout(() => { setIsError(false) }, 5000);
            }
            setIsLoading(false);
        };
        fetchData()

    }, []);

    /* const res = React.useMemo(() => ({
         data,
         isLoading,
         isError
     }), [data, isLoading, isError])*/


    return (
        <div>
            <Gifs {...{ data, isLoading, isError }} />
        </div>
    )
};


export default Search