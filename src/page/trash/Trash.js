import React, { useState, useEffect } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from "../../config/firebase-config"
import Trashnote from '../../component/trashnote/Trashnote'
import "./Trash.css"
function Trash() {
    const [notes, setNotes] = useState([])
    const [trashnotes, setTrashnote] = useState([])
    useEffect(() => {
        (async () => {
            onSnapshot(collection(db, "notes"), (snapshot) => {
                setNotes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            })
            setTrashnote(notes.filter((note)=> note.trash === true))
        })()
    }, [notes])
    return (
        <>
        <div className="trash_area">
        <div className="all_notes">
        {
         trashnotes.map((note)=>{
             return(
                <div key={note.id}>
                <Trashnote
                id={note.id}
                title={note.title}
                text={note.text}
                color={note.color}
                />
                </div>
             )
         })
        }
        </div>
        </div>
        </>
    )
}

export default Trash