import {COMMENTS} from '../../shared/comments';

const initialState =  COMMENTS


const updateComment = (state = initialState , action) =>{
    switch (action.type) {
        case 'ADD_COMMENT':
            var comm = action.payload;
            comm.id = state.length;
            comm.date = new Date().toISOString();
            console.log("Comment: ", comm);
            return state.concat(comm);
        default:
            return state;
    }
}

export default updateComment;