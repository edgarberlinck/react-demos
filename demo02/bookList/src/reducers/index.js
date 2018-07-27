import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBooksReducer from './reducer_active_book';

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBooksReducer
});

export default rootReducer;