import React,{useContext} from 'react'
import "./Sidebar.css"
import {AiOutlineHome} from "react-icons/ai"
import {MdOutlineLabel} from "react-icons/md"
import {BsArchive,BsTrash} from "react-icons/bs"
import {CgProfile} from "react-icons/cg"
import {Link} from "react-router-dom"
import {NoteContext} from "../../context/Notecontext"
function Sidebar() {
  const {setShow} = useContext(NoteContext)
  return (
    <>
      <div className="side_bar">
        <ul>
          <Link to="/"><li><AiOutlineHome/><p>Home</p></li></Link>
          <Link to="/label"><li><MdOutlineLabel/><p>Label</p></li></Link>
          <Link to="/archive"><li><BsArchive/><p>Archive</p></li></Link>
          <Link to="/trash"><li><BsTrash/><p>Trash</p></li></Link>
          <li><CgProfile/><p>Profile</p></li>
          <button onClick={()=>{setShow(true)}}>Create New Note</button>
        </ul>
      </div>
    </>
  )
}

export default Sidebar