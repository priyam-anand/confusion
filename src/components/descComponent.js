import { Component } from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
} from 'reactstrap';

class Description extends Component {

    // constructor(props) {
    //     super(props);
    // }
    render() {
        if (this.props.selectedDish == null) {
            return (
                <div></div>
            )
        }
        else {
            const comment = this.props.selectedDish.comments.map((comm) => {
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
                    <div className="row">
                        <div key={this.props.selectedDish.id} className="col-12 col-md-5 m-2">
                            <Card>
                                <CardImg src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                                <CardBody>
                                    <CardTitle>
                                        <h2>{this.props.selectedDish.name}</h2>
                                    </CardTitle>

                                    <CardText>
                                        {this.props.selectedDish.description}
                                    </CardText>
                                </CardBody>
                            </Card>

                        </div>
                        <div className="col-12 col-md-5 m-2">
                            <h2 className="my-3">
                                Feed Back of our product
                        </h2>
                            {comment}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Description;