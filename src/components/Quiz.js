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
            <div>
                {elements}
            </div>
        </div>
    )
}

export default Quiz

/* <h3>{props.allQuestions[0].question}</h3> */
// props.question[0].question
// props.question[0].correct_answer
// props.questions[0].incorrect_answers[0, 1, 2]
// type: Boolean, multiple