import { combineReducers } from 'redux'
import { REDUX_FUNCTION } from './ReducersMethods'


const initialStore = {
  init: true
};

const globalState = (state = initialStore, action) => {
  if (REDUX_FUNCTION[action.type])
    return REDUX_FUNCTION[action.type](state, action);
  else
    return state

};


const rootReducer = combineReducers({
  globalState,
})

export default rootReducer;