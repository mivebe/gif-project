import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Gifs from "./Gifs";

const Search = (props) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { filter } = useParams();

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true);
            setIsError(false);

            try {
                const response = await axios(`https://api.giphy.com/v1/gifs/search?api_key=m5o2VM82nhD0xeSF6Drxh2SQ4DjWJiGh&q=${props.searchText}&limit=40`);
                setData(response.data.data);

            } catch (err) {
                setIsError(true)
                setTimeout(() => { setIsError(false) }, 5000)
            }
            setIsLoading(false)
        };
        fetchData()
    }, [filter]); // eslint-disable-line

    return <Gifs data={data} isLoading={isLoading} isError={isError} />
};

export { Search }