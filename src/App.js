import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todos from "./components/Todos";
import React, { useState ,useEffect } from 'react';
import { AddTodo } from "./components/AddTodo";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let initTodo;
if(localStorage.getItem("todos")===null)
{
  initTodo=[];
}
else{
  initTodo = JSON.parse(localStorage.getItem("todos"))
} 
  
  const onDelete= (todo)=>{
    console.log("I am on delete",todo)
    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
    localStorage.setItem("todos",JSON.stringify(todos))
  }

  const addTodo= (title,desc)=>{
    console.log("I am Adding Todo",title,desc)
    let serial;
    if(todos.length===0)
         serial=0
        else{
          serial=todos[todos.length-1].sno+1                 
        }
        const myTodo = {
          sno:serial,
          title:title,
          desc:desc,
        } 
        console.log(myTodo)
        setTodos([...todos,myTodo]);
        
  }
  const [todos, setTodos] = useState([initTodo])
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])
  
  return (
    <>
      <Router>
      <Header title="MYTODOs" searchBar={true}/>
      <Switch>
          <Route path="/" render={()=>{
                return(  
                  <> 
                   <AddTodo addTodo={addTodo} />
                   <Todos todos={todos} onDelete={onDelete}/>
                  </>)
              }}>
          </Route>
        </Switch>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
