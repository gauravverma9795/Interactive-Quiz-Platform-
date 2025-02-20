import React, { useState, useEffect } from 'react';
import QuizList from './components/QuizList';
import QuizQuestion from './components/QuizQuestion';
import ScoreBoard from './components/ScoreBoard';
import QuizHistory from './components/QuizHistory';
import Timer from './components/Timer';
import { quizCategories } from './services/quizData';
import { saveQuizAttempt } from './services/indexedDBService';
import { shuffleArray } from './utils/helpers';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const selectCategory = (category) => {
    const categoryQuestions = quizCategories.find(cat => cat.id === category).questions;
    setSelectedCategory(category);
    setQuestions(shuffleArray(categoryQuestions).slice(0, 5));
    resetQuizState();
  };

  const resetQuizState = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setUserAnswers([]);
  };

  const handleAnswer = (selectedOption) => {
    const currentQuestionData = questions[currentQuestion];
    const isCorrect = selectedOption === currentQuestionData.correctAnswer;
    
    const newUserAnswer = {
      question: currentQuestionData.question,
      selectedAnswer: selectedOption,
      correctAnswer: currentQuestionData.correctAnswer,
      isCorrect
    };

    setUserAnswers(prev => [...prev, newUserAnswer]);

    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = async () => {
    await saveQuizAttempt({
      category: selectedCategory,
      score,
      totalQuestions: questions.length,
      answers: userAnswers,
      timestamp: new Date().toISOString()
    });
    setShowScore(true);
  };

  const handleTimeUp = () => {
    finishQuiz();
  };

  const restartQuiz = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="app-container">
      {!selectedCategory ? (
        <QuizList onSelectCategory={selectCategory} />
      ) : !showScore ? (
        <div className="quiz-container">
          <Timer 
            duration={30} 
            onTimeUp={handleTimeUp} 
            category={selectedCategory} 
          />
          <QuizQuestion
            question={questions[currentQuestion]}
            questionNumber={currentQuestion + 1}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
          />
        </div>
      ) : (
        <div className="quiz-result-container">
          <ScoreBoard 
            score={score}
            totalQuestions={questions.length}
            onRestart={restartQuiz}
          />
          <QuizHistory />
        </div>
      )}
    </div>
  );
}

export default App;