import { ADD } from '../actions'
import { combineReducers } from 'redux'

const initState = {
    str:'react',
    test:"test",
};

const data = (state = initState, action) => {
    switch(action.type){
        case ADD:
            console.log(state);
            return {...state, 
                str:state.str + '213'
            };
        default:
            return state;
    }
};

const App = combineReducers({
    data
});

export default App;