import React,{useState,useEffect} from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from "../../config/firebase-config"
import "./Archive.css"
import Archivenotes from '../../component/archivenotes/Archivenotes'
function Archive() {
  const [notes, setNotes] = useState([])
  const [archivenotes,setArchivenotes] = useState([])
  useEffect(() => {
    (async () => {
        onSnapshot(collection(db, "notes"), (snapshot) => {
            setNotes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        })
        setArchivenotes(notes.filter((note)=> note.archive === true))
    })()
}, [notes])
  return (
    <div className='notes_area'>
    <div className="all_notes">
      {
        archivenotes.map((note)=>{
          return(
          <div key={note.id}>
          <Archivenotes
          id={note.id}
          title={note.title}
          text={note.text}
          color={note.color}
          />
          </div>)
        })
      }
    </div>
    </div>
  )
}

export default Archive