import {GET_DATA, ADD_DATA, UPDATE_DATA, DELETE_DATA} from './types';
const initialState = {
  data: [],
};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return {data: action.payload};
    case ADD_DATA: {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    case UPDATE_DATA: {
      return {
        data: state.data.map((item) => {
          return item.id === action.payload.id ? action.payload : item;
        }),
      };
    }
    case DELETE_DATA: {
      return {
        data: state.data.filter((item) => item.id !== action.payload),
      };
    }
    default:
      return state;
  }
}
