import { createStore } from "redux";
import ageReducer from '../reducers/ageReducers'

//not necessary

const store =()=>{
    const store = createStore(ageReducer);

    return store;
}

export default store;


// store.dispatch({type:'ADD'});
// console.log(store.getState());
