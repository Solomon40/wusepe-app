
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import api from '../api';
import AlertComponent from './Alert';
import emailjs from 'emailjs-com';

function RegisterComponent({ onInputChange }) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const newUser = { firstname, lastname, email };
  const [show, setShow] = useState(false);  //show alert

  const handleClose = () => setShow(false); //close alert
  const handleFirstnameInput = (event) => {
    setFirstname(event.target.value);
    onInputChange(event.target.value);  //chain input to firstname in h1 textcontent
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
        console.log("the error: " + error.response.message)

      }

    }
    registerNewUser();
  }

  //   cron.schedule('* * * * *', () => {
  //     console.log('running a task every minute');
  //  });


  const mailList = useState([]);

  const getEmails = async () => {
    try {
      const usersResponse = await api.get('/users');
      const users = usersResponse.data;
      users.forEach(user => mailList.push(user.email))
    } catch (error) {
      console.log(error);
    }
  }
  getEmails();

  //TODO 
  //finish Send and Schedule functionality

  //email message options
  const mailOptions = {
    from_name: "Wusepe Center for Professional Development",
    to_name: mailList,
    message: "It works!",
  };

  //send email
  const handleSendEmail = () => {

    emailjs.send('service_tq8ws72', 'template_n6bgwoi', mailOptions, 'eUkNOdiBuchq__MNk')
    .then((response)=>{
      console.log("Email Send Success: ", response.status, response.text);
    }, (error)=>{
      console.log("Email Error: ", error);
    })
  };

  return (
    <Form onSubmit={handleSubmit} >
      <AlertComponent show={show} handleClose={handleClose} />

      <FloatingLabel className="mb-2" controlId="floatingInput" label="First name">
        <Form.Control type="text" placeholder='First Name' id="first_name" value={firstname}
          onChange={handleFirstnameInput} />
      </FloatingLabel>
      <FloatingLabel className="mb-2" controlId="floatingInput" label="Last name">
        <Form.Control type="text" placeholder='Last Name' id="last_name" value={lastname}
          onChange={handleLastnameInput} />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder='name@examle.com' id="email" value={email}
          onChange={handleEmailInput} />
      </FloatingLabel>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="secondary" onClick={handleSendEmail}>
        Send Email
      </Button>

    </Form>
  );
}

export default RegisterComponent;