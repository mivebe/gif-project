
import React, { useRef } from "react";
import Spinner from "./Spinner";

const Gifs = (props) => {
    const btn2 = useRef();
    console.log(btn2);

    const saveInLS = (e) => {
        const key = ("favorited " + (e.target.previousSibling.innerText));
        const info = (e.target.previousSibling.innerText + " " +
            e.target.parentNode.parentNode.nextSibling.src.toString() + " " +
            e.target.previousSibling.previousSibling.innerText + " " +
            e.target.parentNode.previousSibling.innerText);
        localStorage.getItem(key) ? localStorage.removeItem(key) : localStorage.setItem(key, info);
    }

    const renderGifs = () => {

        if (props.isLoading) {
            return <Spinner />
        };
        return props.data.map(el => {
            return (
                <div key={el.id} className="gif" >
                    <div className="gif-info">
                        <p id="name" style={{ margin: 10 }}>{el.title || "Nameless GIF"}</p>
                        <div style={{ textAlign: "left", paddingLeft: 5, paddingRight: 5 }} >
                            <p>{el.import_datetime || "date:N/A"}</p>
                            <p style={{ display: "none" }}>{el.id}</p>
                            <button id="favorite-button" ref={btn2} onClick={saveInLS} ></button>
                            {changeHeartColor(el)}
                        </div>
                    </div>
                    <img src={el.images.fixed_height.url} alt="404" style={{ borderRadius: 20 }} />
                </div>
            )
        });
    };

    const changeHeartColor = (gif) => {
        const keys = Object.keys({ ...localStorage }).filter((el) => {
            return el.includes("favorited");
        });
        keys.map((el) => {
            const btn = document.getElementById("favorite-button");

            //el.includes(gif.id) ? btn.style = { backgroundImage: `url(require("../media/full-heart.svg.png"))` } : btn.style = { backgroundImage: `url(require("../media/heart-outline.svg"))` }
        })
    }

    const renderError = () => {
        if (props.isError) {
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

export default Gifs;