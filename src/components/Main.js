import React, { useState } from 'react';
import { Card, Button, Container, Form, Jumbotron, Modal, Accordion } from 'react-bootstrap';


const Main = () => {
    const [computerVal, setComputerVal] = React.useState(0);
    const [userVal, setUserVal] = React.useState(0);
    const[show,setShow] = React.useState(false);






      const genScore = () => {  
        console.log("t");
        setShow(true)
        setComputerVal(5)
      }


    return (
        <div>
            {show ? computerVal : 0}

            <Button onClick={genScore}>Play</Button>
        </div>

    );
}

export default Main;