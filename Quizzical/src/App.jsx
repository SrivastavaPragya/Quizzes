import React, { useState } from 'react';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import './App.css';

const App = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const [quizData, setQuizData] = useState({}); // State to hold quiz data

  const handleStartQuiz = () => {
    setStartQuiz(true); // This function will be called when the "Start Quiz" button is clicked
    // Fetch data when the quiz starts
    fetchQuizData();
  };
 


    const fetchQuizData = () => {
      fetch("https://opentdb.com/api.php?amount=5")
        .then(res => res.json())
        .then(data => {
          setQuizData(data);
        })
        .catch(err => {
          console.error("Error fetching quiz data:", err);
        });
    };

    



  

  return (
    <div className="App">
      {startQuiz ? (
        <SecondPage quizData={quizData} />
      ) : (
        <FirstPage onStartQuiz={handleStartQuiz} />
      )}
    </div>
  );
};

export default App;

