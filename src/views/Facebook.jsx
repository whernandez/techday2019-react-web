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
                <Profile portadaUrl={"whatsapp.png"}/>
            </div>
        );
    }
}

export default Facebook;
