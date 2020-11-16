import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';

export default function Toaster({ titulo, texto }) {
    const [show, setShow] = useState(false);
  
    return (
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
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
    );
}