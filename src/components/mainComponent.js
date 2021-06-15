import Menu from "./menuComponent";
import Description from './descComponent'
import { Component } from "react";
import Header from './headerComponent';
import Footer from './footerComponent';
import { DISHES } from "../shared/dishes";
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './homeComponent';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onSelectDish(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <div>
                <Header />

                <Switch>
                    <Route path='/home' component={() => {
                        return (
                            <Home />
                        );
                    }} />

                    <Route exact path='/menu' component={() => {
                        return (
                            <Menu dishes={this.state.dishes} />
                        );
                    }} />
                    
                    <Redirect to='/home' />
                </Switch>

                <Footer />
            </div>
        );
    }
}

export default Main;
