import { collection, onSnapshot } from 'firebase/firestore'
import React, { useState, useEffect, createContext } from 'react'
import { db } from "../config/firebase-config"

const NoteContext = createContext()
function NoteProvider({ children }) {
  const [show, setShow] = useState(false)
  const [notes, setNotes] = useState([])
  const [filteredNotes, setFilteredNotes] = useState([])
  const [search, setSearch] = useState("")
  const [showfilter,setShowfilter] = useState(false)
  useEffect(() => {
    (async () => {
      onSnapshot(collection(db, "notes"), (snapshot) => {
        setNotes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

      })
    })()
  }, [])

  useEffect(() => {
    const filtered = notes.filter((note) => {
      return note.title.toLowerCase().includes(search.toLowerCase())
    })
    // setNotes(filtered)
    setFilteredNotes(filtered)
  }, [notes, search])

  return (
    <>
      <NoteContext.Provider value={{ show, setShow, setNotes, notes, setSearch, filteredNotes, setFilteredNotes ,showfilter,setShowfilter}}>
        {children}
      </NoteContext.Provider>
    </>
  )
}

export { NoteContext, NoteProvider }