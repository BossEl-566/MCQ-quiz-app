import React, { useState } from "react";
import allQuestions from "../data/questions.json";

function getRandomQuestions(all, count) {
  const shuffled = [...all].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function Quiz() {
  const [numQuestions, setNumQuestions] = useState("");
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleStartQuiz = () => {
    if (!numQuestions || numQuestions <= 0 || numQuestions > allQuestions.length) return;
    setIsLoading(true);
    setTimeout(() => {
      const selected = getRandomQuestions(allQuestions, parseInt(numQuestions));
      setQuizQuestions(selected);
      setIsLoading(false);
    }, 800); // Simulate loading
  };

  const handleAnswerSubmit = () => {
    const current = quizQuestions[currentQuestion];

    setAnswers([
      ...answers,
      { 
        question: current.question, 
        selected: selectedAnswer, 
        correct: current.answer,
        choices: current.choices 
      },
    ]);

    if (selectedAnswer === current.answer) setScore(score + 1);

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setFinished(false);
    setAnswers([]);
    setQuizQuestions([]);
    setNumQuestions("");
  };

  // Initial selection UI
  if (quizQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4 w-full">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl text-center transition-all duration-300 hover:shadow-2xl">
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Challenge</h2>
            <p className="text-gray-600">Test your knowledge with our interactive quiz</p>
          </div>
          
          <div className="mb-6 bg-indigo-50 p-4 rounded-lg">
            <p className="text-sm text-indigo-800 mb-2">📚 There are {allQuestions.length} questions available</p>
            <input
              type="number"
              placeholder="How many questions would you like?"
              value={numQuestions}
              onChange={(e) => setNumQuestions(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              min="1"
              max={allQuestions.length}
            />
          </div>
          
          <button
            onClick={handleStartQuiz}
            disabled={isLoading || !numQuestions || numQuestions <= 0 || numQuestions > allQuestions.length}
            className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-300 ${isLoading ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'} flex items-center justify-center`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Preparing Quiz...
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Start Quiz
              </>
            )}
          </button>
        </div>
      </div>
    );
  }

  // Quiz completion screen
  if (finished) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    let resultColor = "text-red-500";
    let resultMessage = "Keep practicing!";
    
    if (percentage >= 75) {
      resultColor = "text-green-500";
      resultMessage = "Excellent work!";
    } else if (percentage >= 50) {
      resultColor = "text-yellow-500";
      resultMessage = "Good effort!";
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl">
          <div className="text-center mb-8">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 ${percentage >= 75 ? 'bg-green-100' : percentage >= 50 ? 'bg-yellow-100' : 'bg-red-100'}`}>
              <span className={`text-3xl font-bold ${resultColor}`}>{percentage}%</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Completed!</h2>
            <p className={`text-xl font-medium ${resultColor} mb-4`}>{resultMessage}</p>
            <p className="text-gray-600">You scored {score} out of {quizQuestions.length}</p>
          </div>

          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
              <div 
                className="bg-indigo-600 h-4 rounded-full" 
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Question Review</h3>
          <div className="space-y-6">
            {answers.map((ans, index) => (
              <div key={index} className={`p-4 rounded-lg ${ans.selected === ans.correct ? 'bg-green-50' : 'bg-red-50'}`}>
                <div className="flex justify-between items-start mb-2">
                  <p className="font-semibold text-gray-800">{index + 1}. {ans.question}</p>
                  {ans.selected === ans.correct ? (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Correct</span>
                  ) : (
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Incorrect</span>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                  {ans.choices.map((choice, i) => (
                    <div 
                      key={i} 
                      className={`p-2 rounded border ${choice === ans.correct ? 'border-green-300 bg-green-50' : choice === ans.selected ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
                    >
                      {choice}
                      {choice === ans.correct && (
                        <span className="ml-2 text-green-600 text-sm">✓ Correct</span>
                      )}
                      {choice === ans.selected && choice !== ans.correct && (
                        <span className="ml-2 text-red-600 text-sm">✗ Your answer</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleRestart}
            className="mt-8 w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium text-white transition-all duration-300 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Start New Quiz
          </button>
        </div>
      </div>
    );
  }

  // Current quiz question
  const current = quizQuestions[currentQuestion];
  const progress = ((currentQuestion) / quizQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-600">Question {currentQuestion + 1} of {quizQuestions.length}</span>
            <span className="text-sm font-medium text-indigo-600">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-6">{current.question}</h2>
        
        <div className="space-y-3 mb-8">
          {current.choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => setSelectedAnswer(choice)}
              className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${selectedAnswer === choice ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'}`}
            >
              <div className="flex items-center">
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${selectedAnswer === choice ? 'border-indigo-500 bg-indigo-500' : 'border-gray-300'}`}>
                  {selectedAnswer === choice && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
                <span className={selectedAnswer === choice ? 'font-medium text-indigo-700' : 'text-gray-700'}>{choice}</span>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={handleAnswerSubmit}
          disabled={!selectedAnswer}
          className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-300 ${!selectedAnswer ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'} flex items-center justify-center`}
        >
          {currentQuestion + 1 === quizQuestions.length ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Finish Quiz
            </>
          ) : (
            <>
              Next Question
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  );
}