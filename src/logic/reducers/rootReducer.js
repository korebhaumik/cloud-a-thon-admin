import { combineReducers } from "redux";
import { dataReducer } from "./allData";
import { globalBoolReducer, orderDataReducer } from "./global";

const rootReducer = combineReducers({
  allData: dataReducer,
  gBool: globalBoolReducer,
  orderData: orderDataReducer,
});

export default rootReducer;
