import React from "react";
import Search from "./Search"

let input = "";



const handleSearch = () => {
    console.log(`Input currently is ${input}`);
    console.log(document.getElementById("showcase"));
    document.getElementById("showcase").value = <Search />;
}

const handleInput = (e) => {
    input = e.target.value;
}

export { handleSearch, handleInput, input }