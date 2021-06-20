import Menu from "./menuComponent";
import Description from './descComponent'
import { Component } from "react";
import Header from './headerComponent';
import Footer from './footerComponent';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Home from './homeComponent';
import Contact from './contactComponent';
import About from './aboutComponent';
import {connect} from 'react-redux';

const mapstateToProps = (state)=>{
    return{
        dishes : state.dishes,
        comments : state.comments,
        promotions : state.promotions,
        leaders : state.leaders
    }
}

class Main extends Component {

    render() {

        const descWithComments = ({ match }) => {
            return (
                <Description
                    dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                />
            );
        }

        return (
            <div>
                <Header />

                <Switch>
                    <Route path='/home' component={() => {
                        return (
                            <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                                promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                                leader={this.props.leaders.filter((leader) => leader.featured)[0]} />
                        );
                    }} />
                    <Route exact path='/menu' component={() => {
                        return (
                            <Menu dishes={this.props.dishes} />
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
                            <About leaders={this.props.leaders}/>
                        );
                    }}/>
                    <Redirect to='/home' />
                </Switch>

                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapstateToProps)(Main));
