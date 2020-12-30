import React, { useState } from 'react';
import { Card, Button, Container, Form, Jumbotron, Modal, Accordion } from 'react-bootstrap';

import '../css/images.css'

import rock from "../images/rock.png"
import scissors from "../images/scissors.png"
import paper from "../images/paper.png"
import questionMark from "../images/questionMark.png"
import computer from "../images/computer.png"
import { useStore } from 'react-redux';



const Main = () => {
    const [computerVal, setComputerVal] = React.useState(0);
    const [userTurn, setUserTurn] = React.useState(0);

    const [userScore, setUserScore] = React.useState(0);
    const [computerScore, setComputerScore] = React.useState(0);


    const genScore = (props) => {

        setUserTurn(1)

        setComputerVal(Math.floor(Math.random() * 3))

        if(userTurn)
             matchHuman(props)
        else
            matchComputer(props)

    }

    const matchComputer = (props) => {
        if (props == computerVal) {
            setComputerScore(computerScore +1)
            console.log("winner computer: " + computerScore);
        }
        setUserTurn(1)
    }


    const matchHuman = (props) => {
        if (props == computerVal) {
            setUserScore(userScore +1)
            console.log("winner human: " + userScore);
        }

        setUserTurn(0)
    }

    return (
        <div>
            {userTurn ? <img src={questionMark} className="image" />: <img src={computer} className="image" /> }



            <p>Choose Your Weapon</p>

            <img src={rock} className="image" onClick={() => genScore(0)} />
            <img src={scissors} className="image" onClick={() => genScore(1)} />
            <img src={paper} className="image" onClick={() => genScore(2)} />
        </div>

    );
}

export default Main;



// {console.log(userTurn)}
// {userTurn ? <img src={questionMark} className="image" />: (() => {
//     switch (computerVal) {
//         case 0:
            
//             return <img src={rock} className="image" />

//         case 1:
            
//             return <img src={scissors} className="image" />
//         case 2:
         
//             return <img src={paper} className="image" />
//     }
// })()  }
