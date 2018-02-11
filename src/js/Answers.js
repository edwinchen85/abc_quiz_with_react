import React, { PropTypes } from 'react';

const Answers = ({ allQuestions, allAnswers }) => (
  <ol>
    {allQuestions.map((question, index) => (
      <li key={question.question}>
        {question.question} <br />
        <strong>{allAnswers[index]}</strong>
      </li>
    ))}
  </ol>
);

Answers.propTypes = {
  allQuestions: PropTypes.array.isRequired,
  allAnswers: PropTypes.array.isRequired
};

export default Answers;
