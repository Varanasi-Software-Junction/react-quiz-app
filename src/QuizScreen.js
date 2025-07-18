import { useEffect, useState } from 'react';

function QuizScreen() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const url = localStorage.getItem('quizUrl');
    fetch(url)
      .then(res => res.json())
      .then(data => setQuestions(data));
  }, []);

  const handleOptionClick = (option) => {
    if (option === questions[index].answer) setScore(score + 1);

    const next = index + 1;
    if (next < questions.length) {
      setIndex(next);
    } else {
      setShowResult(true);
    }
  };

  if (!questions.length) return <p>Loading...</p>;

  if (showResult) return <h2>Your Score: {score}/{questions.length}</h2>;

  const q = questions[index];

  return (
    <div>
      <h3>Q{index + 1}: {q.question}</h3>
      {q.options.map((opt, i) => (
        <button key={i} onClick={() => handleOptionClick(opt)}>{opt}</button>
      ))}
    </div>
  );
}

export default QuizScreen;
