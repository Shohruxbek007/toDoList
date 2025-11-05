import React, { useState } from 'react'

const Component = () => {
  const[tasks,setTasks]=useState(['Wake up','Have a breakfast'])
  const[taskName,setTaskName]=useState('')
   function handleAddTask(){
    
 const newTask = taskName

 setTasks(t=>[...t,newTask])
 setTaskName('')


   }
  function handleDelete(index){
   setTasks(tasks.filter((_,i)=> i!==index))
  }
  function handleName(event){
     setTaskName(event.target.value)
  } 
  return (
    <div className='container'>
      <h1>To-do list</h1>
  <div className='form'><input onChange={handleName} value={taskName} type="text"   placeholder='Enter a task here'/><button onClick={handleAddTask}>Add</button></div>
      <ul>{tasks.map((task,index)=><div className='task' key={index}><li >{task}</li><button onClick={()=>handleDelete(index)}>Delete</button></div>)}</ul>
   
</div>
  )
}

export default Component