import { baseUrl } from '../../shared/baseUrl';

export const addComment = (dishId, rating, author, comment) => {
    return {
        type: 'ADD_COMMENT',
        payload: {
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
        }
    }
}

//DISHES
export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));
    return fetch(baseUrl + 'dishes')
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)));
}
export const dishesLoading = () => ({
    type: 'DISHES_LOADING'
});
export const dishesFailed = (errmess) => ({
    type: 'DISHES_FAILED',
    payload: errmess
});
export const addDishes = (dishes) => ({
    type: 'ADD_DISHES',
    payload: dishes
});

//COMMENTS
export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)));
}
export const addComments = (comments) => ({
    type: 'ADD_COMMENTS',
    payload: comments
});
export const commentsFailed = (errmess) => ({
    type: 'COMMENTS_FAILED',
    payload: errmess
});

//PROMOTIONS
export const fetchPromos = () => (dispatch) => {

    dispatch(promosLoading(true));
    return fetch(baseUrl + 'promotions')
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: 'PROMOS_LOADING'
});
export const promosFailed = (errmess) => ({
    type: 'PROMOS_FAILED',
    payload: errmess
});
export const addPromos = (promos) => ({
    type: 'ADD_PROMOS',
    payload: promos
});