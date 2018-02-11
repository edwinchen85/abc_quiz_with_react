import React from 'react';
import PropTypes from 'prop-types';
import Answers from './Answers';

const Results = ({ loadNewQuestion, allQuestions, allAnswers, onLoadResults, correctAnswers }) => (
  <div className={`results fade-out ${loadNewQuestion ? 'fade-out-active' : ''}`}>
    <div className="loader">
      <div className="icon" />
    </div>
    <div className="results-overlay" />
    <h1>Here are your answers:</h1>
    <div className="answers">
      <Answers allQuestions={allQuestions} allAnswers={allAnswers} correctAnswers={correctAnswers} />
    </div>
    <div className="text-center">
      <button className="btn btn-dark" onClick={e => onLoadResults()}>
        Submit
      </button>
    </div>
  </div>
);

Results.propTypes = {
  loadNewQuestion: PropTypes.bool.isRequired,
  allQuestions: PropTypes.array.isRequired,
  allAnswers: PropTypes.array.isRequired,
  onLoadResults: PropTypes.func.isRequired,
  correctAnswers: PropTypes.array
};

export default Results;
