import React from 'react'
import '../Feedback.css'
import feedbackgif from '../Feedback.gif'
import check from './check.svg'

const ThankYou = () => {
  return (
    <>
      <div className="feedback-block" data-aos="fade-down">
          <h1 className='feedback'>Feedback</h1> 
          <img src={feedbackgif} alt='feedbackgif' className='feedbackgif' />
      </div>
      <div className='thankyou-card' data-aos="flip-down">
        <img src={check} alt='check' className='check' />
        <h1 className='text thank-text'>Thank You for your Suggestion</h1>
      </div>
    </>
  )
}

export default ThankYou

