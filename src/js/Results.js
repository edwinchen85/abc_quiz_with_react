import React from 'react';
import PropTypes from 'prop-types';
import Answers from './Answers';

const Results = ({ loadNewQuestion, allQuestions, allAnswers }) => (
  <div className={`results fade-out ${loadNewQuestion ? 'fade-out-active' : ''}`}>
    <div className="loader">
      <div className="icon" />
    </div>
    <div className="results-overlay" />
    <h1>Here are your answers:</h1>
    <div className="answers">
      <Answers allQuestions={allQuestions} allAnswers={allAnswers} />
    </div>
    <div className="text-center">
      <button className="btn btn-dark">Submit</button>
    </div>
  </div>
);

Results.propTypes = {
  loadNewQuestion: PropTypes.bool.isRequired,
  allQuestions: PropTypes.array.isRequired,
  allAnswers: PropTypes.array.isRequired
};

export default Results;
