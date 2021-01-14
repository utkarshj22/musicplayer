import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import './CreatePlaylist.css'
import { addToPlaylist } from '../actions'

const CreatePlaylist = (props) => {
  const dispatch = useDispatch()
  const { songs } = useSelector((state) => ({ ...state }))
  const [formData, setFormData] = useState({
    title: '',
    createdAt: '',
    songs: [],
    id: null,
  })

  const { title } = formData
  if (!props.show) {
    return null
  }

  const closeHandler = (e) => {
    e.preventDefault()
    props.setShow(false)
  }

  const changeHandler = (e) => {
    e.preventDefault()
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const formatDate = (date) => {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [year, month, day].join('-')
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setFormData({ ...formData, createdAt: formatDate(Date.now()) })
    //setFormData({ ...formData, id: ++uniqId });
    dispatch(addToPlaylist(formData))
    setFormData({ title: '', createdAt: '', songs: [], id: null })
    props.setShow(false)
  }

  const handleCheckboxClick = (event) => {
    if (event.target.checked) {
      formData.songs.push(event.target.value)
    } else {
      formData.songs = formData.songs.filter((song) => {
        return song !== event.target.value
      })
    }
  }

  return ReactDOM.createPortal(
    <div className="modal-container" id="modal">
      <div className="modal">
        <button className="close-btn" id="close" onClick={closeHandler}>
          <i className="fa fa-times"></i>
        </button>
        <div className="modal-header">
          <h3>Add New Book</h3>
        </div>
        <div className="modal-content">
          <p>Please fill the entries for adding a book</p>
          <form className="modal-form">
            <div>
              <label htmlFor="name">Title</label>
              <input
                type="text"
                placeholder="Enter name"
                className="form-input"
                value={title}
                name="title"
                onChange={changeHandler}
              />
            </div>
            <label htmlFor="name">Songs</label>
            <div className="modal-form form-checkbox">
              {songs &&
                songs.allSongs &&
                songs.allSongs.data.map((song) => (
                  <label key={song.id}>
                    <input
                      type="checkbox"
                      value={song.id}
                      onChange={handleCheckboxClick}
                    />
                    {song.title}
                  </label>
                ))}
            </div>
            <input
              type="submit"
              value="Submit"
              className="submit-btn"
              onClick={submitHandler}
            />
          </form>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default CreatePlaylist
