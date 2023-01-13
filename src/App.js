import { useEffect, useState } from 'react';
import './App.css';
import Start from './components/Start';
import Quiz from './components/Quiz';
import {decode} from 'html-entities';

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
        console.log(data.results)
        setQuestions(() => {
          const test = data.results.map((singleQuestion => {
            return {
              question: decode(singleQuestion.question),
              correctAnswer: singleQuestion.correct_answer,
              incorrectAnswers: [singleQuestion.incorrect_answers],
              allAnswers: [singleQuestion.correct_answer, singleQuestion.incorrect_answers].flat()
            }
          }))
          console.log(test)
          return test
        })
    } catch (err) {
        console.log(err.message)
    }
}

useEffect(() => {
  getQuestions()
}, [])

  return (
    <div>
      {quizStart ? <Quiz allQuestions={questions} /> :  <Start handleClick={() => startQuiz()} />}
    </div>
  );
}

export default App;
