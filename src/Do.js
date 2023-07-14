import { useState } from "react";
//import {ToastContainer , toast} from 'react-toastify';
//import 'react-tostify/dist/ReactToastify.css';
const TaskManagement =() =>{
    const [tasks , settask] =useState([]);
    const [newTaskTitle , setNewTaskTitle ] = useState("");
    const[newtaskDiscription ,setnewtaskDiscription] = useState("");
    const[newtaskdueDate , setnewtaskdueDate] = useState( );
    const createTask =() => {
        if (newTaskTitle === "") return alert.warning("please provide task title");
        else if (newtaskDiscription ==="")
        return alert.warning("please enter task discription ")
        else if (!newtaskdueDate) return alert.warning("please provide date");
        
        const newTask ={
           taskname : newTaskTitle,
           taskdiscription :newtaskDiscription,
           taskduedate :newtaskdueDate,
           taskstatus :"TO_Do",
         };
        const oldTask =[...tasks];
        oldTask.push(newTask);
        settask(oldTask);
        alert.success("Task created scccessfully");
        setNewTaskTitle("");
        setnewtaskDiscription("");

    };
     

    const handlechangestatus = (index,status)=>{
        let oldTask=[...tasks];
        if (status === "TO_Do"){
            oldTask[index].taskstatus ="ON_GOING";
        }
        else if (status ==="ON_GOING"){
            oldTask[index].taskstatus ="COMPLEATED";
}
else if (status ==="COMPLEATED"){ 
    oldTask[index].taskstatus ="TO_Do";   
}
settask(oldTask);
        };
        const handledeletetask =(index)=>{
        let oldTask= [...tasks];
        let updatedTask = oldTask.filter ((v,i)=> i !== index); 
        settask(updatedTask) 
          };
const getButtonName = (status) =>{
    if (status === "TO_Do") return "Start Task";
    else if (status === "ON_GOING")return "COMPLEATED Task"
    else if (status === "COMPLEATED") return "resatart";

};
const getColor = (status) =>{
    if (status === "TO-Do") return "red";
    else if (status === "ON_GOING") return "blue";
    else if (status === "COMPLEATED") return "green";
};

return (
    <>
        {/* <ToastContainer /> */}
        <div style = {{backgroundColor : "skyblue" , height : "100vh"}}>
            <h1> Task Management</h1>
            <br />
            <label> task name </label>
            <input 
            type=" text"
            
            value ={newTaskTitle}
            onChange ={(e) => setNewTaskTitle(e.target.value)}
            placeholder="enter task name"
            />
        </div>

        <button>Start</button>
<label>task discription</label>
<input
type = "text"
value ={newtaskDiscription}
onChange ={(e)=> setnewtaskDiscription (e.target.value)}
placeholder="enter discription"
/>

<label > task due date </label>
<input 
type ="date"
value ={newtaskdueDate}
onChange={(e)=>setnewtaskdueDate(e.target.value)}
placeholder="enter due date"
/>

<button 
onClick ={()=> createTask()}
type ="button">
  create Task  
</button>
 {tasks.map ((v,i) =>{  // mappping here ;
    return (
        <>


style={{
    backgroundColor : getColor (v.taskstatus),
    color :"white",
}}

    <h4> {v.taskname}</h4>
    <h6> DUE : {v.taskduedate}</h6>
    <p> {v.taskdiscription}</p>
     <button onClick={()=>handlechangestatus(i, v.taskstatus)}>
        {getButtonName(v.taskstatus)}
     </button>
     <button onClick = {()=> handledeletetask(i)}>
        Delete task
     </button>

        </> 
        
    );
 })}
<button onClick={()=> handlechangestatus(i , v.taskstatus)}>
    {getButtonName(v.taskstatus)}
</button>

    </>
);

    };


export default TaskManagement;