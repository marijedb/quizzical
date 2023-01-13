import React from "react";

function Start(props){
    return(
        <div className="container start">
            <div className="start--content">
                <h1 className="start--title">Quizzical</h1>
                <p>Test your general knowledge. Start quiz now!</p>
                <div className="start--button btn" onClick={props.handleClick}>Start Quiz</div>
            </div>
        </div>
    )
}

export default Start