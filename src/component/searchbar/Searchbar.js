import React, { useContext } from 'react'
import { BiSearch } from "react-icons/bi"
import { FaFilter } from "react-icons/fa"

import "./Searchbar.css"
import { NoteContext } from "../../context/Notecontext"
function Searchbar() {
  const { setSearch, showfilter, setShowfilter } = useContext(NoteContext)
  return (
    <>
      <div className="searchbar">
        <div className="input_search">
          <BiSearch />
          <input type="text"
            placeholder='Search'
            onChange={(e) => { setSearch(e.target.value) }}
          />
        </div>
        <div className="filter_btn" onClick={() => { setShowfilter(!showfilter) }}><FaFilter /></div>
      </div>
    </>
  )
}

export default Searchbar