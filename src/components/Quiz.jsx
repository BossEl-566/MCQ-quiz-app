// src/components/Quiz.jsx
import React, { useState } from "react";
import questions from "../data/questions.json";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState([]); // stores user answers

  const handleAnswerSubmit = () => {
    const current = questions[currentQuestion];

    // Store selected answer for review
    setAnswers([
      ...answers,
      { question: current.question, selected: selectedAnswer, correct: current.answer },
    ]);

    if (selectedAnswer === current.answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
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
  };

  if (questions.length === 0) {
    return <p>No questions available.</p>;
  }

  if (finished) {
    return (
      <div className="text-center max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-2">🎉 Quiz Completed!</h2>
        <p className="text-lg mb-4">Your score: {score} / {questions.length}</p>

        <h3 className="text-xl font-bold mb-2">Review:</h3>
        <ul className="text-left space-y-3 mb-6">
          {answers.map((ans, index) => (
            <li key={index}>
              <p className="font-semibold">{index + 1}. {ans.question}</p>
              <p>
                ✅ Correct Answer: <span className="text-green-600 font-medium">{ans.correct}</span>
              </p>
              <p>
                🧑 Your Answer:{" "}
                <span
                  className={
                    ans.selected === ans.correct
                      ? "text-green-600"
                      : "text-red-500"
                  }
                >
                  {ans.selected}
                </span>
              </p>
            </li>
          ))}
        </ul>

        <button
          onClick={handleRestart}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          🔁 Restart Quiz
        </button>
      </div>
    );
  }

  const current = questions[currentQuestion];

  return (
    <div className="w-full max-w-md bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">
        Question {currentQuestion + 1} of {questions.length}
      </h2>
      <p className="mb-4">{current.question}</p>
      <div className="space-y-2">
        {current.choices.map((choice, index) => (
          <label key={index} className="block">
            <input
              type="radio"
              name="answer"
              value={choice}
              checked={selectedAnswer === choice}
              onChange={() => setSelectedAnswer(choice)}
              className="mr-2"
            />
            {choice}
          </label>
        ))}
      </div>
      <button
        onClick={handleAnswerSubmit}
        disabled={!selectedAnswer}
        className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {currentQuestion + 1 === questions.length ? "Finish Quiz" : "Next"}
      </button>
    </div>
  );
}
