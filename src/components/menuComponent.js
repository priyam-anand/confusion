import React from "react";
import CardView from './renderCard';
import {Loading} from './loadingComponent'
function Menu(props) {
    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-2">
                <CardView dish={dish} />
            </div>
        );
    });
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
        return (
        <div className="container">
            <div className="row">{menu}</div>
        </div>
    );
    }
    
}

export default Menu;
