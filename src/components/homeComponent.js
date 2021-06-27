import React from 'react';
import { Loading } from './loadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderCard({ item, isLoading, errMess }) {

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
                <img src={baseUrl + item.image} className="card-img-top" alt={item.name} />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                </div>
            </div>
        );
    }
}

function Home(props) {

    return (
        <div className='card-group'>
            <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess} />
            <RenderCard item={props.promotion} isLoading={props.promosLoading}
                errMess={props.promosErrMess} />
            <RenderCard item={props.leader} />
        </div>
    );
}

export default Home;