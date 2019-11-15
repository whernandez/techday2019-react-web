import React, {Component, Fragment} from "react";
import Button from "./Button";
import {Card, CardBody, CardFooter, Col, Row} from "reactstrap";
import {FaRegHandPointRight} from "react-icons/fa";
import {Profile} from "./Profile";

class Facebook extends Component {
    render() {
        return (
            <div className="content">
                <Button url={'/admin/twitter'} class={'btn btn-twitter'} title={'Twitter'}/>
                <Button url={'/admin/whatsapp'} class={'btn btn-whatsapp'} title={'WhatsApp'}/>
                <Button url={'/admin/instagram'} class={'btn btn-instagram'} title={'Instagram'}/>
                <Row>
                    <Col  className="mr-auto" lg="6">
                        <Card className="card-user">
                            <div className="image">
                                <img
                                    alt="..."
                                    src={require(`assets/img/portadas/facebook.jpg`)}
                                />
                            </div>
                            <CardBody>
                                <div className="author">
                                    <a href="#pablo" onClick={e => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            className="avatar border-gray"
                                            src={require("assets/img/logo-small.png")}
                                        />
                                        <h5 className="title">Wandy Hernández</h5>
                                    </a>
                                    <p className="description">@WandyHernnadez2</p>
                                </div>
                                <p className="description text-center">
                                    "Programador Full Stack Senior <br />
                                    con experiencia en PHP, APEX (Java), <br />
                                    Node.js, .Net(C#, VB), Mysql, Firebase, Graphql, <br/>
                                    Javascript (React, React Native, Electron)."
                                </p>
                            </CardBody>
                            <CardFooter>
                                <hr />
                                <div className="button-container">
                                    <Row>
                                        <Col className="ml-auto" lg="3" md="6" xs="6">
                                            <Button url='' title={"Me gusta"}/>
                                        </Col>
                                        <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                                            <Button url='' title={"Comentar"}/>
                                        </Col>
                                        <Col className="mr-auto" lg="3">
                                            <Button url='' title={"Enviar"}/>
                                        </Col>
                                    </Row>
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
                {/*<Profile portadaUrl={"facebook.jpg"}/>*/}
            </div>
        );
    }
}

export default Facebook;
