import React from "react";

function Start(props){
    return(
        <div className="container">
            <div className="start--content">
                <h1 className="start--title">Quizzical</h1>
                <p>Test your general knowledge. Start quiz now!</p>
                {props.questionsReady ? <div className="start--button btn" onClick={props.handleClick}>Start Quiz</div> : <p className="start--loading">Loading your Quiz</p>}
            </div>
        </div>
    )
}

export default Start