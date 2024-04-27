import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';


function UserCreationSuccessComponent() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSendEmail = () => {
    // Logic for sending email
    setShowModal(true);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card bg-light">
            <div className="card-body">
              <div className="text-center mb-4">
                <h1 className="display-3" style={{ color: 'black' }}>User Creation Successful!</h1>
                <FontAwesomeIcon icon={faCheckCircle} className="text-success" style={{ fontSize: '4rem' }} />
              </div>
              <p className="lead text-center">Send email to the relevant new user.</p>
              <hr />
              <div className="text-center">
                <a className="btn btn-primary btn-sm mr-3" href="#" role="button" onClick={handleSendEmail}>Send Email</a>
                <a className="btn btn-danger btn-sm" href='/' role="button">
                  <FontAwesomeIcon icon={faTimesCircle} className="mr-1" /> Cancel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Success!</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleCloseModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body" style={{ color: 'black' }}>
                Email has been successfully sent to the user.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserCreationSuccessComponent;