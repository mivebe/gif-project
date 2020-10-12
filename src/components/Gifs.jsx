import React from "react";

import Spinner from "./Spinner";

const Gifs = (props) => {
    const renderGifs = () => {
        if (props.isLoading) {
            return <Spinner />
        };
        return props.data.map(el => {
            return (
                <div key={el.id} className="gif">
                    <img src={el.images.fixed_height.url} alt="404" />
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