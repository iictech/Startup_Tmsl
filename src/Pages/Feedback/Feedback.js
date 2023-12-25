import React from 'react'
import './Feedback.css'
import feedbackgif from './Feedback.gif'
import { Link } from 'react-router-dom'
import SliderBar from './SliderBar'

const Feedback = () => {
  return (
      <>
        <div className="feedback-block" data-aos="fade-down">
          <h1 className='feedback'>Feedback</h1> 
          <img src={feedbackgif} alt='feedbackgif' className='feedbackgif' />
        </div>
        <div className="details" data-aos="fade-left">
          <label htmlFor='email' className='text'>Your Email : </label>
          <input type='email' name='email' id='email' placeholder='Enter your email' />
          <p className='text'>How was your overall experience of the app?</p>
          <SliderBar/>
          <p className='text'>Suggestions</p>
          <textarea name='suggestions' id='suggestions' cols='10' rows='20' placeholder='Enter your suggestions'></textarea>
          <Link to="/thank-you" className='submit'>Submit</Link>
        </div>
      </>
  )
}

export default Feedback