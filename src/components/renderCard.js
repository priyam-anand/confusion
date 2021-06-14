import React from 'react'
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

                <Button
                    onClick={() => props.onClick(props.dish.id)}
                >
                    Show Details
                </Button>
            </CardBody>
        </Card>
    )
}

export default CardView