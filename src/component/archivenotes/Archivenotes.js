import React from 'react'
import "./Archivenotes.css"
import {MdOutlineUnarchive} from "react-icons/md"
import { updateDoc, doc } from "firebase/firestore"
import { db } from "../../config/firebase-config"
function Archivenotes({id, title, text, color}) {
  let noteDoc = doc(db, "notes", id)
  const unarchiveHandler = ()=>{
    const newfield = { archive: false }
    updateDoc(noteDoc, newfield)
  }
  return (
    <>
      <div className="archive_note" style={{ backgroundColor: `${color}` }}>
        <div className="archivenote_title"><h3>{title}</h3></div>
        <p>{text}</p>
        <div className="archive_btns">
         <MdOutlineUnarchive onClick={unarchiveHandler}/> 
        </div>
      </div>
    </>
  )
}

export default Archivenotes