import React, { useState } from 'react';

const QuizQuestion = ({ 
  question, 
  onAnswer, 
  questionNumber, 
  totalQuestions 
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);
    onAnswer(option);
  };

  return (
    <div className="quiz-question-container">
      <div className="question-header">
        <span>Question {questionNumber} of {totalQuestions}</span>
      </div>
      <div className="question-content">
        <h2>{question.question}</h2>
        <div className="options-grid">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`option-btn ${selectedAnswer === option ? 'selected' : ''}`}
              onClick={() => handleAnswerSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
        {selectedAnswer && (
          <div className="explanation">
            <p>{question.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizQuestion;