import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    Button,
} from "reactstrap";

class Menu extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-2">
                    <Card>
                        <CardImg src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>
                                <h2>{dish.name}</h2>
                            </CardTitle>

                            <Button
                                onClick={()=>this.props.onClick(dish.id)}
                            >
                                Show Details
                            </Button>
                        </CardBody>
                    </Card>
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
