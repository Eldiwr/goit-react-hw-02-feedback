import PropTypes from 'prop-types';
import { Button, ButtonList, ListItem } from "./Feedback.steled";



export const FeedbackOptions = ({onSendFeedback, options}) => {
    
    return (
        <ButtonList>
            {options.map((option, index) => {
                return (<ListItem key={index}><Button type="button" onClick={() => onSendFeedback(option)}>{option}</Button></ListItem>);
                })
            }  
        </ButtonList>
    );
    
};

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onSendFeedback: PropTypes.func,
};