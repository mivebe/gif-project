import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';

import logo from "./media/logo.jpg";
import Trending from "./components/Trending"
import Favorites from "./components/Favorites"
import { Uploaded } from "./components/Uploaded"
import { Search } from "./components/Search"

import "./styles/App.css";
import "./styles/Navbar.css";
import "./styles/Footer.css";
import "./styles/Showcase.css";

const init = { uploaded: [], favorited: [], offset: 0 }
export const InnerStorage = createContext(init)


const getFromLS = (key) => {
    const res = localStorage.getItem(key);
    if (!res) { return null }
    return JSON.parse(res)
}

const date = new Date().getFullYear();

const App = () => {
    const [searchText, setSearchText] = useState("");
    const [uploaded, setUploaded] = useState(getFromLS("uploaded") || []);
    const [favorited, setFavorited] = useState(getFromLS("favorited") || []);
    const [offset, setOffset] = React.useState(0)

    useEffect(() => {
        localStorage.setItem('uploaded', JSON.stringify(uploaded))
    }, [uploaded])
    useEffect(() => {
        localStorage.setItem('favorited', JSON.stringify(favorited))
    }, [favorited])

    return (
        <InnerStorage.Provider value={{ uploaded, setUploaded, favorited, setFavorited, offset, setOffset }}>
            <div id="body">
                <Router>
                    <nav>
                        <input id="nav-toggle" type="checkbox"></input>
                        <div className="logo"><img id="logo" src={logo} alt="404" height="60vh" /><strong>M</strong>i<strong>V</strong>e<strong>B</strong>e</div>
                        <ul className="links">
                            <li><NavLink to="/">Trending</NavLink></li>
                            <li><NavLink to="/favorites">Favorites</NavLink></li>
                            <li><NavLink to="/uploaded">Uploaded</NavLink></li>
                            <li><input type="text" placeholder="Search for a Gif" value={searchText} onChange={e => setSearchText(e.target.value)}></input></li>
                            <li ><NavLink to={`/search/${searchText}`} >Search</NavLink></li>

                        </ul>
                        <label htmlFor="nav-toggle" className="icon-burger">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </label>
                    </nav>

                    <div id="showcase">
                        <Routes>
                            <Route path="/favorites" element={<Favorites />} />
                            <Route path="/uploaded" element={<Uploaded />} />
                            <Route path="/search/:filter" element={<Search searchText={searchText} />} />
                            <Route path="/" exact element={<Trending offset={offset} />} />
                        </Routes>
                    </div>
                </Router>
                <footer>© mivebe {date}</footer>
            </div>
        </InnerStorage.Provider>
    )
};

export default App;