import  React ,{useState} from "react";
const ManagementTools = ()=>{


const [task , setWork ] = useState ([]);
 const[taskName , setTask] = useState("");
const[date , setDate]= useState( new Date());
const[discription , setDiscription] =useState("");

const addTask = ()=>{
    
    const oldTask =[...task];
    let newTask ={
    //second inde
    
            name : taskName,
            date : date,
            discription :discription,
    };
        oldTask.push(newTask)
        setWork(oldTask);
};
// let newTask = oldTask.filter((v,i)=> i !== index);
    // let newTask = oldTask.filter((v,i)=> i!==(index))
return (

    <>
        <br />
<h1> Task Management Tools</h1>
<label>Task Name </label>
<input 
value ={taskName}
onChange={(e)=>setTask(e.target.value)}
type="text"
placeholder="Enter the Task Name"
/>

<div>
<label> date</label>
<input
value= {date}
onChange ={(e)=> setDate(e.target.value)}
type="date"
/>
</div>

{/* <button   onClick style ={{backgroundColor :"pink" , color : "blue"}} 
className="m-2 p-3"
type ="button">
</button> */}
<div>
<label>Discription</label>
<input
value={discription}
onChange ={(e)=> setDiscription(e.target.value)}
type="text"
/>
</div>
            <button onClick ={() => addTask ()} type="button">
                    task added
                </button>     
                {task.map((v ,i) =>{
                    return (
                        <div key ={i}>
                            <ul>
                                <li> name :{v.name}</li>
                                <li> discription: {v.discription}</li>
                                <li>date: {v.date}</li>
                                <button onClick ={()=> task (i)} type ="button">
                                     task
                                </button>

                                <button onClick ={()=> discription(i)} type ="button">
                                     discription
                                </button>

                                <button onClick ={()=> date(i)} type ="button">
                                     date
                                </button>

                                <button onClick ={()=> ManagementTools(i)} type ="button">
                                     name
                                </button>
                            </ul>
                        </div>
                    );
                })}
            
    </>

);

            };


 export default ManagementTools;





