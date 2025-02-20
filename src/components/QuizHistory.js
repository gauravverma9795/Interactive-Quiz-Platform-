import React, { useState, useEffect } from 'react';
import { getQuizHistory } from '../services/indexedDBService';
import { getCategoryName } from '../services/quizData';
import '../styles/QuizHistory.css'; // We'll create this CSS file

const QuizHistory = () => {
  const [quizHistory, setQuizHistory] = useState([]);
  const [sortOrder, setSortOrder] = useState('recent');

  useEffect(() => {
    const fetchQuizHistory = async () => {
      try {
        const history = await getQuizHistory();
        setQuizHistory(history);
      } catch (error) {
        console.error('Error fetching quiz history:', error);
      }
    };

    fetchQuizHistory();
  }, []);

  // Sort history based on selected order
  const sortedHistory = [...quizHistory].sort((a, b) => {
    const dateA = new Date(a.timestamp);
    const dateB = new Date(b.timestamp);
    return sortOrder === 'recent' 
      ? dateB.getTime() - dateA.getTime() 
      : a.score - b.score;
  });

  // Get performance color based on score percentage
  const getPerformanceColor = (score, totalQuestions) => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 90) return 'excellent';
    if (percentage >= 70) return 'good';
    if (percentage >= 50) return 'average';
    return 'poor';
  };

  return (
    <div className="quiz-history-container">
      <div className="quiz-history-header">
        <h2>Quiz History</h2>
        <div className="sort-controls">
          <label>Sort by:</label>
          <select 
            value={sortOrder} 
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="recent">Most Recent</option>
            <option value="score">Lowest Score</option>
          </select>
        </div>
      </div>

      {quizHistory.length === 0 ? (
        <div className="no-history">
          <p>No quiz attempts yet</p>
          <p>Start a quiz to track your progress!</p>
        </div>
      ) : (
        <div className="history-list">
          {sortedHistory.map((attempt, index) => {
            const performanceClass = getPerformanceColor(
              attempt.score, 
              attempt.totalQuestions
            );

            return (
              <div key={index} className="history-item">
                <div className="history-item-header">
                  <span className="category-name">
                    {getCategoryName(attempt.category)}
                  </span>
                  <span className="attempt-date">
                    {new Date(attempt.timestamp).toLocaleString()}
                  </span>
                </div>
                
                <div className="history-item-details">
                  <div className={`score-badge ${performanceClass}`}>
                    {attempt.score} / {attempt.totalQuestions}
                  </div>
                  
                  <div className="performance-indicator">
                    <div 
                      className="performance-bar" 
                      style={{
                        width: `${(attempt.score / attempt.totalQuestions) * 100}%`
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default QuizHistory;