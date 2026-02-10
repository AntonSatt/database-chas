import Quiz from "./components/Quiz";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Database Exam Trainer</h1>
        <p className="subtitle">
          Practice for your database course final exam
        </p>
      </header>
      <main>
        <Quiz />
      </main>
      <footer className="app-footer">
        <p>Chas Academy &mdash; Database Course</p>
      </footer>
    </div>
  );
}

export default App;
