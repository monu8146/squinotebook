import React from 'react'
import "./Trashnote.css"
import { deleteDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../../config/firebase-config"
import { MdDeleteForever, MdRestoreFromTrash } from "react-icons/md"
function Trashnote({ id, title, text, color }) {
  let noteDoc = doc(db, "notes", id)
  const movefromTrash = async () => {
    const newfield = { trash: false }
    updateDoc(noteDoc, newfield)
  }
  const deleteHandler = async () => {
    await deleteDoc(noteDoc)
  }
  return (
    <>
      <div className="trash_note" style={{ backgroundColor: `${color}` }}>
        <div className="trashnote_title"><h3>{title}</h3></div>
        <p>{text}</p>
        <div className="trash_btns">
          <MdDeleteForever onClick={deleteHandler} />
          <MdRestoreFromTrash
            onClick={movefromTrash}
            className='restore_btn' />
        </div>
      </div>
    </>
  )
}

export default Trashnote