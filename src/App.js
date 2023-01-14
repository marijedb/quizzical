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
  
  async function startQuiz(){
      setQuizStart(prevValue => !prevValue)
  }

  const getQuestions = async () => {
    try {
        const response = await fetch(`https://opentdb.com/api.php?amount=5`)
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
              id: nanoid()
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
  console.log(questions)
}

function checkAnswers(){
  const allAnswered = questions.map(question => {
    if(question.chosenAnswer) {
      return true
    } else {
      return false
    }
  })
  console.log(allAnswered)
}

useEffect(() => {
  getQuestions()
},[])

  return (
    <div>
      {quizStart ? <Quiz quizStart={quizStart} allQuestions={questions} selectAnswer={(e) => selectAnswer(e)} handleClick={() => checkAnswers() } /> :  
      <Start questionsReady={questions} handleClick={() => startQuiz()} />}
    </div>
  );
}

export default App;
