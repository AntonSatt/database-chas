import { useState, useMemo } from "react";
import questions from "../questions";

function shuffle(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const MAX_QUESTIONS = 20;

const CATEGORIES = [
  "All",
  ...Array.from(new Set(questions.map((q) => q.category))),
];

export default function Quiz({ initialCategory }) {
  const [category, setCategory] = useState(initialCategory || "All");
  const [started, setStarted] = useState(!!initialCategory);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState([]);

  const pool = useMemo(() => {
    const filtered =
      category === "All"
        ? questions
        : questions.filter((q) => q.category === category);
    return shuffle(filtered).slice(0, MAX_QUESTIONS);
  }, [category, started]); // re-shuffle when quiz starts

  const total = pool.length;
  const current = pool[currentIndex];

  function handleStart() {
    setStarted(true);
    setCurrentIndex(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setFinished(false);
    setAnswers([]);
  }

  function handleSelect(idx) {
    if (showResult) return;
    setSelected(idx);
  }

  function handleConfirm() {
    if (selected === null) return;
    const isCorrect = selected === current.correct;
    if (isCorrect) setScore((s) => s + 1);
    setAnswers((prev) => [
      ...prev,
      {
        question: current.question,
        picked: current.options[selected],
        correct: current.options[current.correct],
        isCorrect,
      },
    ]);
    setShowResult(true);
  }

  function handleNext() {
    if (currentIndex + 1 >= total) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
      setShowResult(false);
    }
  }

  function handleRestart() {
    setStarted(false);
    setFinished(false);
    setCurrentIndex(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
  }

  // --- Start screen ---
  if (!started) {
    return (
      <div className="quiz-start">
        <h2>Configure Your Quiz</h2>
        <label htmlFor="category-select">Choose a topic:</label>
        <select
          id="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES.map((cat) => {
            const available =
              cat === "All"
                ? questions.length
                : questions.filter((q) => q.category === cat).length;
            const shown = Math.min(available, MAX_QUESTIONS);
            return (
              <option key={cat} value={cat}>
                {cat} ({shown} of {available} questions)
              </option>
            );
          })}
        </select>
        <button className="btn-primary" onClick={handleStart}>
          Start Quiz
        </button>
      </div>
    );
  }

  // --- Results screen ---
  if (finished) {
    const pct = Math.round((score / total) * 100);
    return (
      <div className="quiz-results">
        <h2>Quiz Complete!</h2>
        <div className="score-display">
          <span className="score-number">{score}</span>
          <span className="score-divider">/</span>
          <span className="score-total">{total}</span>
        </div>
        <p className="score-pct">{pct}% correct</p>
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="progress-fill" style={{ width: `${pct}%` }}></div>
        </div>
        {pct >= 80 ? (
          <p className="result-msg pass">Great job! You are well prepared.</p>
        ) : pct >= 50 ? (
          <p className="result-msg okay">
            Not bad, but review the topics you missed.
          </p>
        ) : (
          <p className="result-msg fail">
            Keep studying! Review the course material and try again.
          </p>
        )}

        <details className="review-details">
          <summary>Review your answers</summary>
          <ul className="review-list">
            {answers.map((a, i) => (
              <li key={i} className={a.isCorrect ? "review-correct" : "review-wrong"}>
                <p className="review-q">
                  {i + 1}. {a.question}
                </p>
                <p>
                  Your answer: <strong>{a.picked}</strong>
                </p>
                {!a.isCorrect && (
                  <p>
                    Correct answer: <strong>{a.correct}</strong>
                  </p>
                )}
              </li>
            ))}
          </ul>
        </details>

        <button className="btn-primary" onClick={handleRestart}>
          Try Again
        </button>
      </div>
    );
  }

  // --- Question screen ---
  return (
    <div className="quiz-question">
      <div className="quiz-header">
        <span className="quiz-progress">
          Question {currentIndex + 1} of {total}
        </span>
        <span className="quiz-score">Score: {score}</span>
      </div>
      <div className="progress-bar small">
        <div
          className="progress-fill"
          style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
        ></div>
      </div>
      <span className="quiz-category">{current.category}</span>
      <h3 className="question-text">{current.question}</h3>
      <ul className="options-list">
        {current.options.map((opt, idx) => {
          let cls = "option";
          if (selected === idx) cls += " selected";
          if (showResult) {
            if (idx === current.correct) cls += " correct";
            else if (idx === selected) cls += " wrong";
          }
          return (
            <li key={idx}>
              <button className={cls} onClick={() => handleSelect(idx)}>
                <span className="option-letter">
                  {String.fromCharCode(65 + idx)}
                </span>
                {opt}
              </button>
            </li>
          );
        })}
      </ul>
      {!showResult ? (
        <button
          className="btn-primary"
          disabled={selected === null}
          onClick={handleConfirm}
        >
          Confirm Answer
        </button>
      ) : (
        <button className="btn-primary" onClick={handleNext}>
          {currentIndex + 1 >= total ? "See Results" : "Next Question"}
        </button>
      )}
    </div>
  );
}
