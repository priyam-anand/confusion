import React from "react";
import CardView from './renderCard';

function Menu(props) {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-2">
                <CardView dish={dish} onClick={() => {
                    props.onClick(dish.id)
                }} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">{menu}</div>
        </div>
    );
}

export default Menu;
