import React from "react";
import {decode} from 'html-entities';
import { nanoid } from 'nanoid'

function Question(props){

    const styles = {
        activeStyle: {
            backgroundColor: "#D6DBF5"
        },
        inactiveStyle: {
            backgroundColor: "#F5F7FB"
        },
        correctStyle: {
            backgroundColor: "#94D7A2"
        },
        incorrectStyle: {
            backgroundColor: "#F8BCBC",
            opacity: "0.5"
        },
        opacityStyle: {
            opacity: "0.5"
        }
    }

    function setStyling(answer, hasChosen, correctAnswered, correctAnswer, checkedAnswers){
        if(checkedAnswers){
            if(correctAnswered){
                if(hasChosen !== answer) {
                    return styles.opacityStyle
                }
                return styles.correctStyle
            } else {
                if(correctAnswer === answer){
                    return styles.correctStyle
                } else if(hasChosen === answer){
                    return styles.incorrectStyle
                }
                return styles.opacityStyle
            }
        } else {
            if(hasChosen){
                if(hasChosen !== answer){
                    return styles.opacityStyle
                }
                return styles.activeStyle
            } 
        }
    }

    const answerElements = props.answers.map((answer, index) => {
        return <p 
            key={index} 
            style={(setStyling(answer, props.hasChosen, props.correctlyAnswered, props.correctAnswer, props.checkedAnswers))}
            className="answer" 
            value={answer} 
            onClick={props.selectAnswer}>
                {decode(answer)}
                </p>
    })

    return (
        <div key={nanoid()} className="quiz--content">
            <div key={props.id} id={props.id} className="question-container">
                <div key={nanoid()} className="question">
                    {decode(props.question)}
                </div>
                <div key={nanoid()} className="answers">
                    {answerElements}
                </div>
                <hr className="question--divider" />
            </div>
        </div>
    )
}

export default Question;