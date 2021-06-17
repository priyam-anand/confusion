import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
class Contact extends Component {

    constructor(props){
        super(props);

        this.state={
            firstname : '',
            lastname : '',
            telnum : '',
            email : '',
            agree : false,
            contactType : 'Tel.',
            message : ''
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox'?target.checked:target.value;
        const name = target.name;

        this.setState({
            [name] : value
        })
    }

    handleSubmit(event){
        console.log("current state = "+JSON.stringify(this.state));
        alert("state change, check log");
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a href='/' role="button" className="btn btn-info"><i className="fa fa-skype" ></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>

                <h2 className='mt-4 mb-5 ml-3'>
                    Send Us your feedback
                </h2>

                <Form onSubmit={this.handleSubmit}>

                    <FormGroup>
                        <div className='container row'>
                            <Label className='mt-2 col-12 col-md-2' htmlFor="firstname">First Name</Label>
                            <Input className='col-12 col-md-8' type="text" name="firstname" id="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.handleInputChange}/>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className='container row'>
                            <Label className='mt-2 col-12 col-md-2' htmlFor="lastname">Last Name</Label>
                            <Input className='col-12 col-md-8' type="text" name="lastname" id="lastname" placeholder="Last Name" value={this.state.lastname}
                            onChange={this.handleInputChange} />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className='container row'>
                            <Label className='mt-2 col-12 col-md-2' htmlFor="telnum">Contact Number</Label>
                            <Input className='col-12 col-md-8' type="tel" name="telnum" id="telnum" placeholder="Telephone Number" value={this.state.telnum} 
                            onChange={this.handleInputChange}/>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className='container row'>
                            <Label className='mt-2 col-12 col-md-2' htmlFor="email">Email address</Label>
                            <Input className='col-12 col-md-8' type="email" name="email" id="email" placeholder="Email address" value={this.state.email} 
                            onChange={this.handleInputChange}/>
                        </div>
                    </FormGroup>
                    <FormGroup className='row container'>
                        <div className='col-12 col-md-4 ml-5'>
                            <Input type='checkbox' name='agree' checked={this.state.agree}
                            onChange={this.handleInputChange}/>
                            <strong>
                                May we contact you ?
                            </strong>
                        </div>
                        <div className='col-12 col-md-4'>
                            <Input type='select' name='contactType' 
                            value={this.state.contactType}
                            onChange={this.handleInputChange}>
                                <option>Telephone</option>
                                <option>Email</option>
                            </Input>                            
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className='container row'>
                            <Label className='mt-2 col-12 col-md-2' htmlFor="message">Feedback</Label>
                            <Input className='col-12 col-md-8' type="textarea" name="message" id="message" placeholder="Your Feedback" value={this.state.message} onChange={this.handleInputChange}
                            />
                        </div>
                    </FormGroup>
                    <FormGroup className='container row'>
                        <div className='col-5'>
                        </div>
                        <div className='col-7'>
                            <Button type='submit' color='primary'>
                                Send Feedback
                            </Button>
                        </div>
                    </FormGroup>
                </Form>
            </div>
        );
    }

}

export default Contact;