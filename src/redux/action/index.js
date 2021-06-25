export const addComment = (dishId, rating, author, comment) => {
    return{
        type : 'ADD_COMMENT',
        payload: {
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
        }
    }
}