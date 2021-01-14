import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CreatePlaylist from './CreatePlaylist'
import PlaylistCard from './PlaylistCard'

const Playlist = () => {
  const [show, setShow] = useState(false)
  const buttonHandler = (e) => {
    e.preventDefault()
    setShow(true)
  }
  const playlist = useSelector((state) => {
    return state.playlist
  })

  return (
    <div>
      {playlist &&
        playlist.map((playlist) => (
          <PlaylistCard key={playlist.title} playlist={playlist} />
        ))}
      <button className="btn btn-danger btn-sm" onClick={buttonHandler}>
        Create Playlist
      </button>
      <CreatePlaylist show={show} setShow={setShow} />
    </div>
  )
}

export default Playlist
