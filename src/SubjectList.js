
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SubjectList() {
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://varanasi-software-junction.github.io/pictures-json/quizzes/subjects.json')
      .then(res => res.json())
      .then(data => setSubjects(data));
  }, []);

  const handleClick = (quizListUrl) => {
    localStorage.setItem('quizListUrl', quizListUrl);
    navigate('/quizzes');
  };

  return (
    <div>
      <h2>Select Subject</h2>
      {subjects.map(sub => (
        <button key={sub.subjectNo} onClick={() => handleClick(sub.quizListUrl)}>
          {sub.subjectName}
        </button>
      ))}
    </div>
  );
}

export default SubjectList;