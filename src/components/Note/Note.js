import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import "../../css/list_of_notes.css"

function Note(props) {
    console.log(props)
    console.log(props.note.content + "     tutaj")
    console.log(props.note.title + "     tutaj")

    return (
        <div className="list-of-notes">
            <div className="single-note">
                <p className="">Note title "{props.note.title}</p>
                <p className="">Note content {props.note.content} </p>
                <p className="">Note created {props.note.created} </p>
            </div>
        </div>
    );
}

export default Note;