import React from "react";
import ReactDOM from 'react-dom'
import Search from "./Search";

let input = "";



const handleSearch = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("showcase"))
    ReactDOM.render(<Search />, document.getElementById("showcase"))
}

const handleInput = (e) => {
    input = e.target.value;
}

export { handleSearch, handleInput, input }