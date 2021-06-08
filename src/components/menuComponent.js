import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    Button,
} from "reactstrap";
import Description from '../components/descComponent'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
        };
    }

    onSelectDish(dish) {
        this.setState({ selectedDish: dish });
    }

    // renderDish(dish) {
    //     if (dish != null) {
    //         return (
    //             <div className="col-12 col-md-5 m-2">
    //                 <Card>
    //                     <CardImg top src={dish.image} alt={dish.name} />
    //                     <CardBody>
    //                         <CardTitle>
    //                             <h3>
    //                                 {dish.name}
    //                             </h3>
    //                         </CardTitle>
    //                         <CardText>{dish.description}</CardText>
    //                     </CardBody>
    //                 </Card>
    //             </div>

    //         );
    //     } else {
    //         return <div></div>;
    //     }
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
                                onClick={() => {
                                    this.onSelectDish(dish);
                                }}
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
                <Description selectedDish={this.state.selectedDish}/>
            </div>
        );
    }
}

export default Menu;
