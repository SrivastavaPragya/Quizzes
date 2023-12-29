import React, { useState } from 'react';

const SecondPage = ({ quizData }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = (questionIndex, option) => {
    if (!showResults) { // Prevent changing options after showing results
      setSelectedAnswers({
        ...selectedAnswers,
        [questionIndex]: option
      });
    }
  };

  const handleCheckAnswers = () => {
    setShowResults(true);
  };

  const handlePlayAgain = () => {
    window.location.reload();
  };

  const renderQuestions = quizData.results?.map((item, questionIndex) => {
    const options = [item.correct_answer, ...item.incorrect_answers];

    return (
      <div className="questionsContainer" key={questionIndex}>
        <h1 className='questions' dangerouslySetInnerHTML={{ __html: item.question }}></h1>
        <div className="options">
          {options.map((option, index) => {
            let buttonStyle = {};
            if (showResults) {
              buttonStyle = selectedAnswers[questionIndex] === option
                ? (option === item.correct_answer ? { backgroundColor: 'green' } : { backgroundColor: 'red' })
                : {};
            }
            return (
              <button 
                key={index}
                style={buttonStyle}
                onClick={() => handleOptionSelect(questionIndex, option)}
                dangerouslySetInnerHTML={{ __html: option }}
              />
            );  
          })}
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="quiz-content">
        
        {renderQuestions}
      </div>
      <footer className="quiz-footer">
        {showResults ? (
          <button className="play-again-btn" onClick={handlePlayAgain}>Play again</button>
        ) : (
          <button className="check-answers-btn" onClick={handleCheckAnswers}>Check answers</button>
        )}
      </footer>
    </>
  );
};

export default SecondPage;

