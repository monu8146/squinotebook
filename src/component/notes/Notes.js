import {useContext} from "react"
import Note from "../note/Note"
import {NoteContext} from "../../context/Notecontext"
import "./Notes.css"
function Notes() {
    const {filteredNotes} = useContext(NoteContext)

    return (
        <> <div className="pinned_notes">
            <h3>Pinned</h3>
            {
                filteredNotes.map((note) => {
                    if (note.pin && !note.trash && !note.archive) {
                        return (
                            <div key={note.id}>
                                <Note
                                    title={note.title}
                                    text={note.text}
                                    color={note.color}
                                    id={note.id}
                                    notepin={note.pin} 
                                    notelabel={note.label}
                                    />
                            </div>
                        )

                    } else { return (<></>) }

                })
            }
        </div>
            <div className="all_notes">
                <h3>Others</h3>
                {
                    filteredNotes.map((note) => {
                        if (!note.pin && !note.trash && !note.archive) {
                            return (
                                <div key={note.id}>
                                    <Note
                                        title={note.title}
                                        text={note.text}
                                        color={note.color}
                                        id={note.id}
                                        notepin={note.pin} 
                                        notelabel={note.label}
                                        />
                                </div>
                            )

                        } else { return (<></>) }

                    })
                }

            </div>

        </>
    )
}

export default Notes