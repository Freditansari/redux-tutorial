//TODO : 1. Create reducers. 

const initialState = {
    age:21
};

const ageReducer =(state = initialState, action) =>{

    const newState = {...state};

    if(action.type ==='AGE_UP'){
        newState.age += 1;
    }else if(action.type ==='AGE_DOWN'){
        newState.age -=1;
    }

    return newState;

}


export default ageReducer;