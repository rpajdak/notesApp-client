import React from "react";
import {Link} from "react-router-dom";
import "../../css/list_of_notes.css"

function Note(props) {
    let modified = "";

    const newTo = { 
        pathname: "/edit", 
        id: props.note.id,
        title : props.note.title,
        content: props.note.content
      };
      if(props.note.modified !== null){
        modified = props.note.modified;
      }


      const historyOfNote = { 
        pathname: "/history", 
        id: props.note.id,
      };
      


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
                <p className="">{props.note.title}</p>
                <p className="">{props.note.content}</p>
                <p className="">{props.note.created}</p>
                <p className="">{modified}</p>
                <button id="deleteBtn" onClick={deleteNote}>Delete this note</button>
            
               <Link to = {newTo}>
                <button id="editBtn">Edit this note</button>
                </Link>

                <Link to = {historyOfNote}>
                <button id="editBtn">Show history of this note</button>
                </Link>

            </div>
        </div>
    );
}

export default Note;