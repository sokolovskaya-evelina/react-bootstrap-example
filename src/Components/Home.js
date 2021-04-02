import React from 'react';
import Slider from "./Slider";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import sky from './../assets/sky.jpg'
import flower from './../assets/flower.jpg'
import geometry from './../assets/geometry.jpg'
import Jumbotron from "./Jum";

const Home = () => {
    return (
        <>
            <Slider/>
            <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
                <Row>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant='top' src={flower}/>
                            <Card.Body>
                                <Card.Title>
                                    Card Name
                                </Card.Title>
                                <Card.Text>
                                    Some card text. Some card text. Some card text. Some card text.
                                </Card.Text>
                                <Button variant='secondary'>Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant='top' src={sky}/>
                            <Card.Body>
                                <Card.Title>
                                    Card Name
                                </Card.Title>
                                <Card.Text>
                                    Some card text. Some card text. Some card text. Some card text.
                                </Card.Text>
                                <Button variant='secondary'>Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant='top' src={geometry}/>
                            <Card.Body>
                                <Card.Title>
                                    Card Name
                                </Card.Title>
                                <Card.Text>
                                    Some card text. Some card text. Some card text. Some card text.
                                </Card.Text>
                                <Button variant='secondary'>Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Jumbotron/>
            <Container style={{marginBottom: '30px'}}>
                <Row>
                    <Col md={7}>
                        <img src={flower} height={400}/>
                    </Col>
                    <Col md={5}>
                        <h2>Example</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus ad at delectus ea eaque
                            earum
                            eveniet facere fugiat illo magni nisi, nobis, optio porro repellat sed voluptate voluptatem.
                            Dignissimos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus ad at
                            delectus ea eaque earum eveniet facere fugiat illo magni nisi, nobis, optio porro repellat sed
                            voluptate voluptatem. Dignissimos.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;