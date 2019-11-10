import React, {Component, Fragment} from "react";
import Button from "./Button";

class Instagram extends Component {
    render() {
        return (
            <div className="content">
                <Button url={'/admin/twitter'} class={'btn btn-info'} title={'Twitter'}/>
                <Button url={'/admin/whatsapp'} class={'btn btn-whatsapp'} title={'WhatsApp'}/>
                <Button url={'/admin/facebook'} class={'btn btn-facebook'} title={'Facebook'}/>
            </div>
        );
    }
}

export default Instagram;
