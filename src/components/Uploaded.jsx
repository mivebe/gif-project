import React, { useEffect, useState, useContext } from "react";
import axios from "axios"
import "../styles/Uploaded.css";
import Gifs from "./Gifs"
import { InnerStorage } from "../App"

const Uploaded = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { uploaded, setUploaded } = useContext(InnerStorage);

    const handleUploadClick = () => {
        document.getElementById("upload-file").click();
    }

    const handleUploadFile = async (e) => {
        const chosenFile = (e.target.files[0])
        const fileFormData = new FormData();
        fileFormData.append("file", chosenFile, chosenFile.name);


        try {
            const response = await fetch(`https://upload.giphy.com/v1/gifs?api_key=m5o2VM82nhD0xeSF6Drxh2SQ4DjWJiGh`, {
                method: 'POST',
                body: fileFormData
            })
            const resAsJSON = await response.json();
            console.log(resAsJSON.data.id);
            setUploaded([...uploaded, resAsJSON.data.id])

        } catch (err) {
            setIsError(true)
            setTimeout(() => { setIsError(false) }, 5000)
        }
    }

    useEffect(() => {

        const IDs = ([...uploaded])

        if (IDs.filter(id => id !== undefined).length === 0) {
            setData([])
            return
        }

        const fetchData = async () => {
            setIsLoading(true);
            setIsError(false);

            try {
                const response = await axios("https://api.giphy.com/v1/gifs", {
                    params: {
                        api_key: "m5o2VM82nhD0xeSF6Drxh2SQ4DjWJiGh",
                        ids: IDs.join()
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
    }, [uploaded]);

    return (
        <div>
            <div id="uploaded-container">
                <p id="title">Your Uploaded Gifs</p>
                <input type="file" id="upload-file" onChange={handleUploadFile} />
                <button className="upload-button" onClick={handleUploadClick}>Upload Gif</button>
            </div>
            <Gifs data={data} isLoading={isLoading} isError={isError} />
        </div>
    )


}

export { Uploaded }