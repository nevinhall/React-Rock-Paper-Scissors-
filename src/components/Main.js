import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

import '../css/images.css'

import rock from "../images/rock.png"
import scissors from "../images/scissors.png"
import paper from "../images/paper.png"
import questionMark from "../images/questionMark.png"
import computer from "../images/computer.png"
import { useStore } from 'react-redux';



const Main = () => {
    const [computerVal, setComputerVal] = React.useState();
    const [prevComputerVal, setPrevComputerVal] = React.useState(0);

    const [userTurn, setUserTurn] = React.useState(0);

    const [winnerFound, setWinnerFound] = React.useState(0);

    const [userScore, setUserScore] = React.useState(0);
    const [computerScore, setComputerScore] = React.useState(0);

    const [userOverallScore, setUserOverallScore] = React.useState(0);
    const [computerOverallScore, setComputerOverallScore] = React.useState(0);

    const [gameNum, setGameNum] = React.useState(0);



    const genScore = (props) => {

        setUserTurn(1)
        setWinnerFound(0)

        setPrevComputerVal(computerVal)
        setComputerVal(Math.floor(Math.random() * 3))

        if (userTurn)
            matchHuman(props)
        else
            matchComputer(props)


        if ((userScore || computerScore) >= 10) {
            console.log("game over");
            if (userScore >= 10) {
                setUserOverallScore(userOverallScore + 1)
            }

            if (computerScore >= 10) {
                setComputerOverallScore(computerOverallScore + 1)
            }

            setUserScore(0)
            setComputerScore(0)
            setGameNum(gameNum + 1)

        }

    }

    const matchComputer = (props) => {
        if (props == computerVal) {
            console.log("log its a tie");
        }

        if ((props == 1) && (computerVal == 0)) {
            setComputerScore(computerScore + 1)
            setWinnerFound(1)
            console.log("winner computer: " + computerScore);
        }

        if ((props == 2) && (computerVal == 1)) {
            setComputerScore(computerScore + 1)
            setWinnerFound(1)
            console.log("winner computer: " + computerScore);
        }

        if ((props == 0) && (computerVal == 2)) {
            setComputerScore(computerScore + 1)
            setWinnerFound(1)
            console.log("winner computer: " + computerScore);
        }

        setUserTurn(1)
    }


    const matchHuman = (props) => {
        if (props == computerVal) {
            console.log("log its a tie");
        }

        if ((props == 0) && (computerVal == 1)) {
            setUserScore(userScore + 1)
            setWinnerFound(1)
            console.log("winner human: " + userScore);
        }

        if ((props == 1) && (computerVal == 2)) {
            setUserScore(userScore + 1)
            setWinnerFound(1)
            console.log("winner human: " + userScore);
        }

        if ((props == 2) && (computerVal == 0)) {
            setUserScore(userScore + 1)
            setWinnerFound(1)
            console.log("winner human: " + userScore);
        }


        setUserTurn(0)
    }

    return (
        <div >
            <Container fluid>
                <Row className="d-flex justify-content-center p-5  text-white bg-dark">
                    {userTurn ? <img src={questionMark} className="image" /> : (winnerFound ? (() => {
                        switch (prevComputerVal) {
                            case 0:
                                return (
                                    <div className="d-flex justify-content-start">
                                        <p>Congrats, you beat the Computer it Picked:</p>
                                        <img src={rock} className="image" />
                                    </div>

                                )

                            case 1:

                                return (
                                    <div>
                                        <p>Congrats, you beat the Computer it Picked:</p>
                                        <img src={scissors} className="image" />
                                    </div>
                                )

                            case 2:

                                return (
                                    <div >
                                        <p>Congrats, you beat the Computer it Picked:</p>
                                        <img src={paper} className="image" />
                                    </div>
                                )

                        }
                    })() : <img src={computer} className="image" />)}

                </Row>


                <div>
                    <h1>Choose Your Weapon:</h1>
                    <Row className="d-flex justify-content-center p-5">
                        <Row>

                        </Row>

                        <Col className="d-flex justify-content-center p-5">
                            <img src={rock} className="image" onClick={() => genScore(0)} />
                        </Col>
                        <Col className="d-flex justify-content-center p-5">
                            <img src={scissors} className="image" onClick={() => genScore(1)} />
                        </Col>
                        <Col className="d-flex justify-content-center p-5">
                            <img src={paper} className="image" onClick={() => genScore(2)} />
                        </Col>
                    </Row>
                </div>

                <Row>
                    <h1>Results:</h1>
                    <div className="d-flex justify-content-center p-5">
                        <Row>
                        <Col className="d-flex justify-content-center p-5 text-white bg-dark">
                                <h2>OverAll</h2>
                            </Col>
                            <Col className="d-flex justify-content-center p-5">
                                <h3>Computer:{computerOverallScore}</h3>
                            </Col>
                            <Col className="d-flex justify-content-center p-5 text-white bg-dark">
                                <h3>Human:{userOverallScore}</h3>
                            </Col>
                        </Row>

                        <Row>
                   
                        <Col className="d-flex justify-content-center p-5">
                                <h2>Game:{gameNum}</h2>
                            </Col>
                            <Col className="d-flex justify-content-center p-5 text-white bg-dark">
                                <h3>Computer:{computerScore}</h3>
                            </Col>
                            <Col className="d-flex justify-content-center p-5">
                                <h3>Human:{userScore}</h3>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container >
        </div>

    );
}

export default Main;


