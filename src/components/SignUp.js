import React, { useState } from 'react';
import { Image, Col, Row, Button, Container, Form, Table } from 'react-bootstrap';
import { Redirect, useHistory } from 'react-router-dom'





const SignUpComponent = () => {
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target),
            newUser = Object.fromEntries(formData.entries())
        console.log(newUser)


        var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
        if (existingEntries == null) existingEntries = [];


        var updatedUsers = existingEntries.filter(item => item.fname !== newUser.fname)

        updatedUsers.push(newUser)


        console.log(existingEntries);
        localStorage.setItem("allEntries", JSON.stringify(updatedUsers));



        let path = '/login';
        history.push(path);
    }


    const onClikcHanler = () => {
        let path = '/login';
        history.push(path);
    }



    return (
        <div className="p-5  text-white bg-dark">
            <Container >
                <Row >
                    <Col>
                        <Form onSubmit={handleSubmit} >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" />
                            </Form.Group>

                            <Form.Row>
                                <Col>
                                    <Button variant="primary" type="submit"> Submit</Button>
                                </Col>
                                <Col>
                                    <Button onClick={onClikcHanler}> Already Have an account ?</Button>
                                </Col>
                            </Form.Row>
                        </Form>
                    </Col>
                </Row>
            </Container>



        </div>
    );
}

export default SignUpComponent;


















