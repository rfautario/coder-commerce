import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';

export default function Toaster({ titulo, texto }) {
  const [show, setShow] = useState(true);

  return (<div
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: 'fixed',
        minHeight: '100px',
        top: 0,
        right: 0
      }}
    >
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation={false} style={{
        position: 'absolute',
        top: 20,
        right: 5,
        minWidth: 350
      }}>
        <Toast.Header>
          <strong className="mr-auto">{ titulo }</strong>
        </Toast.Header>
        <Toast.Body style={{color: 'black'}}>{ texto }</Toast.Body>
      </Toast>
    </div>
  );
}