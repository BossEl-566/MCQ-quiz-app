// src/components/WrittenQuestion.jsx
import React, { useState } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export default function WrittenQuestion({ 
  question, 
  solution, 
  steps,
  points,
  onComplete 
}) {
  const [userAnswer, setUserAnswer] = useState('');
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-lg mb-6">
      <div className="mb-4">
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
          Written Answer ({points} points)
        </span>
      </div>
      
      <div className="mb-6 text-lg font-medium">
        <BlockMath math={question} />
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Your Solution:
        </label>
        <textarea
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Show your work here..."
        />
      </div>
      
      <div className="flex justify-between items-center">
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          {showSolution ? 'Hide Solution' : 'Show Solution'}
        </button>
        
        <button
          onClick={onComplete}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Continue
        </button>
      </div>
      
      {showSolution && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-bold mb-2">Solution:</h3>
          <BlockMath math={solution} />
          
          {steps && (
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Grading Steps:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {steps.map((step, i) => (
                  <li key={i} className="text-sm text-gray-700">
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}