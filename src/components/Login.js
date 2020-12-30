import React from 'react';
import { Image, Col, Row, Button, Container, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'

const Login = () => {

  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target),
      logInUser = Object.fromEntries(formData.entries())
      
    var currentUsers = JSON.parse(localStorage.getItem("allEntries"));
    var userExists = currentUsers.find(x => x.email == logInUser.email)

    if (userExists.email != null) {
  
      if (userExists.password == logInUser.password) {
  
        userExists.isLoggedIn = true

        currentUsers.push(userExists);
        localStorage.setItem("userLogedIn", JSON.stringify(userExists));
        var userLogedIn = JSON.parse(localStorage.getItem("userLogedIn"));
     
        console.log(userLogedIn);

        let path = '/main';
        history.push(path);


      }
    }


  }

  return (
    <div  className="d-flex justify-content-center p-5  text-white bg-dark">
    
      <Form  onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
    </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
  </Button>
      </Form>

    </div>
  );
}

export default Login;