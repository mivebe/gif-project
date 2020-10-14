import React from "react";

const Favorites = () => {
    return Object.values({ ...localStorage }).map((el) => {
        return (
            <div key={el.substring(31, 35)}>
                <img src={el} alt={"404"} />
            </div>
        )
    });

}

export default Favorites