import { useState } from "react";
import Quiz from "./components/Quiz";
import Study from "./components/Study";
import "./App.css";

function App() {
  const [mode, setMode] = useState("learn");
  const [quizCategory, setQuizCategory] = useState(null);

  function handleTestYourself(category) {
    setQuizCategory(category);
    setMode("quiz");
  }

  function handleSwitchToQuiz() {
    setQuizCategory(null);
    setMode("quiz");
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Database Exam Trainer</h1>
        <p className="subtitle">
          Practice for your database course final exam
        </p>
        <nav className="mode-tabs">
          <button
            className={`mode-tab ${mode === "learn" ? "active" : ""}`}
            onClick={() => setMode("learn")}
          >
            Learn
          </button>
          <button
            className={`mode-tab ${mode === "quiz" ? "active" : ""}`}
            onClick={handleSwitchToQuiz}
          >
            Quiz
          </button>
        </nav>
      </header>
      <main>
        {mode === "learn" ? (
          <Study onTestYourself={handleTestYourself} />
        ) : (
          <Quiz key={quizCategory} initialCategory={quizCategory} />
        )}
      </main>
      <footer className="app-footer">
        <p>Chas Academy &mdash; Database Course</p>
      </footer>
    </div>
  );
}

export default App;
