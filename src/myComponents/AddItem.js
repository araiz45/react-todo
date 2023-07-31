import React, { useState } from 'react';
export const AddItem = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) =>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title and description can not be empty")
        }else{
        props.addTodo(title, desc);
        setTitle("");
        setDesc("");}
    }
    return (
        <div>
            <form className='container' onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e) =>{setTitle(e.target.value)}} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <textarea className="form-control" value={desc} id="exampleInputPassword1" rows={11} onChange={(e) =>{setDesc(e.target.value)}}></textarea>
                </div>
                <button type="submit" className="btn btn-danger btn-sm">Submit</button>
            </form>
        </div>
    )
}
