import React from "react";

import "../styles/Spinner.css"

const Spinner = () => {
    return (
        <div className="spinner-container">
            <div className="spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

//<i className="fa fa-sync-alt fa-4x fa-spin" />
//<img src={require("../media/spinner-thick.svg.png")} alt="404" />


export default Spinner