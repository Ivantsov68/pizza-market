import { combineReducers, createStore } from "redux";
import filtersReducer from "./reducers/filters";
import pizzasReducer from "./reducers/pizzas";

const rootReducer = combineReducers({
   filters: filtersReducer,
   pizzas: pizzasReducer
})

const store = createStore(rootReducer);

export default store;