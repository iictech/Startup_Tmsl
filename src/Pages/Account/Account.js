import './accountstyle.css'
import React from 'react'

const Account = () => {
  return (
    
    <>
      <div className="account-box">
          <div className="account-box-circle"></div>
          <div className="account-box-circle"></div>
          <div className="account-box-circle"></div>
          <h1 class="profile-heading">My Profile</h1>
          <div className="account-image">
              
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
              <a className="account-back-button" style={{fill:'white'}} href="public\index.html"><svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></a>
              
              <a className="account-edit-button" style={{fill:'white'}} href="src\Pages\Account\EditAccount\EditAccount.js">Edit <svg class="edit-icon" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg></a>
          </div>
      </div>
    </>
  )
}

export default Account