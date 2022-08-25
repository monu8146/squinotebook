import React, { useState,useContext } from 'react'
import "./Noteinput.css"
import { TiDelete } from "react-icons/ti"
import { db } from "../../config/firebase-config"
import { collection, addDoc } from "firebase/firestore"
import {NoteContext} from "../../context/Notecontext"
function Noteinput() {
    const notesCollectionRef = collection(db, "notes")
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const {show,setShow} = useContext(NoteContext)
    const addnoteHandler = async () => {
        if (title !== "" && text !== "") {
            await addDoc(notesCollectionRef, { title, text, color: "#FFFFFF" ,pin:false,trash:false,archive:false,label:""})
            setShow(false)
            setText("")
            setTitle("")
        } else {
            alert('please add a note')
        }

    }
    return (
        <>
            {(show) ? <>
                <div className="take_note_area">
                    <div className="take_note">
                        <div className="close">

                            <TiDelete className='close_btn' onClick={() => { setShow(false) }} />
                        </div>
                        <input type="text" placeholder='Title'
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
                        />
                        <textarea placeholder='Take a note'
                            value={text}
                            onChange={(e) => { setText(e.target.value) }}
                        ></textarea>
                        <button onClick={addnoteHandler}>ADD NOTE</button>
                    </div>
                </div>
            </> : <>
            </>}

        </>
    )
}

export default Noteinput