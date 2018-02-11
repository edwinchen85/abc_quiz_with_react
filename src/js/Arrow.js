import React from 'react';
import PropTypes from 'prop-types';
import arrowLeftImg from '../images/navigation-left-arrow.svg';
import arrowRightImg from '../images/navigation-right-arrow.svg';

const Arrow = ({ direction, progress, allAnswers, goToPreviousQuestion, goToNextQuestion, showResults }) => {
  const image = direction === 'left' ? arrowLeftImg : arrowRightImg;
  const isDisabled =
    (direction === 'left' && progress === 0) || // we are at the first question
    (direction === 'right' && !allAnswers[progress]) || // the question hasn't been answered yet
    (direction === 'right' && showResults);

  return (
    <button
      disabled={isDisabled}
      className={`arrow ${isDisabled ? 'is-disabled' : ''}`}
      onClick={() => {
        direction === 'left' ? goToPreviousQuestion() : goToNextQuestion();
      }}
    >
      <img src={image} alt={`${direction}-arrow`} />
    </button>
  );
};

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  allAnswers: PropTypes.array.isRequired,
  goToPreviousQuestion: PropTypes.func,
  goToNextQuestion: PropTypes.func,
  showResults: PropTypes.bool.isRequired
};

export default Arrow;
