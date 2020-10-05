import React, { useEffect, useState } from "react";
import axios from "axios";

const Gifs = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios("https://api.giphy.com/v1/gifs/trending", {
                params: {
                    api_key: "m5o2VM82nhD0xeSF6Drxh2SQ4DjWJiGh",
                    limit: 50,
                    offset: 0
                }
            });
            console.log(response);
            setData(response.data.data);
        };
        fetchData()
    }, []);

    const renderGifs = () => {
        return data.map(el => {
            return (
                <div key={el.id} className="gif">
                    <img src={el.images.fixed_height.url} alt="404" />
                </div>
            )
        })
    }

    return <div className="gifs-container">{renderGifs()}</div>
};

export default Gifs;