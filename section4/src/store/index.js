import { createStore } from 'redux';
import rootReducer from './modules';

const create = () => createStore(rootReducer);

export default create;
