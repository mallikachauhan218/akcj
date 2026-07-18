import React from 'react'

function Contactmodal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
      <div className="modal-overlay" style={{zIndex:"9000"}}>
        <div className="modal-content">
          <h2>Welcome to AKCJ Capital!</h2>
          <p>Thank you for visiting our website.</p>
          <button onClick={onClose}>Close</button>
        </div>
        <style jsx>{`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .modal-content {
            background: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
          }
        `}</style>
      </div>
    );
}

export default Contactmodal