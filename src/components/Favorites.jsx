import React, { useContext } from "react";
import "../styles/Favorites.css"
import Gifs from "./Gifs"
import { InnerStorage } from "../App"

const Favorites = () => {
    const { favorited } = useContext(InnerStorage);

    return (
        <div>
            <p id="title">Your Favorite Gifs</p>
            <Gifs data={favorited} isLoading={false} isError={false} />
        </div>
    )
}

export default Favorites