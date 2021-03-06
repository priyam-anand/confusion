import Menu from "./menuComponent";
import Description from './descComponent'
import Header from './headerComponent';
import Footer from './footerComponent';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './homeComponent';
import Contact from './contactComponent';
import About from './aboutComponent';
import { useSelector, useDispatch } from "react-redux";
import { fetchDishes,fetchComments,fetchPromos } from "../redux/action/index";
import { useEffect } from "react";


const Main = () => {

    const stateDish = useSelector((state) => state.updateDish);
    const stateComment = useSelector((state) => state.updateComment);
    const stateLeader = useSelector((state) => state.updateLeader);
    const statePromotion = useSelector((state) => state.updatePromotion);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDishes());
        dispatch(fetchComments());
        dispatch(fetchPromos());
    }, []);

    const descWithComments = ({ match }) => {
        return (
            <Description
                dish={stateDish.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                comments={stateComment.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                isLoading={stateDish.isLoading}
                errMess={stateDish.errMess}
                commentsIsLoading={stateComment.isLoading}
                commentsErrMess={stateComment.errMess}
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
                        <Home dish={stateDish.dishes.filter((dish) => dish.featured)[0]}
                            dishesLoading={stateDish.isLoading}
                            dishesErrMess={stateDish.errMess}
                            promotion={statePromotion.promotions.filter((promo) => promo.featured)[0]}
                            promosLoading={statePromotion.isLoading}
                            promosErrMess={statePromotion.errMess}
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
                        <Contact dispatch={dispatch}/>
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
