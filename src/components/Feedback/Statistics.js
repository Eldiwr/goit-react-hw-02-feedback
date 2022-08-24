import PropTypes from 'prop-types';
export const Statistics = ({ good, bad, neutral, totalStat, positiveFeedback }) => {
    
    return (
        <ul>
            <li>Good:{ good }</li>
            <li>Neutral:{neutral}</li>
            <li>Bad:{ bad }</li>
            <li>Total: {totalStat}</li>
            <li>Positive feedback: {positiveFeedback}%</li>
        </ul>
    );   
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    totalStat: PropTypes.func.isRequired,
    positiveFeedback: PropTypes.string.isRequired
}