import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import axios from "axios";

import logo from "./media/logo.jpg";


import "./styles/App.css";
import "./styles/Navbar.css";
import "./styles/Footer.css";
import "./styles/Showcase.css";

import Gifs from "./components/Gifs";
import { darkmode, options } from "./components/Modes" // eslint-disable-line


const useInitialGifs = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setIsError(false);

            try {
                const response = await axios("https://api.giphy.com/v1/gifs/trending", {
                    params: {
                        api_key: "m5o2VM82nhD0xeSF6Drxh2SQ4DjWJiGh",
                        limit: 40,
                        offset: 0
                    }
                });
                setData(response.data.data);

            } catch (err) {
                setIsError(true)
                setTimeout(() => { setIsError(false) }, 5000)
            }
            setIsLoading(false)
        };
        fetchData()
    }, []);

    const res = React.useMemo(() => ({
        data,
        isLoading,
        isError
    }), [data, isLoading, isError])

    return res
}

const App = () => {
    const [searchText, setSearchText] = useState('')

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const initialParams = useInitialGifs(); // { data, isError, isLoading }

    React.useEffect(() => {
        setData(initialParams.data)
        setIsLoading(initialParams.isLoading)
        setIsError(initialParams.isError)
    }, [initialParams])

    const handleSearchClick = () => {
        const fetchData = async () => {
            setIsLoading(true);
            setIsError(false);

            try {
                const response = await axios(`https://api.giphy.com/v1/gifs/search?api_key=m5o2VM82nhD0xeSF6Drxh2SQ4DjWJiGh&q=${searchText}&limit=40`);
                setData(response.data.data);

            } catch (err) {
                setIsError(true)
                setTimeout(() => { setIsError(false) }, 5000)
            }
            setIsLoading(false)
        };
        fetchData()
    }

    return (
        <div id="body">
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
                            <li><a href="/search" onClick={handleSearchClick}>Search</a></li>
                        </Link>
                    </Router>
                </ul>
                <label htmlFor="nav-toggle" className="icon-burger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </label>
            </nav>
            <div id="showcase">
                <Gifs {...{ data, isError, isLoading }} />
            </div>
            <footer>© mivebe</footer>
        </div>
    )
};



export default App;