import React from 'react';
import { Feedback } from './Feedback/Feedback.jsx';
import { SectionTitle } from './SectionTitle/SectionTitle.jsx';
import { Statistics, Notification } from './Statistics/Statistics.jsx';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrement = e => {
    this.setState(prev => ({ [e.target.name]: (prev[e.target.name] += 1) }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <SectionTitle
          title="Please leave your feedback"
          child={
            <Feedback
              options={Object.keys(this.state)}
              increment={this.handleIncrement}
            />
          }
        />
        <SectionTitle
          title="Statistic"
          child={
            <>
              {good || neutral || bad ? (
                <Statistics good={good} neutral={neutral} bad={bad} />
              ) : (
                <Notification message="There is no feedback"></Notification>
              )}
            </>
          }
        />
      </>
    );
  }
}

export default App;