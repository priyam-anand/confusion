import Menu from "./menuComponent";
import Description from './descComponent'
import { Component } from "react";
import Header from './headerComponent';
import Footer from './footerComponent';
import { DISHES } from "../shared/dishes";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish : null
        };
    }

    onSelectDish(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <div>
                <Header/>
                <Menu dishes={this.state.dishes} 
                    onClick={ (dishId) => {
                        this.onSelectDish(dishId);
                    }}/>
                
                <Description selectedDish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]}/>
                <Footer />
            </div>
        );
    }
}

export default Main;
