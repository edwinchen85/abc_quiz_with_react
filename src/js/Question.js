import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ currentQuestion }) => {
  const { question } = currentQuestion;
  return (
    <div className="question">
      <h1>{question}</h1>

      <div className="choices">
        <button className="btn btn-huge is-selected">
          <span className="letter">A</span> Melbourne
        </button>
        <button className="btn btn-huge">
          <span className="letter">B</span> New York
        </button>
        <button className="btn btn-huge">
          <span className="letter">C</span> London
        </button>
      </div>
    </div>
  );
};

Question.propTypes = {
  currentQuestion: PropTypes.object.isRequired
};

export default Question;
