
const updateComment = (state = {
    errMess : null,
    comments : []
} , action) =>{
    switch (action.type) {
        case 'ADD_COMMENTS':
            return { ...state,isLoading:false, errMess: null, comments: action.payload };
        case 'DISHES_FAILED':
            return { ...state, isLoading: false, errMess: action.payload , comments : []};

        case 'ADD_COMMENT':
            var comm = action.payload;
            console.log("Comment: ", comm);
            return {...state , comments : state.comments.concat(comm)};
        default:
            return state;
    }
}

export default updateComment;