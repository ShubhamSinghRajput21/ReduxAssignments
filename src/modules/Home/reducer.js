import {SORT_DATA} from './types';
const initialState = {
  sortType: 'popularity.desc',
  type: 'Most Popular',
  moviesArray: [],
  genreArray: [],
  page: 1,
};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SORT_DATA:
      return {
        moviesArray:
          action.payload.page === 1
            ? action.payload.response.results
            : [...state.moviesArray, ...action.payload.response.results],
        genreArray: action.payload.genreData.genres,
        type: action.payload.type,
        sortType: action.payload.type,
        page: action.payload.page,
      };

    default:
      return state;
  }
}
