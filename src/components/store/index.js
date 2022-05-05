import { createStore } from 'redux';

function counterReducer(state = { count: 0, step: 5, max: 50 }, action) {
    switch (action.type) {
      case 'increment':
        if (state.count + state.step <= state.max) {
          return { ...state, count: state.count + state.step };
        } else {
          return { ...state };
        }
  
      case 'decrement':
        if (state.count - state.step >= 0) {
          return { ...state, count: state.count - state.step };
        } else {
          return { ...state };
        }
  
      case 'changeStep':
        return { ...state, step: action.payload };
  
      case 'updateMax':
        return { ...state, max: action.payload };
  
      case 'reset':
        return { count: 0, step: 5, max: 50 };
  
      default:
        return state;
    }
  }

export let store = createStore(counterReducer);