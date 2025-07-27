import React, { useState } from "react";
import Quiz from "./components/Quiz";
import WelcomeModal from "./components/WelcomeModal";

function App() {
  const [showModal, setShowModal] = useState(true); // show on first load

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 flex flex-col">
      {/* Professional Header with Logo - full width */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-lg w-full">
        <div className="px-4 py-4 flex items-center justify-between w-full">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-lg shadow">
              {/* Replace with your actual logo */}
              <img src="/ugass.jpg" alt="Logo" className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold">UGASS Elections 2025</h1>
              <p className="text-xs md:text-sm text-blue-100">University of Ghana Actuarial Students Society</p>
            </div>
          </div>
          <div className="hidden md:block bg-blue-500 px-4 py-2 rounded-full shadow-inner">
            <span className="font-medium">Voting Platform</span>
          </div>
        </div>
        
        {/* Campaign Banner - full width */}
        <div className="bg-blue-800 py-2 text-center w-full">
          <p className="text-sm md:text-base font-medium text-blue-100">
            🗳 Vote for <span className="font-bold text-white">Enyan Ebenezer</span> as UGASS Vice President
          </p>
        </div>
      </header>

      {/* Main Content Area - will expand to fill remaining space */}
      <main className="flex-grow w-full">
        {/* Modal */}
        {showModal && <WelcomeModal onClose={() => setShowModal(false)} />}

        {/* Quiz Section - full width */}
        {!showModal && (
          <div className="w-full h-full flex items-center justify-center p-4">
            <Quiz />
          </div>
        )}
      </main>

      {/* Footer - full width */}
      <footer className="bg-gray-800 text-white text-center py-4 w-full">
        <p className="text-sm text-gray-300">
          © 2025 UGASS Elections | Developed by Elliot Datsomor
        </p>
      </footer>
    </div>
  );
}

export default App;