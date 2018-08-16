import {
    createStore,combineReducers
} from 'redux';

const IncrementReducer = (counter = 1, action) => {
    switch (action.type) {
        case 'INCREMENT':
            //immutable logic:
            return counter + 1;
        default:
            return counter;
    }
}
const DecrementReducer = (counter = 100, action) => {
    switch (action.type) {
        case 'DECREMENT':
            //immutable logic:
            return counter -  1;
        default:
            return counter;
    }
}
const rootReducer=combineReducers({IncrementReducer,DecrementReducer})
const store = createStore(rootReducer);

//Dispatch an action
const INCREMENT_ACTION = {
    type: 'INCREMENT'
}
store.subscribe(()=>{
   const increment = store.getState().IncrementReducer
   console.log(increment)
})

store.dispatch(INCREMENT_ACTION);
store.dispatch(INCREMENT_ACTION);
store.dispatch({type:'DECREMENT'})