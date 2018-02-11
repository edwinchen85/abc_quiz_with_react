import React, { PropTypes } from 'react';

const Answers = ({ allQuestions, allAnswers }) => (
  <ol>
    <li>
      What is the best city in the world? <br />
      <strong>Melbourne</strong>
    </li>
  </ol>
);

Answers.propTypes = {
  allQuestions: PropTypes.array.isRequired,
  allAnswers: PropTypes.array.isRequired
};

export default Answers;
