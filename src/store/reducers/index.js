import {combineReducers} from "redux";
import devicesTypesReducer from "./devicesTypesReducer";
import userInfoReducer from "./userInfoReducer";

const reducers = combineReducers({
    devicesTypes: devicesTypesReducer,
    userInfo: userInfoReducer
});


export default reducers;