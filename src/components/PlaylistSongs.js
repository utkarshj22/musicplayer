import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Songcards from './Songcards'

const PlaylistSongs = ({ song }) => {
  let songInfo = null
  const dispatch = useDispatch()
  useEffect(() => {
    songInfo = dispatch(song)
  }, [])
  return (
    <Songcards
      key={songInfo.id}
      data={songInfo}
      //albumDetails={albumDetails}
    />
  )
}

export default PlaylistSongs
