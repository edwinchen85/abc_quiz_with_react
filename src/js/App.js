import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* Header - start */}
        <header>
          <img src="https://ihatetomatoes.net/react-tutorials/abc-quiz/images/plane.svg" />
        </header>
        {/* Header - end */}

        {/* Content - start */}
        <div className="content">
          {/* Progress - start */}
          <div className="progress-container">
            <div className="progress-label">1 of 5 answered</div>
            <div className="progress">
              <div className="progress-bar" style={{ width: `20%` }}>
                <span className="sr-only">20% Complete</span>
              </div>
            </div>
          </div>
          {/* Progress - end */}

          {/* Question - start */}
          <div className="question">
            <h1>What is the best city in the world?</h1>

            {/* Choices - start */}
            <div className="choices">
              {/* Buttons - start */}
              <button className="btn btn-huge is-selected">
                <span className="letter">A</span> Melbourne
              </button>
              <button className="btn btn-huge">
                <span className="letter">B</span> New York
              </button>
              <button className="btn btn-huge">
                <span className="letter">C</span> London
              </button>
              {/* Buttons - end */}
            </div>
            {/* Choices - end */}
          </div>
          {/* Question - end */}

          {/* Results - start */}
          <div className="results">
            <div className="loader">
              <div className="icon" />
            </div>
            <div className="results-overlay" />
            <h1>Here are your answers:</h1>
            <div className="answers">
              <ol>
                <li>
                  What is the best city in the world? <br />
                  <strong>Melbourne</strong>
                </li>
              </ol>
            </div>
            <div className="text-center">
              <button className="btn btn-dark">Submit</button>
            </div>
          </div>
          {/* Results - end */}
        </div>
        {/* Content - end */}

        {/* Navigation - start */}
        <div className="navigation text-center is-active">
          <button className="arrow">
            <img src="https://ihatetomatoes.net/react-tutorials/abc-quiz/fonts/navigation-left-arrow.svg" />
          </button>
          <button disabled className="arrow is-disabled">
            <img src="https://ihatetomatoes.net/react-tutorials/abc-quiz/fonts/navigation-right-arrow.svg" />
          </button>
        </div>
        {/* Navigation - end */}
      </div>
    );
  }
}

export default App;
