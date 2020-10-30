import React, { useState, useEffect } from "react";
import "../styles/Favorites.css"
import Gifs from "./Gifs"

const Favorites = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {

        setIsLoading(true);
        setIsError(false);

        try {
            const keys = Object.keys({ ...localStorage }).filter((el) => {
                return el.includes("favorited");
            });

            const curData = []
            keys.map((el) => {
                const container = localStorage.getItem(el).split(" ");
                const title = []
                for (let i = 4; i < container.length; i++) {//indented by 1 because import_datetime consists of date and time separated by space
                    title.push(container[i] + " ");
                }
                return (
                    curData.push({
                        id: container[0],
                        images: {
                            fixed_height: {
                                url: container[1]
                            }
                        },
                        import_datetime: container[2],
                        title: title
                    })
                )
            });
            setData(curData)
        }
        catch (err) {
            setIsError(true)
            setTimeout(() => { setIsError(false) }, 5000);
        }
        setIsLoading(false)
    }, [])

    return (
        <div>
            <p id="title">Your Favorite Gifs</p>
            <Gifs data={data} isLoading={isLoading} isError={isError} />
        </div>
    )
}


export default Favorites