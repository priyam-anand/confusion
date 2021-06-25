import rootReducer from "./reducer/rootReducer";
import { createStore } from "redux";

const store = createStore(rootReducer);

export default store;