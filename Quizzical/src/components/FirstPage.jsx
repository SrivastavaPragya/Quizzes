import React from 'react';

const FirstPage = ({ onStartQuiz }) => {
  return (
    <div className='content'>
      <h1>Quizzical</h1>
      <button className='btn' onClick={onStartQuiz}>Start Quiz</button>
    </div>
  );
}

export default FirstPage;

