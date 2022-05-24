import { createStore, compose } from 'redux';
import rootReducer from './reducers';

const initialState = {};

const store = createStore(
	rootReducer,
	initialState,
	compose(
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;

//import { useDispatch,useSelector } from 'react-redux'
//const dispatch = useDispatch()
//dispatch({type:XXX,variable:YYY});
//const userData = useSelector(state => state.Data.data)
