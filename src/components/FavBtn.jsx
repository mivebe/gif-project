import React, { useState, useEffect, useContext } from "react";
import { InnerStorage } from "../App";
import "../styles/Showcase.css"

const FavBtn = ({ gif, isFavorited }) => {

    const { favorited, setFavorited } = useContext(InnerStorage)

    const curFavorite = {
        id: gif.id,
        images: {
            fixed_height: {
                url: gif.images.fixed_height.url
            }
        },
        import_datetime: gif.import_datetime,
        title: gif.title
    }

    const addToFavorites = () => {
        if (isFavorited) {
            setFavorited(favorited.filter(f => f.id !== gif.id))
        } else {
            const newFavorited = [...favorited, curFavorite]
            setFavorited(newFavorited)
        }
    }

    const className = isFavorited ? "fav-btn-clicked" : ""
    return (
        <button id="favorite-button" onClick={addToFavorites} className={className} />
    )
}
export default FavBtn