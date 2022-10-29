import { createStore, combineReducers } from 'redux';
import numeros from './reducers/numeros';

const reducers = combineReducers({
    numeros,
});

function storeConfig() {
    return createStore(reducers);
}

export default storeConfig;