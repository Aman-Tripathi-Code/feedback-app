import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../Context/FeedbackContext";

function FeedbackForm(){

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);

    useEffect(() =>{
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating) 
        }
    },[feedbackEdit])

    const [text, setText] = useState('');
    const [btnDisabled,setBtnDisabled] = useState(true);
    const [message,setMessage] = useState('');
    const [rating,setRating] = useState(10);

    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true);
            setMessage(null);
        }
        else if(text!= '' && text.trim().length <= 10){
            setBtnDisabled(true);
            setMessage("Text must be at least 10 characters");
        }
        else{
            setBtnDisabled(false);
            setMessage(null);
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedBack = {
                text:text,
                rating : rating,
            }
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedBack)
            }
            else{
                addFeedback(newFeedBack);
            }
            setText('');
        }
    }

    return(
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={setRating} selected={rating}/>
                <div className="input-group">
                    <input  
                    onChange = {handleTextChange} 
                    type="text" 
                    placeholder="Write a review" 
                    value={text}
                    />
                    <Button type="submit" isDisabled = {btnDisabled}>
                    Send</Button>
                </div>
                {message && <div className="message">{message}</div>} 
            </form>        
        </Card>
    )
}

export default FeedbackForm;