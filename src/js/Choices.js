import React, { PropTypes } from 'react';
import NiceButton from './NiceButton';

const Choices = ({ choices, onSelectAnswer }) => (
  <div className="choices">
    {choices.map((choice, index) => (
      <NiceButton key={choice} choice={choice} index={index} onSelectAnswer={onSelectAnswer} />
    ))}
  </div>
);

Choices.propTypes = {
  choices: PropTypes.array.isRequired,
  onSelectAnswer: PropTypes.func.isRequired
};

export default Choices;
