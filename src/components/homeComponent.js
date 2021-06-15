import React from 'react';

function RenderCard(data) {
    return (
        <div className="card ml-2">
            <img src={data.item.image} className="card-img-top" alt={data.item.name} />
            <div className="card-body">
                <h5 className="card-title">{data.item.name}</h5>
                <p className="card-text">{data.item.description}</p>
            </div>
        </div>
    )
}

function Home(props) {
    
    return (
        <div className='card-group'>
            <RenderCard item={props.dish}/>
            <RenderCard item={props.promotion}/>
            <RenderCard item={props.leader}/>
        </div>
    );
}

export default Home;