import React from 'react'
import { useSelector } from 'react-redux'
import SongFilter from './SongFilter'

import Songcards from './Songcards'

const SongList = () => {
  const { songs, albums } = useSelector((state) => ({ ...state }))
  const { filteredSongs } = songs
  let albumDetails = {}
  // const songs = useSelector((state) => state.songs);

  return (
    <div>
      {/* <span style="margin-left: 10px">SongList</span> */}
      <SongFilter />
      <div className="grid-2">
        {filteredSongs &&
          albums &&
          filteredSongs.data.map((item) => {
            albumDetails = albums.state.data.filter(
              (album) => album.id === item.albumId
            )
            return (
              <Songcards
                key={item.id}
                data={item}
                albumDetails={albumDetails}
              />
            )
          })}
      </div>
    </div>
  )
}

export default SongList
