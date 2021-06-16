import Menu from "./menuComponent";
import Description from './descComponent'
import { Component } from "react";
import Header from './headerComponent';
import Footer from './footerComponent';
import { DISHES } from "../shared/dishes";
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './homeComponent';
import Contact from './contactComponent';
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import About from './aboutComponent';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS
        };
    }

    render() {

        const descWithComments = ({ match }) => {
            return (
                <Description
                    dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                />
            );
        }

        return (
            <div>
                <Header />

                <Switch>
                    <Route path='/home' component={() => {
                        return (
                            <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                                promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                                leader={this.state.leaders.filter((leader) => leader.featured)[0]} />
                        );
                    }} />
                    <Route exact path='/menu' component={() => {
                        return (
                            <Menu dishes={this.state.dishes} />
                        );
                    }} />
                    <Route path='/menu/:dishId' component={descWithComments} />
                    <Route exact path='/contactus' component={() => {
                        return (
                            <Contact />
                        )
                    }} />
                    <Route path='/aboutus' component={()=>{
                        return(
                            <About leaders={this.state.leaders}/>
                        );
                    }}/>
                    <Redirect to='/home' />
                </Switch>

                <Footer />
            </div>
        );
    }
}

export default Main;
