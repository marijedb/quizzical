import React from "react";
import { nanoid } from 'nanoid'
import Question from "./Question";

function Quiz(props) {

    const hasChosen = props.allQuestions.map(question => {
        return question.chosenAnswer
    })
    const isCorrect = props.allQuestions.map(question => {
        return question.correctlyAnswered
    })

    const allCorrect = isCorrect.filter(correctAnswers => {
        return correctAnswers === true
    })
    const elements = props.allQuestions.map((question, index) => {
        return <Question 
            key={index} 
            hasChosen={hasChosen[index]}
            correctlyAnswered={isCorrect[index]}
            id={question.id} 
            quizStart={props.quizStart} 
            answers={question.allAnswers} 
            correctAnswer={question.correctAnswer}
            question={question.question} 
            selectAnswer={props.selectAnswer} 
            handleClick={props.handleClick} 
            checkedAnswers={props.checkedAnswers}
            />
    })

    const quizStarted = (<div className="quiz-result-container">
                            <div className="btn" onClick={props.handleClick}>Check Answers</div>
                        </div>)
    const quizEnded = (<div className="quiz-result-container">
                            <p className="quiz--results">You answered {allCorrect.length} questions correctly!</p>
                            <div className="btn" onClick={props.handleClick}>Play Again</div>
                        </div>)
    
    return(
        <div className="container">
            <div key={nanoid()} className="quiz--content">
                {elements}
                {props.quizStart ? quizStarted : quizEnded}
            </div>
        </div>
    )
}

export default Quiz