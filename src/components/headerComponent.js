import React, { Component } from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Modal, Jumbotron, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogIn = this.handleLogIn.bind(this);
    }
    handleLogIn(event) {
        this.toggleModal();
        alert('Username is ' + this.username.value + " password is " + this.password.value + " Remember me is " + this.remember.checked);
        event.preventDefault();
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    render() {
        return (
            <React.Fragment>
                <Navbar dark expand='md'>
                    <div className="container">
                        <NavbarToggler onClick={() => {
                            this.toggleNav();
                        }} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <button className='ml-auto btn btn-secondary' onClick={this.toggleModal}>
                                    Sign In
                                </button>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>
                        Log In
                    </ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label htmlFor='username'>
                                    Username
                                </Label>
                                <Input type='text' id='username' name='username'
                                    innerRef={(input) => this.username = input}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='password'>
                                    Password
                                </Label>
                                <Input type='password' id='password' name='password' innerRef={(input) => this.password = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Input className='ml-2' type='checkbox' name='remember' innerRef={(input) => this.remember = input}/>
                                <Label className='ml-4'>
                                    Remember Me
                                </Label>

                            </FormGroup>
                            <button type='submit' value='submit' className='btn btn-primary' onClick={this.handleLogIn}>
                                LogIn
                            </button>
                        </Form>
                    </ModalBody>
                </Modal>
                <Jumbotron className="custom-jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment >
        )
    }
}

export default Header