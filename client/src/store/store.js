import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { categoryReducer } from './reducers/categoryReducer';
import { detailReducer } from './reducers/detailReducer';

const reducer = combineReducers({
  categoryReducer,
  detailReducer,
});

export const store = configureStore({ reducer });
