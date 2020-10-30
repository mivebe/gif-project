import React from "react";
import Spinner from "./Spinner";
import FavBtn from "./FavBtn"

const Gifs = (props) => {

    const keys = Object.keys({ ...localStorage }).filter((el) => {
        return el.includes("favorited");
    });



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
                            <FavBtn keys={keys} gif={el} />
                        </div>
                    </div>
                    <img src={el.images.fixed_height.url} alt="404" style={{ borderRadius: 20 }} />
                </div>
            )
        });
    };



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