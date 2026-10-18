import React, { useState } from 'react';
import './Quiz.css'
import quizQuestions from '../../assets/data';

const Quiz = () => {

    let [index, setIndex] = useState(0)
    let [lock, setLock] = useState(false);
    let [selectedAnswer, setSelectedAnswer] = useState(null)
    let [quizFinished, setQuizFinished] = useState(false)
    let [score, setScore] = useState(0)
    let question = quizQuestions[index]

    function checkAnswer(e, answer) {
        if (lock) return;
        setSelectedAnswer(answer)
        setLock(true)
        if (answer.correct) {
            setScore((prev) => prev + 1)
        }
    }

    function handleQuestion() {
        if (!lock) return;
        if (index + 1 < quizQuestions.length) {
            setIndex((prev) => prev + 1)
            setLock(false)
            setSelectedAnswer(null)
            setQuestion(quizQuestions[index])


        } else {
            setQuizFinished(true)
        }
    }
    if (quizFinished) {
        return (
            <>
                <div className="container">
                    <h1>Quiz Completed!</h1>
                    <hr />
                    <h2>You scored {score} out of {quizQuestions.length}</h2>
                    <button
                        onClick={() => {
                            setIndex(0);
                            setScore(0);
                            setLock(false);
                            setSelectedAnswer(null);
                            setQuizFinished(false);
                        }}
                        className="cursor-pointer px-5 py-3 bg-violet-500 text-white font-semibold rounded-md hover:bg-violet-700 mt-4"
                    >
                        Reset Quiz
                    </button>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="container">
                <div className='flex justify-between'>
                    <h1>Quiz App</h1>
                    <span> {score}</span>
                </div>
                <hr />
                <h2>{index + 1}. {question.question}</h2>
                <ul>
                    {
                        question.answers.map((answer, id) => {

                            let styleClass = ' border-amber-300 bg-amber-100 text-amber-600';

                            if (lock) {
                                if (answer.correct) {
                                    styleClass = ' border-green-500 bg-green-100 text-green-700 font-bold';
                                } else if (answer === selectedAnswer) {
                                    styleClass = ' border-red-500 bg-red-100 text-red-700';
                                }
                            }

                            return (

                                <>
                                    <li key={id} onClick={(e) => { checkAnswer(e, answer) }}
                                        className={`cursor-pointer border-1 border-solid ${styleClass}`}>{answer.text}</li>
                                </>
                            )
                        })
                    }


                </ul>
                <button onClick={handleQuestion}
                    className='cursor-pointer  px-5 py-3 bg-violet-500 text-white text-[14px] font-semibold rounded-md hover:bg-violet-700'>
                    Next
                </button>
                <div className="text-slate-400 text-[14px]">{index + 1} of {quizQuestions.length} questions</div>

            </div>
        </>
    )
}

export default Quiz;