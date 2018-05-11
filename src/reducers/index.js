import { combineReducers } from 'redux';
import ListInfo from './info';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
    ListInfo,
    todos,
    visibilityFilter
})
