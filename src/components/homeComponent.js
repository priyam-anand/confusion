import React from 'react';
import { Loading } from './loadingComponent';

function RenderCard({ item, isLoading, errMess }) {

    console.log(isLoading);
    if (isLoading) {
        return (
            <Loading />
        );
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }
    else {
        return (
            <div className="card m-5">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                </div>
            </div>
        );
    }
}

function Home(props) {

    console.log(props)
    return (
        <div className='card-group'>
            <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess} />
            <RenderCard item={props.promotion} />
            <RenderCard item={props.leader} />
        </div>
    );
}

export default Home;