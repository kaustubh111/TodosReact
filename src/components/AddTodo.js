import React, { useState } from 'react'

export const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit= (e)=>{
        e.preventDefault();
        if(!title||!desc)
        {
            alert("Title or Description can't be blank");
        }
        else
        {
            props.addTodo(title,desc)
            setTitle("")
            setDesc("")
        }


    }
    return (
        <div className="container my-3">
            <h3>Add Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}}id="title" aria-describedby="title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" className="form-control"value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-xsm btn-success">Submit</button>
            </form>            
        </div>
    )
}
