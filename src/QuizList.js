import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuizList() {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url = localStorage.getItem('quizListUrl');
    fetch(url)
      .then(res => res.json())
      .then(data => setQuizzes(data));
  }, []);

  const handleQuizClick = (quizUrl) => {
    localStorage.setItem('quizUrl', quizUrl);
    navigate('/quiz');
  };

  return (
    <div>
      <h2>Select Quiz</h2>
      {quizzes.map(q => (
        <button key={q.quizNo} onClick={() => handleQuizClick(q.quizUrl)}>
          {q.quizName}
        </button>
      ))}
    </div>
  );
}
export default QuizList;