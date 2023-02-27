import * as type from '../actions/detailAction';

export const detailReducer = (state = { detail: null }, action) => {
  switch (action.type) {
    case type.DETAIL_UPDATE:
      return { ...state, detail: action.payload };

    case type.DETAIL_RENDERING:
      return { ...state, detail: action.payload };
    default:
      return state;
  }
};
