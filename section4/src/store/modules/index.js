import { combineReducers } from 'redux';
import book from './book';
import bookList from './bookList';

const rootReducer = combineReducers({
  book,
  bookList,
});

export default rootReducer;
