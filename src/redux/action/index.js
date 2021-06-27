import { baseUrl } from '../../shared/baseUrl';

//DISHES
export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
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
export const addComment = (comment) => {
    return {
        type: 'ADD_COMMENT',
        payload: comment
    }
}
export const postComment = (dishId, rating, author, comment) => (dispatch) => {

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();
    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => { console.log('post comments', error.message); alert('Your comment could not be posted\nError: ' + error.message); });

}
export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
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
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
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