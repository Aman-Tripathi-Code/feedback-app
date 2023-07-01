import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import { useState } from "react"
import Header from "./Components/Header"
import FeedbackList from "./Components/FeedbackList"
import FeedbackStats from "./Components/FeedbackStats"
import FeedbackData from "./DATA/FeedbackData";
import FeedbackForm from "./Components/FeedbackForm";
import AboutPage from './Pages/AboutPage'
import AboutIconLink from './Components/AboutIconLink'

function App(){
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback,...feedback]);
    }


    return (
    <Router>
        <Header/>
        <div className="container">
            <Routes>
                <Route exact path='/' element = {
                <>
                    <FeedbackForm handleAdd={addFeedback}/>
                    <FeedbackStats feedback = {feedback}/>
                    <FeedbackList feedback = {feedback} handleDelete={deleteFeedback}/>
                </>
                } >
                </Route>
                ̥<Route path = '/about' element={<AboutPage/>}/>
            </Routes>
            <AboutIconLink/>
        </div>
    </Router>
    )
}
export default App