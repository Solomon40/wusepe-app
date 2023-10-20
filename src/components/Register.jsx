import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import api from '../api';
import AlertComponent from './Alert';


function RegisterComponent() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const newUser = { firstname, lastname, email };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleFirstnameInput = (event) => {
    setFirstname(event.target.value)
  }
  const handleLastnameInput = (event) => {
    setLastname(event.target.value)
  }
  const handleEmailInput = (event) => {
    setEmail(event.target.value)
  }

  const showAlert = () => {
    setShow(true);
  }

  const clearInputs = () => {
    setFirstname('');
    setLastname('');
    setEmail('');
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const registerNewUser = async () => {
      try {
        const response = await api.post('/users', newUser);
        clearInputs();
        showAlert();
      } catch (error) {
        // <AlertComponent error={error} />
        console.log("the error is this: " + error.response.message)

      }

    }
    registerNewUser();
  }

  return (
    <Form onSubmit={handleSubmit} >
      <AlertComponent show={show} handleClose={handleClose} />

      <FloatingLabel className="mb-2" controlId="floatingInput" label="First name">
        <Form.Control type="text" placeholder='First Name' className="first_name" value={firstname}
          onChange={handleFirstnameInput} />
      </FloatingLabel>
      <FloatingLabel className="mb-2" controlId="floatingInput" label="Last name">
        <Form.Control type="text" placeholder='Last Name' className="last_name" value={lastname}
          onChange={handleLastnameInput} />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder='name@examle.com' className="email" value={email}
          onChange={handleEmailInput} />
      </FloatingLabel>
      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>
  );
}

export default RegisterComponent;