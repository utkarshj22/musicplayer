const playlistReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_PLAYLIST':
     state = [...state, action.payload]
      return state;

    case 'GET_PLAYLIST':
      return state;

    // case "FILTER_PLAYLIST":
    //   return {
    //     ...state,
    //     filteredPlaylistSongs: state.playlistSongs.filter((song) => {
    //       const regex = new RegExp(`${action.payload}`, "gi");
    //       return song.title.match(regex);
    //     }),
    //   };

    default:
      return state
  }
}

export default playlistReducer
