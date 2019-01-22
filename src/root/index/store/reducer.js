import { combineReducers } from 'redux-immutable';
import {reducer as header} from '../../../component/header/store';
const reducer = combineReducers({
    header:header
});

export default reducer;
