import {GET_DATA, ADD_DATA, UPDATE_DATA, DELETE_DATA} from './types';

export const getData = () => async (dispatch) => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const response = await data.json();
  dispatch({
    type: GET_DATA,
    payload: response,
  });
};

export const addNewData = (data) => async (dispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const newData = await response.json();
  console.log('Added data Successfully');
  console.log(newData);
  dispatch({
    type: ADD_DATA,
    payload: {...newData, ...data},
  });
};

export const updateData = (data) => (dispatch) => {
  const {id} = data;
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('Updated Data Successfully ', res);
      return dispatch({
        type: UPDATE_DATA,
        payload: res,
      });
    });
};

export const deleteData = (id) => (dispatch) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  })
    .then((res) =>
      dispatch({
        type: DELETE_DATA,
        payload: id,
      }),
    )
    .catch((error) => console.log(error));
};
