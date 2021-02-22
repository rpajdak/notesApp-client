import React from "react";
import "../../css/list_of_notes.css"

function DeletedNote(props) {
  
    return (
        <div className="list-of-notes">
            <div className="single-note" id={props.deletedNote.id}>
                <p className="">{props.deletedNote.title}</p>
                <p className="">{props.deletedNote.content}</p>
                <p className="">{props.deletedNote.created}</p>
                <p className="">{props.deletedNote.modified}</p>
            </div>
        </div>
    );
}

export default DeletedNote;