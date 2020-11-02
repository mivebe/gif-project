import React, { useContext } from "react";
import Spinner from "./Spinner";
import FavBtn from "./FavBtn"
import { InnerStorage } from "../App";

const Gifs = ({ isError, isLoading, data }) => {
    const { favorited } = useContext(InnerStorage)

    const renderGifs = () => {

        if (isLoading) {
            return <Spinner />
        };
        return data.map(el => {
            const isFavorited = Boolean(favorited.find(f => f.id === el.id))
            return (
                <div key={el.id} className="gif" >
                    <div className="gif-info">
                        <p id="name" style={{ margin: 10 }}>{el.title || "Nameless GIF"}</p>
                        <div style={{ textAlign: "left", paddingLeft: 5, paddingRight: 5 }} >
                            <p>{el.import_datetime || "date:N/A"}</p>
                            <p style={{ display: "none" }}>{el.id}</p>
                            <FavBtn isFavorited={isFavorited} gif={el} />
                        </div>
                    </div>
                    <img src={el.images.fixed_height.url} alt="404" style={{ borderRadius: 20 }} />
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

export default Gifs;