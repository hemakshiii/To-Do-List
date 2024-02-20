import React, { useEffect } from 'react'
import { useState } from 'react';
import Task from  './Task.jsx';

function Home() {
  const [task, setTask]=useState(localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : []);
  const [title, setTitle]=useState("");
  const[description,setDescription] = useState("")

  console.log(title, description)

  const submitHandler=(e)=>{
    e.preventDefault();
    setTask([...task, {title, description}])
    setTitle("")
    setDescription("")
  }

  const deleteTask=(index)=>{
 const filteredArr=task.filter((val,i)=>{
  return i!==index
 })
 console.log(filteredArr)
setTask(filteredArr)
  }

  useEffect(()=>{
    localStorage.setItem("task", JSON.stringify(task))
  },[task])

  return (
    <>
    <div className='container'>
      <h1>To Do List</h1>
      <form onSubmit={submitHandler}>

        <input type="text" placeholder='Title' 
        value={title} onChange={(e) => setTitle(e.target.value)} />

        <textarea type="text" placeholder='Description' 
        value={description} onChange={(e) => setDescription(e.target.value)}/>

        <button type='submit'>Add</button>

      </form>
      {task.map((item, index)=>(
        <Task key={index} title={item.title} description={item.description}
        deleteTask={deleteTask} index={index}/>
      ))}
    </div>
    </>
  )
}

export default Home;
