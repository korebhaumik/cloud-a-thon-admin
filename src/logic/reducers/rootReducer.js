import { combineReducers } from "redux";
import { dataReducer } from "./allData";
import { orderReducer } from "./orderData";

const rootReducer = combineReducers({
  allData: dataReducer,
  orderData: orderReducer,
});

export default rootReducer;
