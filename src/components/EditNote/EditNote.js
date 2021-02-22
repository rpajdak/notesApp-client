import React from 'react'
import Header from "../Header/Header"
import SideBar from "../SideBar/SideBar"
import {useForm} from "react-hook-form";

function EditNote(props){
    const {register, handleSubmit, errors} = useForm();
    let noteContent = props.location.content;
    let noteTitle = props.location.title;

   
    const onSubmit = async (data) => {
        
        data.id = props.location.id;
        const headers = new Headers();
        const successMessage = document.getElementById("note-added-message");
        
        headers.append('Content-type', 'application/json');
        const request = new Request('http://localhost:8080/notes',
            {
                method: 'PUT',
                headers,
                body: JSON.stringify(data)
            });
        const response = await fetch(request).then((response => {
            if (response.status === 200) {
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
                    
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div>
                            <input className="acc-input" placeholder={noteTitle} name="title"
                                   ref={register({required: true, minLength: 3})}/>
                            {errors.title && errors.title.type === "required" && <p>Title field is required.</p>}
                            {errors.title && errors.title.type === "minLength" &&
                            <p>This field need at least 3 character.</p>}
                        </div>

                        <div>
                            <textarea className="new-note-content" type="text" placeholder={noteContent} name="content"
                                      ref={register({required: true, min: 5, maxLength: 100})}/>
                            {errors.title && errors.title.type === "required" && <p>Title field is required.</p>}
                            {errors.title && errors.title.type === "minLength" &&
                            <p>This field need at least 5 character.</p>}
                        </div>


                    </form>
                    <div className="buttons">
                        <button type="submit"
                                onClick={handleSubmit(onSubmit)}>Update note!
                        </button>
                        <p id="note-added-message">Note has been updated.</p>
                    </div>
                </div>
            </div>
        </div>
        
        )
}

export default EditNote;
