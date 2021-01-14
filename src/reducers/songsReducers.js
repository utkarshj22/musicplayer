const songsReducers = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ALL_SONGS':
      return {
        allSongs: action.payload,
        filteredSongs: action.payload,
        playlistSongs: null,
      }

    case 'FILTER_SONGS': {
      // state.filteredSongs = {
      //   data: state.allSongs.data.filter((song) => {
      //     const regex = new RegExp(`${action.payload}`, "gi");
      //     return song.title.match(regex);
      //   }),
      // };
      // state.filteredSongs = {...state.filteredSongs, action.albums.state.data.filter(album => {
      //   const regex = new RegExp(`${action.payload}`, "gi");
      //     return album.match(regex);})}
      return {
        ...state,
        filteredSongs: {
          data: state.allSongs.data.filter((song) => {
            const regex = new RegExp(`${action.payload}`, 'gi')
            return song.title.match(regex)
          }),
        },
      }
    }

    case 'GET_SONG':
      let playlist = state.allSongs.data.filter(
        (song) => song.id === action.payload
      )
      return { ...state, playlistSongs: playlist }

    case 'CLEAR_FILTER':
      return {
        ...state,
        filteredSongs: state.allSongs,
      }

    default:
      return state
  }
}

export default songsReducers
