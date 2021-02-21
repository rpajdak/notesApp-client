import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import "../../css/list_of_notes.css"

function Note(props) {
    function deleteNote(id) {

        const noteRow = document.getElementById(props.note.id);
        const request = fetch(`http://localhost:8080/notes/${props.note.id}`,
            {
                method: 'DELETE',
                credentials: 'include',
            }).then(Response => {
            if (Response.status == 204) {
                alert("Note has benn deleted");
                noteRow.style.display = "none";
            }
        });

    }

    return (
        <div className="list-of-notes">
            <div className="single-note" id={props.note.id}>
                <p className="">Note title "{props.note.title}</p>
                <p className="">Note content {props.note.content} </p>
                <p className="">Note created {props.note.created} </p>
                <button id="deleteBtn" onClick={deleteNote}>Delete this note</button>
            </div>
        </div>
    );
}

export default Note;