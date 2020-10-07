import React, { useEffect, useState } from "react";
import axios from "axios";

import Spinner from "./Spinner";

import { input } from "./Handlers"

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const SEARCH_ENDPOINT = process.env.SEARCH_ENDPOINT;

const Search = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setIsError(false);

            try {
                const response = await axios(`${SEARCH_ENDPOINT}?api_key=${API_KEY}&q=${input}&limit=50`, {
                });
                console.log(response);
                setData(response.data.data);

            } catch (err) {
                setIsError(true)
                console.log(err);
                setTimeout(() => { setIsError(false) }, 5000)
            }
            setIsLoading(false)
        };
        fetchData()
    }, []);

    const renderGifs = () => {
        if (isLoading) {
            return <Spinner />
        };
        return data.map(el => {
            return (
                <div key={el.id} className="gif">
                    <img src={el.images.fixed_height.url} alt="404" />
                </div>
            )
        });
    };



    const renderError = () => {
        if (isError) {
            return (
                <div className="alert-container ">
                    <div className="alert-bad" >
                        Error during loading gifs. Please try again later.
                    </div>
                </div>
            );
        };
    };

    return (
        <div>
            {renderError()}
            <div className="gifs-container">{renderGifs()}</div>
        </div>
    )
};

export default Search;