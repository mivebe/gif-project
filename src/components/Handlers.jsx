import React from "react";
import ReactDOM from 'react-dom';
import Search from "./Search";
import $ from "jquery"

let input = "";

const handleSearch = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("showcase"));
    ReactDOM.render(<Search />, document.getElementById("showcase"));
}

const handleInput = (e) => {
    input = e.target.value;
}

const handleScroll = () => {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        console.log("you are at the bottom of the page");
    };
}

export { handleSearch, handleInput, input, handleScroll }