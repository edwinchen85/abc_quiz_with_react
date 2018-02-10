import React from 'react';
import PropTypes from 'prop-types';
import Choices from './Choices';

const Question = ({ currentQuestion, onSelectAnswer, loadNewQuestion }) => {
  const { question, choices } = currentQuestion;
  return (
    <div className={`question fade-out ${loadNewQuestion ? 'fade-out-active' : ''}`}>
      <h1>{question}</h1>

      <Choices choices={choices} onSelectAnswer={onSelectAnswer} />
    </div>
  );
};

Question.propTypes = {
  currentQuestion: PropTypes.object.isRequired,
  onSelectAnswer: PropTypes.func.isRequired,
  loadNewQuestion: PropTypes.bool.isRequired
};

export default Question;
