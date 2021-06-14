import React from 'react';
import Comment from './commComponent'

function Description(props) {
    if (props.selectedDish == null) {
        return (
            <div></div>
        )
    }
    else {
        return(
            <Comment dish={props} />
        )
    }
}
export default Description;