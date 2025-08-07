import React from "react";

export default function WelcomeModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col lg:flex-row">
        {/* Left: Image - Full height on larger screens */}
        <div className="lg:w-1/2 h-64 lg:h-auto relative">
          <img
            src="/ebenezer.jpg" 
            alt="Enyan Ebenezer"
            className="w-full h-full object-contain"
          />
          {/* Campaign badge on image */}
          <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
            <span className="font-bold">UGASS VP Candidate</span>
          </div>
        </div>

        {/* Right: Content */}
        <div className="p-8 lg:w-1/2 flex flex-col overflow-y-auto">
          <div className="mb-6">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                Practice Quiz Platform
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Prepare with this trial quiz designed to reflect the real IA experience. Practice, learn, and boost your confidence
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <p className="font-medium text-blue-800">
                  <span className="font-bold">Pro Tip:</span> Try multiple attempts to master the material!
                </p>
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p>Brought to you by <strong className="text-blue-600">Enyan Ebenezer</strong> in collaboration with UGASS</p>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p><strong className="text-blue-600">Vote Enyan Ebenezer</strong> - A leader who prioritizes student success</p>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p><strong className="text-blue-600">Vote Enyan Ebenezer</strong> for UGASS Vice President</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="mt-4 w-full lg:w-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-8 rounded-lg font-medium text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center"
          >
            Start Practice Quiz
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}