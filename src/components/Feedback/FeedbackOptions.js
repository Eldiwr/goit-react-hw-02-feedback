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
    onSendFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
};