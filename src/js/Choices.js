import React, { PropTypes } from 'react';
import NiceButton from './NiceButton';

const Choices = ({ choices, onSelectAnswer, allAnswers }) => (
  <div className="choices">
    {choices.map((choice, index) => (
      <NiceButton key={choice} choice={choice} index={index} onSelectAnswer={onSelectAnswer} allAnswers={allAnswers} />
    ))}
  </div>
);

Choices.propTypes = {
  choices: PropTypes.array.isRequired,
  onSelectAnswer: PropTypes.func.isRequired,
  allAnswers: PropTypes.array.isRequired
};

export default Choices;
