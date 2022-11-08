import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "../reducers";
import rootSaga from "../middleware";

const logger = createLogger();
const saga = createSagaMiddleware();
const store = createStore(
  rootReducers,
  undefined,
  composeWithDevTools(applyMiddleware(saga, logger))
);
saga.run(rootSaga);

export default store;
