import React from 'react'
import {Todo} from "./Todo";

export default function Todos(props) {
    return (
        <div className="container my-3">
            <h3 className="text-center">Todos List</h3> 

            {
                props.todos.length===0?<p className="text-danger">No Todos to Display</p>:props.todos.map((todo)=>
                {
                    return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                })
            }
            
        </div>
    )
}
