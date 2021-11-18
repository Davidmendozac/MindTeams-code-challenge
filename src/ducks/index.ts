import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import Users, { IUser } from './Users';

const rootReducer = combineReducers({
  form: formReducer,
  Users,
});

export default rootReducer;

export interface IState {
  Users: IUser[]
};