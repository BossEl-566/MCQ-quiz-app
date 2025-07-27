// src/components/WelcomeModal.jsx
import React from "react";

export default function WelcomeModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg overflow-hidden max-w-3xl w-full flex flex-col md:flex-row shadow-lg">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="/ebenezer.jpg" 
            alt="Enyan Ebenezer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="p-6 md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">Take this trial quiz</h2>
            <p className="mb-3">
              Designed to mirror exactly what you'll face in the actual IA. Practice. Learn. Improve and try as many times as you can.
            </p>
            <p className="mb-2 text-sm text-gray-700">
              Brought to you by <strong>Enyan Ebenezer</strong> in collaboration with UGASS.
            </p>
            <p className="mt-4 font-medium text-green-700">
              ✅ Vote Enyan Ebenezer, a leader who puts your success first!
            </p>
            <p className="text-blue-700 font-bold">
              ✅ Vote Enyan Ebenezer for UGASS Vice President.
            </p>
          </div>

          <button
            onClick={onClose}
            className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 self-start"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
