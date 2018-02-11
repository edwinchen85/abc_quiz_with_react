import React, { Component, PropTypes } from 'react';

class NiceButton extends Component {
  get selected() {
    const { allAnswers, choice } = this.props;

    // return true if the choice is in the allAnswers array
    return allAnswers.includes(choice);
  }

  getLetter = (index) => {
    const letters = ['A', 'B', 'C'];
    return letters[index];
  }

  handleClick = (e) => {
    const { choice, onSelectAnswer } = this.props;

    // add the highlight class first and then go to next questions
    this.button.classList.add('is-selected', 'is-highlighted');

    setTimeout((e) => {
      onSelectAnswer(choice);
    }, 500);
  }

  render() {
    const { choice, index, onSelectAnswer, allAnswers } = this.props;
    return (
      <button ref={input => this.button = input} className={`btn btn-huge ${this.selected ? 'is-selected' : ''}`} onClick={e => this.handleClick(e)}>
        <span className="letter">{this.getLetter(index)}</span> {choice}
      </button>
    );
  }
}

NiceButton.propTypes = {
  choice: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onSelectAnswer: PropTypes.func.isRequired,
  allAnswers: PropTypes.array.isRequired
};

export default NiceButton;
