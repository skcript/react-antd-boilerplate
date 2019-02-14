import thunkMiddleware from 'redux-thunk'
import {
  createLogger
} from 'redux-logger'
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import rootReducer from './Reducers'

const loggerMiddleware = createLogger()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware, // neat middleware that logs actions
  ))
);

export default store;