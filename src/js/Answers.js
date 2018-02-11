import React, { PropTypes } from 'react';

const Answers = ({ allQuestions, allAnswers, correctAnswers }) => (
  <ol>
    {allQuestions.map((question, index) => {
      const isCorrect = correctAnswers && correctAnswers[index] === allAnswers[index];
      return (
        <li key={question.question} className={`${isCorrect ? 'text-success' : 'text-danger'}`}>
          {question.question} <br />
          <strong>{allAnswers[index]}</strong>
          {correctAnswers && !isCorrect && <span className="correct-answer"> {correctAnswers[index]}</span>}
        </li>
      );
    })}
  </ol>
);

Answers.propTypes = {
  allQuestions: PropTypes.array.isRequired,
  allAnswers: PropTypes.array.isRequired,
  correctAnswers: PropTypes.array
};

export default Answers;
