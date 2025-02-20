import React, { useState } from 'react';
import { quizCategories } from '../services/quizData';
import './QuizList.css';

const QuizList = ({ onSelectCategory }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // Custom background gradients for categories
  const categoryBackgrounds = {
    'react': 'linear-gradient(135deg, #61dafb 0%, #4facf2 100%)',
    'javascript': 'linear-gradient(135deg, #f7df1e 0%, #f6c528 100%)',
    'web-dev': 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)'
  };

  return (
    <div className="quiz-landing-wrapper">
      <div className="quiz-landing-container">
        <div className="landing-header">
          <div className="header-content">
            <h1>Tech Quiz Master</h1>
            <p>Challenge Your Knowledge Across Multiple Domains</p>
            <div className="header-stats">
              <div className="stat-item">
                <span className="stat-number">{quizCategories.length}</span>
                <span className="stat-label">Categories</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {quizCategories.reduce((total, category) => total + category.questions.length, 0)}
                </span>
                <span className="stat-label">Questions</span>
              </div>
            </div>
          </div>
        </div>

        <div className="category-grid-container">
          <div className="category-grid">
            {quizCategories.map(category => (
              <div 
                key={category.id} 
                className={`category-card ${hoveredCategory === category.id ? 'hovered' : ''}`}
                style={{
                  background: categoryBackgrounds[category.id],
                }}
                onClick={() => onSelectCategory(category.id)}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="category-card-content">
                  <div className="category-icon">
                    {category.icon}
                  </div>
                  <div className="category-details">
                    <h2>{category.name}</h2>
                    <p>{category.description}</p>
                    <div className="category-meta">
                      <span className="question-count">
                        <i className="fas fa-question-circle"></i> 
                        {category.questions.length} Questions
                      </span>
                      <span className="difficulty-badge">
                        {getDifficultyBadge(category.id)}
                      </span>
                    </div>
                  </div>
                  <div className="category-hover-overlay">
                    <span>Start Quiz</span>
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="quiz-features">
          <div className="features-grid">
            <div className="feature-item">
              <i className="fas fa-clock"></i>
              <h3>Timed Challenges</h3>
              <p>Test your knowledge under time pressure</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-chart-line"></i>
              <h3>Performance Tracking</h3>
              <p>Monitor your progress and improvement</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-trophy"></i>
              <h3>Multiple Domains</h3>
              <p>Explore quizzes across different technologies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get difficulty badge
const getDifficultyBadge = (categoryId) => {
  const difficulties = {
    'react': 'Intermediate',
    'javascript': 'Advanced',
    'web-dev': 'Beginner'
  };
  return difficulties[categoryId] || 'Mixed';
};

export default QuizList;