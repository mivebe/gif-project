import React from "react";
import "../styles/Uploaded.css";


const Uploaded = () => {


    const handleUploadClick = () => {
        document.getElementById("upload-file").click();
    }
    const handleUploadFile = async (e) => {
        console.log(e.target.files[0]);
        const chosenFile = (e.target.files[0])
        console.log(chosenFile);

        const fileFormData = new FormData();
        fileFormData.append("file", chosenFile, chosenFile.name);
        console.log(fileFormData);

        const response = await fetch(`https://upload.giphy.com/v1/gifs?api_key=m5o2VM82nhD0xeSF6Drxh2SQ4DjWJiGh`, {
            method: 'POST',
            body: fileFormData
        }, {
            onUploadProgress: (e) => {
                console.log(Math.round((e.loaded / e.total) * 100) + "%");
            }
        })
        console.log(await response.json());
    }

    return (
        <div id="uploaded-container">
            <p id="title">Your Uploaded Gifs</p>
            <input type="file" id="upload-file" onChange={handleUploadFile} />
            <div>
                <button className="upload-button" onClick={handleUploadClick}>Upload Gif</button>
            </div>
            <div></div>
        </div>
    )


}

export { Uploaded }