import React from 'react';
import data from './data/Data';
import Question from './Question';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allQuestions: data.allQuestions,
      currentQuestion: data.allQuestions[0],
      progress: 0,
      allAnswers: [],
      loadNewQuestion: false,
      showResults: false
    };
  }

  onSelectAnswer = (answer) => {
    // console.log('Answer selected', answer);
    const { allAnswers } = this.state;

    this.setState({
      allAnswers: [...allAnswers, answer]
    }, this.goToNextQuestion());
  }

  goToNextQuestion = () => {
    // console.log('go to next question after the status is updated');

    const { progress, allQuestions } = this.state;

    this.setState({
      loadNewQuestion: true
    })

    // we have the question faded out
    setTimeout(() => {
      if (progress < allQuestions.length - 1) {
        this.setState({
          progress: progress + 1,
          currentQuestion: allQuestions[progress + 1],
          loadNewQuestion: false
        })
      } else {
        this.setState({
          loadNewQuestion: false,
          showResults: true
        })
      }
    }, 300);

  }

  render() {
    const { currentQuestion, loadNewQuestion, showResults } = this.state;
    return (
      <div>
        {/* Header - start */}
        <header className={`fade-out ${loadNewQuestion ? 'fade-out-active' : ''}`}>
          <img src="https://ihatetomatoes.net/react-tutorials/abc-quiz/images/plane.svg" alt="Plane" />
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

          {
            !showResults && <Question
              currentQuestion={currentQuestion}
              onSelectAnswer={this.onSelectAnswer}
              loadNewQuestion={loadNewQuestion}
            />
          }

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
            <img
              src="https://ihatetomatoes.net/react-tutorials/abc-quiz/fonts/navigation-left-arrow.svg"
              alt="left-arrow"
            />
          </button>
          <button disabled className="arrow is-disabled">
            <img
              src="https://ihatetomatoes.net/react-tutorials/abc-quiz/fonts/navigation-right-arrow.svg"
              alt="right-arrow"
            />
          </button>
        </div>
        {/* Navigation - end */}
      </div>
    );
  }
}

export default App;
