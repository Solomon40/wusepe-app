import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
// import api from './api';

function Register() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setemail] = useState('');

    const newUser = { firstname, lastname, email };
    const handleSubmit = async () => {

    }

  return (
    <Form onSubmit={handleSubmit}>
        
      <FloatingLabel className="mb-2" controlId="floatingInput" label="First name">
        <Form.Control type="text" placeholder="firstname" />
      </FloatingLabel>
      <FloatingLabel className="mb-2" controlId="floatingInput" label="Last name">
        <Form.Control type="text" placeholder="lastname" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Register;