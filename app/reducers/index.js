import redux from 'npm:redux';

const combineReducers = redux.combineReducers;

const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
