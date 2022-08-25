import React from 'react'
import "./NoteArea.css"
import Searchbar from '../searchbar/Searchbar'
import Noteinput from '../noteinput/Noteinput'
import Notes from '../notes/Notes'
import Filter from '../filter/Filter'

function NoteArea() {
  return (
    <>
      <div className="notes_area">
        <Searchbar />
        <Filter />
        <Noteinput />
        <Notes />
      </div>
    </>
  )
}

export default NoteArea