import { Component } from 'react';
import { Statistics } from './Feedback/Statistics';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  sendFeedback = (stateId) => {
    this.setState((prevState) => ({
      [stateId]: prevState[stateId] + 1,
    }));
  };
  
    countTotalFeedback = () => {
        const totalFeedbacks = Object.values(this.state).reduce((previousValue, number) => {
            return previousValue + number;
        }, 0);
        return totalFeedbacks
    };

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        const goodFeedbacks = this.state.good;
        
       return total === 0 ? 0 : Math.round(goodFeedbacks / total * 100);
    }

  render() {
    const arrayOfCase = Object.keys(this.state);
    const { good, bad, neutral } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onSendFeedback={this.sendFeedback}
            options={arrayOfCase}
          />
        </Section>
      
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message={"There is no feedback"} /> 
          ) : (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              totalStat={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
          />
        )}       
        </Section>
        <GlobalStyle />
      </>
    )   
  }
}
