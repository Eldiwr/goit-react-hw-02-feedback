
export const FeedbackOptions = ({onSendFeedback, options}) => {
    
    return (
        <ul>
            {options.map((option, index) => {
                return (<li key={index}><button type="button" onClick={() => onSendFeedback(option)}>{option}</button></li>);
                })
            }  
        </ul>
    );
    
};