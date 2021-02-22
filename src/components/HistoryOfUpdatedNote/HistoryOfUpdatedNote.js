import React, {useEffect, useState} from "react";
import SideBar from "../SideBar/SideBar"
import Header from "../Header/Header"
import DeletedNote from "../DeletedNote/DeletedNote"
import Note from "../Note/Note"
import "../../css/all-notes.css"

function HistoryOfUpdatedNote(props) {
    let n = -0.1;
    const [fetchedNotes, setNotes] = useState([]);
    let id = props.location.id;
    const fetchNotes = async () => {
        const response = await fetch(`http://localhost:8080/notes/updated/${id}`,
            {
                method: 'GET',
                credentials: 'include',
            });
        const notes = await response.json();
        console.log(notes)
        setNotes(notes);

    }

    useEffect(() => {
        fetchNotes()
    }, []);

    return (
        <div>
            <Header/>
            <div className="new-note-wrapper">
                <div className="side-bar"><SideBar/></div>
                <div className="notes-list-container">
                    <div className="note-headers">
                        <p className="">Note title </p>
                        <p className="">Note content </p>
                        <p className="">Note created </p>
                        <p className="">Note modiefied </p>
                    </div>
                    <div className="items-list"> {
                        fetchedNotes.map(function (deletedNote) {
                            return <DeletedNote orderly={n += 0.1} deletedNote={deletedNote}/>;
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HistoryOfUpdatedNote;