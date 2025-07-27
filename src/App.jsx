// src/App.jsx
import React from "react";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
      {/* Campaign Header */}
      <header className="bg-blue-800 text-white text-center py-3 rounded mb-6 shadow">
        <h1 className="text-xl sm:text-2xl font-bold">
          ✅ Vote 4 Enyan Ebenezer as UGASS Vice President
        </h1>
      </header>

      {/* Main Quiz Section */}
      <main className="flex flex-col items-center justify-center">
        <Quiz />
      </main>
    </div>
  );
}

export default App;
