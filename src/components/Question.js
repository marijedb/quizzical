import React from "react";
import {decode} from 'html-entities';
import { nanoid } from 'nanoid'

function Question(props){

    // const elements = props.allQuestions.map(question => {
    //         const answers = question.allAnswers.map((answer, index) => {
    //             return <p key={index} className="answer" value={answer} onClick={props.selectAnswer}>{decode(answer)}</p>
    //         })
    
    //         return <div key={question.id} id={question.id} className="question-container">
    //                     <div key={nanoid()} className="question">
    //                         {decode(question.question)}
    //                     </div>
    //                     <div key={nanoid()} className="answers">
    //                         {answers}
    //                     </div>
    //                 </div>
    //     })
    const answerElements = props.answers.map((answer, index) => {
        return <p key={index} className="answer" value={answer} onClick={props.selectAnswer}>{decode(answer)}</p>
    })

    return(
        <div key={nanoid()} className="quiz--content">
            <div key={props.id} id={props.id} className="question-container">
                <div key={nanoid()} className="question">
                    {decode(props.question)}
                </div>
                <div key={nanoid()} className="answers">
                    {answerElements}
                </div>
            </div>
        </div>
    )
}

export default Question;