import React, { useContext } from 'react'
import "./Filter.css"
import { NoteContext } from "../../context/Notecontext"
function Filter() {
    const { notes, setFilteredNotes, showfilter } = useContext(NoteContext)
    const filterHandler = (label) => {
        setFilteredNotes(notes.filter((note) => note.label === label))
    }
    return (
        <>
            {
                (showfilter) ? <div className='filter'>
                    <h3>Tags</h3>
                    {
                        notes.map((note) => {
                            if (note.label !== "") {
                                return (
                                    <>
                                        <label className='label_filter'>
                                            <input type="checkbox"
                                                onChange={() => { filterHandler(note.label) }}
                                            />
                                            {note.label}
                                        </label>

                                    </>)
                            }
                            else { return (<></>) }
                        })
                    }
                </div> : <></>
            }
        </>
    )
}

export default Filter