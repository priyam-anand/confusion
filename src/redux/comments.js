import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './actionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comm = action.payload;
            comm.id = state.length;
            comm.date = new Date().toISOString();
            console.log("Comment: ", comm);
            return state.concat(comm);
        default:
            return state;
    }
};