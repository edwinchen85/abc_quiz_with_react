import React, { PropTypes } from 'react';
import NiceButton from './NiceButton';

const Choices = ({ choices }) => (
  <div className="choices">
    {choices.map((choice, index) => <NiceButton key={choice} choice={choice} index={index} />)}
  </div>
);

Choices.propTypes = {
  choices: PropTypes.array.isRequired
};

export default Choices;
