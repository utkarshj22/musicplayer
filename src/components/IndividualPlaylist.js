import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SongFilter from './SongFilter'
import PlaylistSongs from './PlaylistSongs'
import Songcards from './Songcards'

import { getSong } from '../actions'

const IndividualPlaylist = ({ match }) => {
  const { playlist, albums, songs } = useSelector((state) => ({ ...state }))
  let selectedPlaylist = null
  let albumDetails = {}
  let playlistSongsArray = []
  const dispatch = useDispatch()

  const shufflePlay = () => {
    selectedPlaylist.songs.sort(() => Math.random() - 0.5)
  }

  return (
    <div>
      {
        (selectedPlaylist = playlist.filter((item) => {
          return item.title === match.params.playListName
        }))
      }
      {selectedPlaylist[0] && selectedPlaylist[0].title} - Editable
      <button onClick={shufflePlay}>Shuffle Play</button>
      <button>Add Song</button>
      <div className="grid-2">
        {selectedPlaylist[0] &&
          selectedPlaylist[0].songs &&
          selectedPlaylist[0].songs.forEach((playlistsong) => {
            playlistSongsArray.push(
              songs.allSongs.data.filter((song) => {
                return song.id === +playlistsong
              })
            )
          })}
      </div>
      {playlistSongsArray &&
        playlistSongsArray.map((song) => {
          return (
            <Songcards key={song.id} data={song} albumDetails={albumDetails} />
          )
        })}
    </div>
  )
}

export default IndividualPlaylist
