import React, { Component, PropTypes } from 'react';

class NiceButton extends Component {
  getLetter = (index) => {
    const letters = ['A', 'B', 'C'];
    return letters[index];
  }

  render() {
    const { choice, index } = this.props;
    return (
      <button className="btn btn-huge is-selected">
        <span className="letter">{this.getLetter(index)}</span> {choice}
      </button>
    );
  }
}

NiceButton.propTypes = {
  choice: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default NiceButton;
