import React from "react";
import {decode} from 'html-entities';
import { nanoid } from 'nanoid'

function Quiz(props) {

    const elements = props.allQuestions.map(question => {
        const answers = question.allAnswers.map((answer, index) => {
            return <p key={index} className="answer" value={answer} onClick={props.selectAnswer}>{decode(answer)}</p>
        })

        return <div key={question.id} id={question.id} className="question-container">
                    <div key={nanoid()} className="question">
                        {decode(question.question)}
                    </div>
                    <div key={nanoid()} className="answers">
                        {answers}
                    </div>
                </div>
    })

    const quizStarted = (<div className="quiz-result-container">
                            <div className="btn" onClick={props.handleClick}>Check Answers</div>
                        </div>)
    const quizEnded = (<div className="quiz-result-container">
                            <p className="quiz--results">You answered 3/5 questions correctly!</p>
                            <div className="btn" onClick={props.handleClick}>Play Again</div>
                        </div>)
    
    return(
        <div className="container">
            <div className="quiz--content">
                {elements}
                {props.quizStart ? quizStarted : quizEnded}
            </div>
        </div>
    )
}

export default Quiz