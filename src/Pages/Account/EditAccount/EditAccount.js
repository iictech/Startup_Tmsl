import React ,{useState} from 'react';
import './editaccount.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const EditAccount = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <div className="account-edit-box">
        <div className="account-edit-box-circle"></div>
        <div className="account-edit-box-circle"></div>
        <div className="account-edit-box-circle"></div>
        <h1 className="profile-edit-heading">Profile Edit</h1>
        <div className="account-edit-image">
          <label htmlFor="fileInput" className="account-edit-file-label">
            {selectedImage ? (
              <img src={selectedImage} alt="Selected Profile" className="profile-preview" />
            ) : (
              <div className="camera-icon-container">
                <FontAwesomeIcon icon={faCamera} className="camera-icon" />
              </div>
            )}
          </label>
          <input
            type="file"
            id="fileInput"
            className="account-edit-file-input"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div className="account-edit-details">
          <ul>
            <li>Username</li>
            <li>Email</li>
            <li>Phone</li>
            <li>
              DOB
              <svg
                className="account-edit-calendar"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="14"
                viewBox="0 0 448 512"
              >
                <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />
              </svg>
            </li>
            <li>College</li>
          </ul>
        </div>
        <div className="account-edit-buttons">
          <a className="account-edit-back-button" href="public\index.html">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="19"
              width="19"
              viewBox="0 0 448 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </a>

          <a className="account-save-button" href="src\Pages\Account\Account.js">
            Save
          </a>
        </div>
      </div>
    </>
  );
};

export default EditAccount
