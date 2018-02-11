import React from 'react';
import data from './data/Data';
import Question from './Question';
import Results from './Results';
import Progress from './Progress';
import Arrow from './Arrow';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allQuestions: data.allQuestions,
      currentQuestion: data.allQuestions[0],
      progress: 0,
      allAnswers: [],
      loadNewQuestion: false,
      showResults: false,
      loadingResults: false,
      correctAnswers: null
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

  onLoadResults = () => {
    // console.log('Loading results!');

    this.setState({
      loadingResults: true
    })

    // correct answers url https://api.myjson.com/bins/zgpjb

    fetch('https://api.myjson.com/bins/zgpjb')
      .then(response => response.json())
      .then(parsedJSON => {
        // console.log(parsedJSON.correctAnswers);
        const correctAnswers = parsedJSON.correctAnswers;

        this.setState({
          correctAnswers,
          loadingResults: false,
          resultsLoaded: true
        })
      })
      .catch(error => {
        console.log('fetching failed', error);
        this.setState({
          loadingResults: false,
          resultsLoaded: true
        })
      })

    // Fake delay
    setTimeout(() => {
      this.setState({
        loadingResults: false
      })
    }, 1000);
  }

  render() {
    const { currentQuestion, loadNewQuestion, showResults, allQuestions, allAnswers, loadingResults, correctAnswers, resultsLoaded, progress } = this.state;

    const navIsActive = allAnswers.length > 0;

    return (
      <div className={`${loadingResults ? 'is-loading-results' : ''} ${resultsLoaded ? 'is-showing-results' : 'no-results-loaded'}`}>
        {/* Header - start */}
        <header className={`fade-out ${loadNewQuestion ? 'fade-out-active' : ''}`}>
          <img src="https://ihatetomatoes.net/react-tutorials/abc-quiz/images/plane.svg" alt="Plane" />
        </header>
        {/* Header - end */}

        {/* Content - start */}
        <div className="content">
          <Progress total={allQuestions.length} progress={allAnswers.length} />

          {
            !showResults ? <Question
              currentQuestion={currentQuestion}
              onSelectAnswer={this.onSelectAnswer}
              loadNewQuestion={loadNewQuestion}
            /> : <Results loadNewQuestion={loadNewQuestion}
              allQuestions={allQuestions}
              allAnswers={allAnswers}
              onLoadResults={this.onLoadResults}
              correctAnswers={correctAnswers} />
          }
        </div>
        {/* Content - end */}

        {/* Navigation - start */}
        <div className={`navigation text-center ${navIsActive ? 'is-active' : ''}`}>
          <Arrow direction="left" progress={progress} allAnswers={allAnswers} />
          <Arrow direction="right" progress={progress} allAnswers={allAnswers} />
        </div>
        {/* Navigation - end */}
      </div>
    );
  }
}

export default App;
