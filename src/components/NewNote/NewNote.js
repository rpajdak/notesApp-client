import React from "react";
import Header from "../Header/Header"
import SideBar from "../SideBar/SideBar"
import {useForm} from "react-hook-form";
import "../../css/new-note.css"

function NewNote() {
    const {register, handleSubmit, errors} = useForm();


    const onSubmit = async (data) => {
        
        const headers = new Headers();
        const successMessage = document.getElementById("note-added-message");
        
        headers.append('Content-type', 'application/json');
        const request = new Request('http://localhost:8080/notes',
            {
                method: 'POST',
                headers,
                body: JSON.stringify(data)
            });

        const response = await fetch(request).then((response => {
            if (response.status === 201) {
                successMessage.style.display = "block";
            }
        }));
    }
    return (
        <div>
            <Header/>
            <div className="new-note-wrapper">
                <div className="side-bar"><SideBar/></div>
                <div className="inputs-btns">
                    <div className="buttons">
                        <button type="submit"
                                onClick={handleSubmit(onSubmit)}>Add new note!
                        </button>
                        <p id="note-added-message">Note has been added.</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div>
                            <input className="acc-input" placeholder="Note title" name="title"
                                   ref={register({required: true, minLength: 3})}/>
                            {errors.title && errors.title.type === "required" && <p>Title field is required.</p>}
                            {errors.title && errors.title.type === "minLength" &&
                            <p>This field need at least 3 character.</p>}
                        </div>

                        <div>
                            <textarea className="new-note-content" type="text" placeholder="Note content" name="content"
                                      ref={register({required: true, min: 5, maxLength: 100})}/>
                            {errors.title && errors.title.type === "required" && <p>Title field is required.</p>}
                            {errors.title && errors.title.type === "minLength" &&
                            <p>This field need at least 5 character.</p>}
                        </div>


                    </form>

                </div>
            </div>
        </div>
    )
}

export default NewNote;