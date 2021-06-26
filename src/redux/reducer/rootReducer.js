import updateComment from "./comment";
import updateDish from "./dishes";
import updateLeader from "./leaders";
import updatePromotion from "./promotion";
import { combineReducers } from "redux";
import { createForms } from "react-redux-form";
import {InitialFeedback} from './forms';

const rootReducer = combineReducers({
    updateComment,
    updateDish,
    updateLeader,
    updatePromotion,
    ...createForms({
        feedback : InitialFeedback
    })
})

export default rootReducer;