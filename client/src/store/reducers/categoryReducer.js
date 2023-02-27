import * as type from '../actions/categoryAction';

export const categoryReducer = (state = { category: null }, action) => {
  switch (action.type) {
    case type.TABLE_CATEGORY:
      return { ...state, category: action.payload };

    default:
      return state;
  }
};
