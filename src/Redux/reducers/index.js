import { combineReducers } from 'redux';
import entitiesReducer from './entitiesReducer';
import uiReducer from './uiReducer';
import toolbarReducer from './toolbarReducer';

export default combineReducers({
	entities: entitiesReducer,
	ui: uiReducer,
	toolbar: toolbarReducer,
});
