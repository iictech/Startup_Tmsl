import React from 'react'
import './Feedback.css'

const Feedback = () => {
  return (
    <>
      <div className="feedback-block">
        <h1 className='feedback'>Feedback</h1>  
      </div>
      <div className="details">
        <label htmlFor='email' id='email-label'>Your Email : </label>
        <input type='email' name='email' id='email' placeholder='Enter your email' />
        <p id='slider_text'>How was your overall experience of the app?</p>
        

      </div>
    </>
  )
}

export default Feedback