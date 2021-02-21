import React, {useEffect, useState} from "react";
import SideBar from "../SideBar/SideBar"
import GoBackBtn from "../GoBackBtn/GoBackBtn"
import Header from "../Header/Header"
import Note from "../Note/Note"
import "../../css/all-notes.css"

function AllNotes() {
    let n = -0.1;
    const [fetchedNotes, setNotes] = useState([]);

    const fetchNotes = async () => {
        const response = await fetch(`http://localhost:8080/notes`,
            {
                method: 'GET',
                credentials: 'include',
            });

        console.log(response)
        const notes = await response.json();
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
                    </div>

                    <div className="items-list"> {
                        fetchedNotes.map(function (note) {
                            return <Note orderly={n += 0.1} note={note}/>;
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllNotes;