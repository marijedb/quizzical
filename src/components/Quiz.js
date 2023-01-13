import React from "react";
import {decode} from 'html-entities';
import { nanoid } from 'nanoid'

function Quiz(props) {

    function shuffleArray(arr) {
        arr.sort(() => Math.random() - 0.5);
    }

    const elements = props.allQuestions.map(question => {
        const answers = question.allAnswers.map((answer, index) => {
            return <p key={index} className="answer">{decode(answer)}</p>
        })
        shuffleArray(answers)

        return <div key={nanoid()} className="question-container">
                    <div key={nanoid()} className="question">
                        {decode(question.question)}
                    </div>
                    <div key={nanoid()} className="answers">
                        {answers}
                    </div>
                </div>
    })
    
    return(
        <div className="container">
            <div className="quiz--content">
                {elements}
                <p>You answered 3/5 questions correctly!</p>
                <div className="quiz--button btn" onClick={props.handleClick}>Play Again</div>
            </div>
        </div>
    )
}

export default Quiz