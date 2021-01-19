import React from 'react'

const Songcards = ({ data, albumDetails }) => {
  console.log("Song Card:", data)
  const { title } = data
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">{title} </h3>
      <ul className="list">
        <li>
          {/* <span className="bold-li">Album :</span> {albumDetails[0].title} */}
        </li>
      </ul>
    </div>
  )
}

export default Songcards
