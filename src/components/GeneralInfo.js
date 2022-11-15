import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";

class GeneralInfo extends React.Component {
    constructor(props){
        super(props)
    }


    render(){
        return(
            <Container as={Form} onSubmit={this.props.handlesubmit}>
                {/* name input
                    email input,
                    phome,
                    city */}
                <Form.Label htmlFor="server">Enter server</Form.Label>
                <Form.Control
                    type="text"
                    id="server"
                    value={this.props.server}
                    onChange={this.props.handlechange}
                    disabled={this.props.disabled}
                />

                <Form.Label htmlFor="database">Enter database</Form.Label>
                <Form.Control
                    type="text"
                    id="database"
                    value={this.props.database}
                    onChange={this.props.handlechange}
                    disabled={this.props.disabled}
                />

                <Form.Label htmlFor="device-id">Enter device-id</Form.Label>
                <Form.Control
                    type="text"
                    id="device-id"
                    value={this.props.deviceid}
                    onChange={this.props.handlechange}
                    disabled={this.props.disabled}
                />

                { !this.props.disabled
                    ? <Button 
                        variant="primary"
                        type="submit"
                        active>
                        Submit
                    </Button>
                        : <Button
                            variant="primary"
                            type="submit"
                            active
                            >Edit
                        </Button> }
            </Container>
        )
    }
}

export default GeneralInfo;