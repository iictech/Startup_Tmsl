import './accountstyle.css'
import React from 'react'

const Account = () => {
  return (
    
    <>
      <div className="account-box">
          <div className="account-box-circle"></div>
          <div className="account-box-circle"></div>
          <div className="account-box-circle"></div>
          <h1>My Profile</h1>
          <div className="account-image">
              <input type="file" className="account-file-input" accept="image/*"></input>
          </div>
          <div className="account-details">
              <h1>Rahul Sinha</h1>
              <ul>
                <li>Email     <b>rahul@gmail.com</b></li>
                <li>Phone     <b>+91 9876543210</b></li>
                <li>DOB     <b>01/01/1999</b></li>
                <li>College     <b>Techno Main Salt Lake</b></li>
              </ul>
          </div>
          <div className="account-buttons">
              <a className="account-back-button">arrow</a>
              <a className="account-edit-button">Edit</a>
          </div>
      </div>
    </>
  )
}

export default Account