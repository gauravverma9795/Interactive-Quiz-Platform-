import React from 'react';
import '../styles/ScoreBoard.css';

// Custom Confetti Component (same as previous implementation)
const Confetti = () => {
  // ... (previous Confetti implementation)
};

const ScoreBoard = ({ score, totalQuestions, onRestart }) => {
  const calculatePercentage = () => {
    return Math.round((score / totalQuestions) * 100);
  };

  const getScoreResult = () => {
    const percentage = calculatePercentage();
    if (percentage === 100) return {
      message: "Perfect Score! 🏆",
      emoji: "🎉",
      color: "#FFD700",
      textColor: "#000"
    };
    if (percentage >= 80) return {
      message: "Excellent Performance! 👏",
      emoji: "🌟",
      color: "#4CAF50",
      textColor: "#fff"
    };
    if (percentage >= 60) return {
      message: "Good Job! 👍",
      emoji: "👍",
      color: "#2196F3",
      textColor: "#fff"
    };
    return {
      message: "Keep Practicing! 📚",
      emoji: "💪",
      color: "#FF5722",
      textColor: "#fff"
    };
  };

  const percentage = calculatePercentage();
  const scoreResult = getScoreResult();

  return (
    <div className="scoreboard-container">
      {percentage >= 80 && <Confetti />}
      
      <div 
        className="score-card" 
        style={{ 
          backgroundColor: scoreResult.color,
          color: scoreResult.textColor
        }}
      >
        <div className="score-emoji">{scoreResult.emoji}</div>
        
        <h2>Quiz Completed!</h2>
        
        <div className="score-details">
          <div className="score-circle">
            <svg viewBox="0 0 36 36" className="circular-chart">
              <path 
                className="circle-bg"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path 
                className="circle"
                strokeDasharray={`${percentage}, 100`}
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="percentage">{percentage}%</text>
            </svg>
          </div>
          
          <div className="score-text">
            <p>Your Score: {score} / {totalQuestions}</p>
            <p className="score-message">{scoreResult.message}</p>
          </div>
        </div>
        
        <div className="scoreboard-actions">
          <button 
            onClick={onRestart} 
            className="restart-btn"
          >
            Back to Categories
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;