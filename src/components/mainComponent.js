import Menu from "./menuComponent";
import Description from './descComponent'
import Header from './headerComponent';
import Footer from './footerComponent';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './homeComponent';
import Contact from './contactComponent';
import About from './aboutComponent';
import { useSelector, useDispatch } from "react-redux";

const Main = () => {

    const stateDish = useSelector((state) => state.updateDish);
    const stateComment = useSelector((state) => state.updateComment);
    const stateLeader = useSelector((state) => state.updateLeader);
    const statePromotion = useSelector((state) => state.updatePromotion);
    const dispatch = useDispatch();

    const descWithComments = ({ match }) => {
        return (
            <Description
                dish={stateDish.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                comments={stateComment.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                dispatch={dispatch}
            />
        );
    }

    return (
        <div>
            <Header />

            <Switch>
                <Route path='/home' component={() => {
                    return (
                        <Home dish={stateDish.filter((dish) => dish.featured)[0]}
                            promotion={statePromotion.filter((promo) => promo.featured)[0]}
                            leader={stateLeader.filter((leader) => leader.featured)[0]} />
                    );
                }} />
                <Route exact path='/menu' component={() => {
                    return (
                        <Menu dishes={stateDish} />
                    );
                }} />
                <Route path='/menu/:dishId' component={descWithComments} />
                <Route exact path='/contactus' component={() => {
                    return (
                        <Contact />
                    )
                }} />
                <Route path='/aboutus' component={() => {
                    return (
                        <About leaders={stateLeader} />
                    );
                }} />
                <Redirect to='/home' />
            </Switch>

            <Footer />
        </div>
    );
}

export default Main;
