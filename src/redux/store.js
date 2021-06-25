import rootReducer from "./reducer/rootReducer";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(rootReducer,applyMiddleware(thunk,logger));

export default store;