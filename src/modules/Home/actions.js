import {SORT_DATA} from './types';

export const getSortedData = (page, sortType, type) => async (dispatch) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=28f8c46c632f0e5bb9207c900069733a&language=en-US&sort_by=${sortType}&include_adult=false&include_video=false&page=${page}`,
  );
  const response = await data.json();

  const genre = await fetch(
    'https://api.themoviedb.org/3/genre/movie/list?api_key=28f8c46c632f0e5bb9207c900069733a&language=en-US',
  );
  const genreData = await genre.json();
  dispatch({
    type: SORT_DATA,
    payload: {response, genreData, type, sortType, page},
  });
};
