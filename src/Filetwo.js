import React , {useState} from "react";

const PlacesArray =() => {
    const [Places , setArea ] = useState([]);
    const DeletePlaces = (index) =>{

       
            //second index
            let oldPlaces =[...Places];
            let newPlaces = oldPlaces.filter((v,i)=> i !== index);
            setArea(newPlaces);
        };
        const updatePlaces = (currentIndex ,newName) => {
            const oldPlaces =[...Places];
            oldPlaces[currentIndex].name = newName;
            setArea(oldPlaces);
        };
        const updateCulture = (currentIndex, newCulture) =>{
        const oldPlaces =[...Places];
            oldPlaces[currentIndex].culture =newCulture;
            setArea(oldPlaces);
        };

        const [PlacesName ,setPlaces]= useState("");
        const[Culture ,setCulture] =useState("");
        const[Food,setFood]= useState("");
        const addPlaces = ()=>{
        const oldPlaces =[...Places];
        let newPlaces ={
            name : PlacesName,
            culture :Culture,
            food: Food,
        };
        oldPlaces.push(newPlaces);
        setArea(oldPlaces);
        };


        return(
            <>
                <h1>THis is my places</h1>
                <label> discuss places</label>
                <input
                value ={PlacesName}
                onChange={(e)=> setPlaces(e.target.value)}
                type= "text"
                />
                <br/><br />  
                <br />
                <label>write about places accordingily</label>

                <input
                value={Culture}
                onChange ={(e) => setCulture(e.target.value)}
                type="text"
                />
            
                    <br />
                    <label>write remark about food  </label>
                    <input 
                    value ={Food}
                    onChange ={(e) => setFood(e.target.value)}
                    type ="text"
                    />

                <br />
                <button onClick ={() => addPlaces ()} type="button">
                    places added
                </button>
                {Places.map((v ,i) =>{
                    return (
                        <div key ={i}>
                            <ul>
                                <li>places title :{v.name}</li>
                                <li> discription: {v.culture}</li>
                                <li>types: {v.food}</li>
                                <button onClick ={()=> DeletePlaces(i)} type ="button">
                                    delete me
                                </button>
                

                                <button onClick ={()=> updatePlaces(i)} type ="button">
                                    update places
                                </button>

                                <button onClick ={()=> updateCulture(i)} type ="button">
                                    update culture
                                </button>
                                



                            </ul>
                        </div>
                    );
                })}
            </>
        );
            
    
};

export default PlacesArray;