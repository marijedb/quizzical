import { useEffect, useState } from 'react';
import './App.css';
import Start from './components/Start';
import Quiz from './components/Quiz';
import { nanoid } from 'nanoid';

function shuffleArray(arr) {
  arr.sort(() => Math.random() - 0.5);
}

function App() {
  const [quizStart, setQuizStart] = useState(false)
  const [questions, setQuestions] = useState(null)
  const [checkedAnswers, setCheckedAnswers] = useState(false)

    
  async function startQuiz(){
      setQuizStart(prevValue => !prevValue)
  }

  const getQuestions = async () => {
    try {
        const response = await fetch(`https://opentdb.com/api.php?amount=5&difficulty=easy`)
        const data = await response.json()
        let shuffledAnswers = []
        for(let i = 0; i < data.results.length; i++){
          let answers = [data.results[i].correct_answer, data.results[i].incorrect_answers].flat()
          shuffleArray(answers)
          shuffledAnswers.push(answers)
        }
        setQuestions(() => {
          const results = data.results.map((singleQuestion, index) => {
            return {
              question: singleQuestion.question,
              correctAnswer: singleQuestion.correct_answer,
              incorrectAnswers: [singleQuestion.incorrect_answers],
              allAnswers: shuffledAnswers[index],
              chosenAnswer: "",
              correctlyAnswered: false,
              id: nanoid(),
            }
          })
          return results
        })
    } catch (err) {
        console.log(err.message)
    }
}

function selectAnswer(event){
  const clickedAnswer = event.target.getAttribute("value")
  const clickedParentId = event.target.parentNode.parentNode.id
  
  setQuestions(prevValue => prevValue.map(question => {
    return question.id === clickedParentId ? {
      ...question,
      chosenAnswer: clickedAnswer
    } : 
    question
  }))
}

function checkAnswers(){
  const allAnswered = questions.map(question => {
    return question.chosenAnswer ? true : false
  })
  if(!allAnswered.includes(false)){
    setCheckedAnswers(prevValue => !prevValue)
    setQuestions(prevQuestions => prevQuestions.map(question => {
      return question.chosenAnswer === question.correctAnswer ? {
        ...question,
        correctlyAnswered: true
      } : {
        ...question,
        correctlyAnswered: false
      }
    }))
  } 
}

function playAgain(){
  setQuizStart(false)
  setQuestions(null)
  setCheckedAnswers(false)
  getQuestions()

}

useEffect(() => {
  getQuestions()
},[])


  return (
    <div>
      {quizStart ? <Quiz quizStart={quizStart} allQuestions={questions} checkedAnswers={checkedAnswers} selectAnswer={(e) => selectAnswer(e)} checkAnswers={() => checkAnswers()} playAgain={playAgain} /> :  
      <Start questionsReady={questions} handleClick={() => startQuiz()} />}
    </div>
  );
}

export default App;
