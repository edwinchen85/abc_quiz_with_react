import React from 'react';
import PropTypes from 'prop-types';
import Choices from './Choices';

const Question = ({ currentQuestion, onSelectAnswer, loadNewQuestion, allAnswers }) => {
  const { question, choices } = currentQuestion;
  return (
    <div className={`question fade-out ${loadNewQuestion ? 'fade-out-active' : ''}`}>
      <h1>{question}</h1>

      <Choices choices={choices} onSelectAnswer={onSelectAnswer} allAnswers={allAnswers} />
    </div>
  );
};

Question.propTypes = {
  currentQuestion: PropTypes.object.isRequired,
  onSelectAnswer: PropTypes.func.isRequired,
  loadNewQuestion: PropTypes.bool.isRequired,
  allAnswers: PropTypes.array.isRequired
};

export default Question;
