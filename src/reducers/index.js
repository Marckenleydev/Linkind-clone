import { combineReducers } from "redux"

import userReducer from "./userReducer"
import ArticleReducer from "./ArticleReducer"

const rootReducer = combineReducers({
  userState: userReducer,
  articleState:ArticleReducer,


})
export default rootReducer;