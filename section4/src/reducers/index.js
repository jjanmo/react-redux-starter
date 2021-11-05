import { combineReducers } from 'redux';
import bookReducer from './book';
import bookListReducer from './bookList';

const rootReducer = combineReducers({
  book: bookReducer,
  bookList: bookListReducer,
});

export default rootReducer;
