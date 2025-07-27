// src/App.jsx
import React, { useState } from "react";
import Quiz from "./components/Quiz";
import WelcomeModal from "./components/WelcomeModal";

function App() {
  const [showModal, setShowModal] = useState(true); // show on first load

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
      {/* Campaign Header */}
      <header className="bg-blue-800 text-white text-center py-3 rounded mb-6 shadow">
        <h1 className="text-xl sm:text-2xl font-bold">
          ✅ Vote 4 Eyan Ebenezer as UGASS Vice President
        </h1>
      </header>

      {/* Modal */}
      {showModal && <WelcomeModal onClose={() => setShowModal(false)} />}

      {/* Main Quiz Section */}
      {!showModal && (
        <main className="flex flex-col items-center justify-center">
          <Quiz />
        </main>
      )}
    </div>
  );
}

export default App;
