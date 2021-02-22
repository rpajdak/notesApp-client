import React, {useEffect, useState} from "react";
import SideBar from "../SideBar/SideBar"
import Header from "../Header/Header"
import DeletedNote from "../DeletedNote/DeletedNote"
import "../../css/all-notes.css"

function AllDeletedNotes() {
    let n = -0.1;
    const [deletedNotes, setNotes] = useState([]);

    const fetchNotes = async () => {
        const response = await fetch(`http://localhost:8080/notes/deleted`,
            {
                method: 'GET',
                credentials: 'include',
            });
        const deletedNotes = await response.json();

        setNotes(deletedNotes);

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
                        <p className="">Note modified </p>
                    </div>
                    <div className="items-list"> {
                        deletedNotes.map(function (deletedNote) {
                            return <DeletedNote orderly={n += 0.1} deletedNote={deletedNote}/>;
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllDeletedNotes;