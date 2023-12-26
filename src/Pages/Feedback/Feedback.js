import React, {useState} from 'react'
import './Feedback.css'
import feedbackgif from './Feedback.gif'
import { Link } from 'react-router-dom'
import SliderBar from './SliderBar'


const Feedback = () => {

  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email address.');
      return;
    }

    // Handle form submission logic here if needed
    // For now, just alerting for email validation
    // alert('Form submitted successfully!');
    window.location.href = "/thank-you";
  };

  return (
      <>
        <div className="feedback-block" data-aos="fade-down">
          <h1 className='feedback'>Feedback</h1> 
          <img src={feedbackgif} alt='feedbackgif' className='feedbackgif' />
        </div>
        <form className="details" data-aos="fade-left" onSubmit={handleSubmit}>
          <label htmlFor='email' className='text' >Your Email : </label>
          <input type='email' name='email' id='email' value={email}
          onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' required />
          <p className='text'>How was your overall experience of the app?</p>
          <SliderBar/>
          <p className='text'>Suggestions</p>
          <textarea name='suggestions' id='suggestions' cols='10' rows='20' placeholder='Enter your suggestions'></textarea>
          <button className='submit'>Submit</button>
        </form>
      </>
  )
}

export default Feedback