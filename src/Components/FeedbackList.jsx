import FeedbackItem from "./FeedbackItem";
import PropTypes from 'prop-types'

function FeedbackList({feedback}){
    if(feedback.length === 0 || !feedback){
        return <p>No feedback to display</p>
    }
    return (                                                                                                                                                                                                                                                                                                                                                       
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item = {item}/>
            ))}
        </div>
    )
}

FeedbackList.propTypes = {
    feedback : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            text : PropTypes.string.isRequired,
            rating : PropTypes.number.isRequired,
        })
    ),
}

export default FeedbackList;