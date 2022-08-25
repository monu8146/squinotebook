import React, { useState } from 'react'
import "./Note.css"
import { updateDoc, doc } from 'firebase/firestore'
import { db } from "../../config/firebase-config"
import { MdOutlineArchive, MdColorLens, MdDelete, MdLabel, MdOutlinePushPin, MdPushPin } from "react-icons/md"


function randomColor() {
    const colorarray = ["#FFF89A", "#FFBED8", "#C1F4C5", "#FFB5B5", "#DCF8C6"]
    let i = Math.floor(Math.random() * colorarray.length)
    return colorarray[i]
}

function Note({ title, text, color, id, notepin ,notelabel}) {
   
    const [pinnednote, setPinnednote] = useState(false)
    const [label, setLabel] = useState("")
    const [showlabel,setShowlabel] = useState(false)
    let noteDoc = doc(db, "notes", id)
    const changeColor = async () => {

        const newField = { color: randomColor() }
        await updateDoc(noteDoc, newField)
    }
    const archiveNote = async () => {
        const newField = { archive: true }
        await updateDoc(noteDoc, newField)
    }
    const deleteNote = async () => {
        const newField = { trash: true }
        await updateDoc(noteDoc, newField)
    }
    const pinHandler = (notepin) => {
        const newField = { pin: !notepin }
        updateDoc(noteDoc, newField) 
        setPinnednote(!pinnednote)
    }
    const addlabel = async (id) => {
        if (label !== "") {
            const newField = { label: label }
            await updateDoc(noteDoc, newField)
            setLabel("")
        }
        else {
            alert('please add a label')
        
        }
    }
    return (
        <>
            <div style={{ backgroundColor: `${color}` }} className="note">
                
                {pinnednote?<><MdPushPin className='pin_btn'  onClick={() => { pinHandler(notepin) }}/></>
                :<><MdOutlinePushPin className='pin_btn' onClick={() => { pinHandler(notepin) }} /></>}
                <div className="note_title"><h3>{title}</h3></div>
                <p>{text}</p>
                {(notelabel !== "")?<div className='note_label'>{notelabel}</div>:<></>}
                <div className="icons">
                
                    <MdLabel className='label_btn' onClick={()=>{setShowlabel(!showlabel)}}/>
                    {(showlabel)?<><div className="label_input">
                        <input type="text" placeholder='Enter label name'
                            value={label}
                            onChange={(e) => { setLabel(e.target.value) }} />
                        <button onClick={addlabel}>Create</button>
                    </div></>:<></>}
                    <MdDelete className='delete_btn' onClick={deleteNote} />
                    <MdOutlineArchive className='archive_btn' onClick={archiveNote} />
                    <MdColorLens className='color_btn' onClick={changeColor} />
                </div>
            </div>
        </>
    )
}

export default Note