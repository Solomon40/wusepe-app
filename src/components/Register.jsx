import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import api from '../api';

function Register() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const newUser = { firstname, lastname, email };
 
    const handleFirstnameInput = (event) => {
        setFirstname(event.target.value)
    }
    const handleLastnameInput = (event) => {
        setLastname(event.target.value)
    }
    const handleEmailInput = (event) => {
        setEmail(event.target.value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        const registerNewUser = async () => {
            try {
                const response = await api.post('/users', newUser);
                console.log("this is the res" + response)
            } catch (error) {
                console.log("the error is this: " + error.response.message)
            }
            
        }
        registerNewUser();
    }

  return (
    <Form onSubmit={handleSubmit}>
        
      <FloatingLabel className="mb-2" controlId="floatingInput" label="First name">
        <Form.Control type="text" value={firstname}
                                onChange={handleFirstnameInput} />
      </FloatingLabel>
      <FloatingLabel className="mb-2" controlId="floatingInput" label="Last name">
        <Form.Control type="text" value={lastname}
                                onChange={handleLastnameInput} />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" value={email}
                                onChange={handleEmailInput} />
      </FloatingLabel>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Register;