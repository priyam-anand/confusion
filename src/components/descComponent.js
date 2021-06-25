import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Modal,ModalBody,ModalHeader,Row,Col,Label} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { addComment } from '../redux/action';
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Description extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values){
        this.toggleModal();
        this.props.dispatch(addComment(this.props.dish.id,values.rating,values.name,values.comment));

    }
    render() {
        const comment = this.props.comments.map((comm) => {
            return (
                <div key={comm.id}>
                    -- <span>{comm.author}</span> Rated us <span>{comm.rating}</span>/5 on <span>{comm.date}</span> and said
                    <p>
                        {comm.comment}
                    </p>
                </div>
            )
        });
        return (
            <div className='container'>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>
                        Add your own Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=>{
                            this.handleSubmit(values)
                        }}>
                            <Row className="form-group">
                                <Label htmlFor="name" md={2}>Name</Label>
                                <Col md={10}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Enter Your Name"
                                        className="form-control"
                                        validators={{
                                            minLength : minLength(3),
                                            maxLength : maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className='text-danger'
                                        model='.name'
                                        show='touched'
                                        messages = {{
                                            minLength : "Name must be longer than 2 characters",
                                            maxLength : "Name must be shorter than 15 characters"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='rating' md={4}>
                                    Select a Rating
                                </Label>
                                <Col md={8}>
                                    <Control.select model='.rating' id='rating'
                                        name='rating'
                                        className='form-control'
                                    >
                                        <option>5</option>
                                        <option>4</option>
                                        <option>3</option>
                                        <option>2</option>
                                        <option>1</option>
                                    </Control.select>
                                </Col>

                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='comment' md={3}>
                                    Your comment
                                </Label>
                                <Col md={9}>
                                    <Control.textarea model='.comment' id='comment' name='comment'
                                        className='form-control' rows='6' />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 3, offset: 9 }}>
                                    <button type="submit" className="btn btn-primary">
                                        Submit
                                    </button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>

                <div className="row">
                    <div key={this.props.dish.id} className="col-12 col-md-5 m-2">
                        <Card>
                            <CardImg src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle>
                                    <h2>{this.props.dish.name}</h2>
                                </CardTitle>

                                <CardText>
                                    {this.props.dish.description}
                                </CardText>
                            </CardBody>
                        </Card>

                    </div>
                    <div className="col-12 col-md-5 m-2">
                        <h2 className="my-3">
                            Feed Back of our product
                        </h2>
                        {comment}
                        <button className='btn btn-outline-secondary'>
                            <strong onClick={this.toggleModal}>
                                Add Comment
                            </strong>
                        </button>
                    </div>
                </div>
            </div>
        );
    }


}
export default Description;
