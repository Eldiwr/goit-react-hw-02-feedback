import PropTypes from 'prop-types';
export const Statistics = ({ options, totalStat, positiveFeedback }) => {
    
    return (
        <ul>
            {Object.keys(options).map((option) => {
                return (<li key={option}>{option}: {options[option]}</li>)
            })}

            <li>Total: {totalStat}</li>
            <li>Positive feedback: {positiveFeedback}%</li>
        </ul>
    );   
};

Statistics.propTypes = {
    options: PropTypes.object,
    totalStat: PropTypes.number,
    positiveFeedback: PropTypes.string
}