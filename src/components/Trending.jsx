import React, { useState, useEffect } from "react";
import axios from "axios";
import Gifs from "./Gifs";
import $ from "jquery";
import LoadMore from "./LoadMore"

const Trending = (props) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [offset, setOffset] = useState(0);

    // $(window).scroll(function () {
    //     if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
    //         setOffset(offset + 40);
    //         console.log("asd");
    //         return <Trending offset={offset} />
    //     }
    // });


    useEffect(() => {

        const fetchData = async (skip) => {
            setIsLoading(true);
            setIsError(false);

            try {
                const response = await axios("https://api.giphy.com/v1/gifs/trending", {
                    method: "GET",
                    params: {
                        api_key: "m5o2VM82nhD0xeSF6Drxh2SQ4DjWJiGh",
                        limit: 40,
                        offset: skip || 0
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

    }, [props.offset]);
    return <Gifs data={data} isLoading={isLoading} isError={isError} />


}


export default Trending