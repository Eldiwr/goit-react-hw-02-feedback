const { Component } = require("react");

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    sendGoodFeedback = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1,
            };         
        });
    };

    sendNeutralFeedback = () => {
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1,
            };         
        });
    };

    sendBadFeedback = () => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1,
            };         
        });
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
         
        return (
            <div>
                <h1>Please leave feedback</h1>

                <ul>
                    <li><button type="button" onClick={this.sendGoodFeedback}>Good</button></li>
                    <li><button type="button" onClick={this.sendNeutralFeedback}>Neutral</button></li>
                    <li><button type="button" onClick={this.sendBadFeedback}>Bad</button></li>
                </ul>

                <h2>Statistics</h2>

                <ul>
                    <li>Good:{this.state.good }</li>
                    <li>Neutral:{this.state.neutral }</li>
                    <li>Bad:{this.state.bad}</li>
                    <li>Total:{this.countTotalFeedback()}</li>
                    <li>Positive feedback:{this.countPositiveFeedbackPercentage()}%</li>
                </ul>               
            </div>
        );
    }
}