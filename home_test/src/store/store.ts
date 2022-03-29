import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import productsReducer from "./reducers/productsReducer";

const rootReducer = combineReducers({
    productsReducer,
});
export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 