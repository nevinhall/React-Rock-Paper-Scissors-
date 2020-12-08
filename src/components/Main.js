import React, { useState } from 'react';
import { Card, Button, Container, Form, Jumbotron, Modal, Accordion } from 'react-bootstrap';

import rock from "../images/rock.png"
import scissors from "../images/scissors.png"
import paper from "../images/paper.png"


const Main = () => {
    const [computerVal, setComputerVal] = React.useState(0);
    const [userVal, setUserVal] = React.useState(0);
    const [show, setShow] = React.useState(false);





    const genScore = () => {
        console.log("t");
        setShow(true)
        setComputerVal(Math.floor(Math.random() * 3))
    }




    return (
        <div>
            <img src={rock}  />
            <img src={scissors}  />
            <img src={paper}  />

            {show ? computerVal : 0}
            <Button onClick={genScore}>Play</Button>
        </div>

    );
}

export default Main;