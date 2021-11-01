import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function WarningModal({ isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} className="modal_decor" overlayClassName="modal_overlay" closeTimeoutMS={200}>
            <div className="modal_head"></div>
            <div className="modal_body">
                <p className="modal_content">It will be coming soon</p>                    
                <button onClick={() => onClose(false)} className="modal_button">Close</button>
            </div>
        </Modal>
    )
}