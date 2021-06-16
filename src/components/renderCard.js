import React from 'react'
import { Link } from 'react-router-dom';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    Button,
} from "reactstrap";

function CardView(props) {
    return (
        <Card>
            <CardImg src={props.dish.image} alt={props.dish.name} />
            <CardBody>
                <CardTitle>
                    <h2>{props.dish.name}</h2>
                </CardTitle>

                <Link to={`/menu/${props.dish.id}`}>
                    <Button>
                        Show Details
                    </Button>
                </Link>
                
            </CardBody>
        </Card>
    )
}

export default CardView