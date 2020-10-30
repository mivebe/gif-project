import React from "react";
import "../styles/Showcase.css"

const FavBtn = (props) => {

    let classClicked = ""

    for (let i of props.keys) {
        if (i.includes(props.gif.id)) {
            classClicked = "fav-btn-clicked"
        }
    }

    const saveInLS = (e) => {
        const key = ("favorited " + (e.target.previousSibling.innerText));
        const info = (e.target.previousSibling.innerText + " " +
            e.target.parentNode.parentNode.nextSibling.src.toString() + " " +
            e.target.previousSibling.previousSibling.innerText + " " +
            e.target.parentNode.previousSibling.innerText);
        localStorage.getItem(key) ? localStorage.removeItem(key) : localStorage.setItem(key, info);
        classClicked ? classClicked = "" : classClicked = "fav-btn-clicked";
        e.target.className = { classClicked }
    }



    return (
        <button id="favorite-button" onClick={saveInLS} className={classClicked}></button>
    )
}
export default FavBtn