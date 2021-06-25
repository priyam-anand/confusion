import updateComment from "./comment";
import updateDish from "./dishes";
import updateLeader from "./leaders";
import updatePromotion from "./promotion";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    updateComment,
    updateDish,
    updateLeader,
    updatePromotion
})

export default rootReducer;