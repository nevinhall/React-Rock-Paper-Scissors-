import React, { useState } from 'react';
import { Card, Button, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'

const Home = () => {
    const history = useHistory();
    const rediretSignUp = () => {
        let path = '/signup';
        history.push(path);
    }

    const rediretLogin = () => {
        let path = '/login';
        history.push(path);
    }

    return (
        <div>

            <Container>
                <Row  className="d-flex justify-content-center p-5">
                    <h1>Are you Ready to Play ?</h1>
                </Row>


                <Row  className="d-flex justify-content-center p-5">
                    <Button onClick={rediretSignUp} className="m-5">Sign Up</Button>
                    <Button onClick={rediretLogin} className="m-5">Login</Button>
                </Row>

            </Container>
        </div>
    )
}

export default Home