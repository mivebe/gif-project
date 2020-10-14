
import React from "react";
import Spinner from "./Spinner";

const Gifs = (props) => {

    const cutInfo = (infoLine) => {
        return (infoLine.includes("GIF")) ? infoLine.substring(0, infoLine.indexOf("GIF")) : infoLine.substring(0, 10);
    };

    const saveInLS = (e) => {
        const id = e.target.previousSibling.toString();
        const url = e.target.parentNode.parentNode.nextSibling.src.toString();
        (localStorage.getItem(id)) ? localStorage.removeItem(id) : localStorage.setItem(id, url);
    }

    const renderGifs = () => {
        if (props.isLoading) {
            return <Spinner />
        };
        return props.data.map(el => {
            return (
                <div key={el.id} className="gif" >
                    <div className="gif-info">
                        <p style={{ margin: 10 }}>{cutInfo(el.title) || "Nameless GIF"}</p>
                        <div style={{ textAlign: "left", paddingLeft: 5, paddingRight: 5 }} >
                            {cutInfo(el.import_datetime) || "date:N/A"}
                            <br></br>
                            {el.id}
                            <button onClick={saveInLS} ></button>
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