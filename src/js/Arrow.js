import React from 'react';
import PropTypes from 'prop-types';
import arrowLeftImg from '../images/navigation-left-arrow.svg';
import arrowRightImg from '../images/navigation-right-arrow.svg';

const Arrow = ({ direction, progress, allAnswers }) => {
  const image = direction === 'left' ? arrowLeftImg : arrowRightImg;
  const isDisabled =
    (direction === 'left' && progress === 0) || // we are at the first question
    (direction === 'right' && !allAnswers[progress]); // the question hasn't been answered yet

  return (
    <button disabled={isDisabled} className={`arrow ${isDisabled ? 'is-disabled' : ''}`}>
      <img src={image} alt={`${direction}-arrow`} />
    </button>
  );
};

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  allAnswers: PropTypes.array.isRequired
};

export default Arrow;
