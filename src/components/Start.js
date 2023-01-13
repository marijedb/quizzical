import React from "react";
import blueBlob from "../images/blue-blob.png"
import yellowBlob from "../images/yellow-blob.png"

function Start(props){
    return(
        <div className="container">
            <img className="blue-blob" src={blueBlob} alt="blue blob" />
            <img className="yellow-blob" src={yellowBlob} alt="yellow blob" />
            <div className="start--content">
                <h1>Quizzical</h1>
                <p>Test your general knowledge. Start quiz now!</p>
                <div className="start--button" onClick={props.handleClick}>Start Quiz</div>
                {/* <button className="start--button" onClick={props.clicked}>Start Quiz</button> */}
            </div>
        </div>
    )
}

export default Start