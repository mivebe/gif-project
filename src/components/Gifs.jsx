import React, { useContext, useRef, useCallback } from "react";
import Spinner from "./Spinner";
import FavBtn from "./FavBtn"
import { InnerStorage } from "../App";

const Gifs = ({ isError, isLoading, data }) => {
    const { favorited } = useContext(InnerStorage)

    const observer = useRef()
    const lastGif = useCallback(node => {
        if (isLoading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                console.log("last is seen");
            }
        })
        if (node) observer.current.observe(node)
        console.log("asd");
    }, [isLoading])


    const renderGifs = () => {

        if (isLoading) {
            return <Spinner />
        };
        return data.map((el, index) => {
            const isFavorited = Boolean(favorited.find(f => f.id === el.id));
            if (data.length === index + 1) {
                return (
                    <div key={el.id} ref={lastGif} className="gif" >
                        <div className="gif-info">
                            <p className="gif-name" >{el.title || "Nameless GIF"}</p>
                            <p className="dateAndBtn" >{el.import_datetime || "date:N/A"}<FavBtn isFavorited={isFavorited} gif={el} /></p>
                        </div>
                        <img src={el.images.fixed_height.url} alt="404" style={{ borderRadius: 20 }} />
                    </div>
                )
            } else {
                return (
                    <div key={el.id} className="gif" >
                        <div className="gif-info">
                            <p className="gif-name" >{el.title || "Nameless GIF"}</p>
                            <p className="dateAndBtn" >{el.import_datetime || "date:N/A"}<FavBtn isFavorited={isFavorited} gif={el} /></p>
                        </div>
                        <img src={el.images.fixed_height.url} alt="404" style={{ borderRadius: 20 }} />
                    </div>
                )
            }
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

export default Gifs;