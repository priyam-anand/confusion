import React from 'react'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
} from 'reactstrap';
function Comment(props) {
    const comment = props.dish.selectedDish.comments.map((comm) => {
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
                <div key={props.dish.selectedDish.id} className="col-12 col-md-5 m-2">
                    <Card>
                        <CardImg src={props.dish.selectedDish.image} alt={props.dish.selectedDish.name} />
                        <CardBody>
                            <CardTitle>
                                <h2>{props.dish.selectedDish.name}</h2>
                            </CardTitle>

                            <CardText>
                                {props.dish.selectedDish.description}
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
export default Comment
