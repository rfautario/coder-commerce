import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';

export default function Toaster({ titulo, texto }) {
    const [show, setShow] = useState(false);
  
    return (<div
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: 'relative',
          minHeight: '100px',
        }}
      >
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide style={{
              position: 'absolute',
              top: 0,
              right: 0,
            }}>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded mr-2"
                  alt=""
                />
                <strong className="mr-auto">{ titulo }</strong>
              </Toast.Header>
              <Toast.Body>{ texto }</Toast.Body>
            </Toast>
      </div>
    );
}