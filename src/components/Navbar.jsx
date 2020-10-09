import React, { useState } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "../styles/Navbar.css";
import logo from "../media/logo.jpg";
import Search from "./Search"


const Navbar = () => {

    const [searchText, setSearchText] = useState('');


    return (
        <nav>
            <input id="nav-toggle" type="checkbox"></input>
            <div className="logo"><img id="logo" src={logo} alt="404" height="60vh" /><strong>M</strong>i<strong>V</strong>e<strong>B</strong>e</div>
            <ul className="links">
                <Router>
                    <Link to="/home" >
                        <li><a href="/home">Trending</a></li>
                    </Link>
                    <Link to="/favorites">
                        <li><a href="/favorites">Favorites</a></li>
                    </Link>
                    <Link to="/uploaded">
                        <li><a href="/uploaded">Uploaded</a></li>
                    </Link>
                    <li><input type="text" placeholder="Search for a Gif" value={searchText} onChange={e => setSearchText(e.target.value)}></input></li>
                    <Link to="/search">
                        <li><a href="/search" onClick={Search(searchText)}>Search</a></li>
                    </Link>
                </Router>
            </ul>
            <label htmlFor="nav-toggle" className="icon-burger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </label>
        </nav>
    );
}

export { Navbar }