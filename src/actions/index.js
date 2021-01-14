import axios from 'axios'

export const getSongs = () => async (dispatch) => {
  let res = await axios.get('https://jsonplaceholder.typicode.com/photos')

  dispatch({
    type: 'GET_ALL_SONGS',
    payload: res,
  })
}

export const filteredSongs = (text, albums) => {
  return {
    type: 'FILTER_SONGS',
    payload: text,
    albums,
  }
}

export const clearFilter = () => {
  return {
    type: 'CLEAR_FILTER',
  }
}

export const getAlbums = () => async (dispatch) => {
  let res = await axios.get('https://jsonplaceholder.typicode.com/albums')

  dispatch({
    type: 'GET_ALBUM',
    payload: res,
  })
}

export const addToPlaylist = (payload) => {
  return {
    type: 'ADD_TO_PLAYLIST',
    payload,
  }
}

export const getSong = (payload) => {
  return {
    type: 'GET_SONG',
    payload,
  }
}
