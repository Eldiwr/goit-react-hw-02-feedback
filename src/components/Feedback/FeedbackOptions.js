import PropTypes from 'prop-types';
import { Button, ButtonList, ListItem } from "./Feedback.steled";



export const FeedbackOptions = ({onSendFeedback, options}) => {
    
    return (
        <ButtonList>
            {options.map((option) => {
                return (<ListItem key={option}><Button type="button" onClick={() => onSendFeedback(option)}>{option}</Button></ListItem>);
                })
            }  
        </ButtonList>
    );
    
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            good: PropTypes.number.isRequired,
            neutral: PropTypes.number.isRequired,
            bad: PropTypes.number.isRequired,
        }),
    ),
    onSendFeedback: PropTypes.func.isRequired
};