import React from "react";
import {Loading} from './loadingComponent'
import {baseUrl} from '../shared/baseUrl';
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
            <CardImg src={baseUrl+props.dish.image} alt={props.dish.name} />
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

function Menu(props) {
    if (props.dishes.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.dishes.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else{
        const menu = props.dishes.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-2">
                    <CardView dish={dish} />
                </div>
            );
        });
        return (
        <div className="container">
            <div className="row">{menu}</div>
        </div>
    );
    }
    
}

export default Menu;
