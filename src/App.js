import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubjectList from './SubjectList';
import QuizList from './QuizList';
import QuizScreen from './QuizScreen';
import './App.css';

function App() {
  return (
   
    
      <Routes>
        <Route path="/" element={<SubjectList />} />
        <Route path="/quizzes" element={<QuizList />} />
        <Route path="/quiz" element={<QuizScreen />} />
      </Routes>
  
   );





}

export default App;