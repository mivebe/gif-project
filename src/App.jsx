import React from "react";


import logo from "./media/logo.jpg";

import "./styles/App.css";
import "./styles/Navbar.css";
import "./styles/Footer.css";
import "./styles/Showcase.css";

import Gifs from "./components/Gifs";
import { darkmode, options } from "./components/Modes" // eslint-disable-line
import { handleInput, handleSearch } from "./components/Handlers"

const App = () => (
    <div id="body">
        <nav>
            <input id="nav-toggle" type="checkbox"></input>
            <div className="logo"><img id="logo" src={logo} alt="404" height="60vh" /><strong>M</strong>i<strong>V</strong>e<strong>B</strong>e</div>
            <ul className="links">
                <li><a href="#home">Trending</a></li>
                <li><a href="#home">Favorites</a></li>
                <li><a href="#home">Uploaded</a></li>
                <li><input type="text" placeholder="Search for a Gif" onChange={handleInput}></input></li>
                <li><a href="#home" onClick={handleSearch}>Search</a></li>
            </ul>
            <label htmlFor="nav-toggle" className="icon-burger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </label>
        </nav>
        <div id="showcase">
            <Gifs />
        </div>
        <footer>© mivebe</footer>
    </div>
);

export default App;