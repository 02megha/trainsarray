import React , {useState} from "react";

const ArrayObjects = () => {
    const [Trains  , setTrains] = useState ([
        { name : "pushpak", pnr :"5756" , from : "kanpur", to : "bhopal"},
        {name :  "gomti" , pnr : "8890", from :"phapund" , to : "kanpur"},
        {name: "rajdhani", pnr: "56566", from :"delhi" ,to: "mumbai" },
        {name: "arunachal", pnr : "7445" , from :"gorakhpur", to: "kanpur"},
    ]);
    const handleUpdatesTrains =()=>{
        setTrains([
       { name : "kalka" ,pnr : "890898", from: "delhi" , to :" hydrabaad"},
       {name: "vandebarat" ,pnr: "21323", from: "gurugram" , to:" manipur"},
       {name:"champran ", pnr:"34675", from: "jaipur" , to :"kishmir"},
       {name:" garibrath", pnr:"8645", from:"ujjain", to: "itanagar"},
       {name:"gkpltt", pnr:"983978", from :"haryana", to:" indoor"},
        ]);
    };
    const deleteTrains = ()=>{
        let oldTrains = [...Trains];
        let newTrains = oldTrains.filter((v ,i)=> v.name !== "pushpak");
        setTrains(newTrains);
    };

    const deteteTrainstwo =()=>{
        let oldTrains =[...Trains];
        let newTrains = oldTrains.filter ((v,i)=> v.from !== "kanpur");
    };

    const deleteTrainsthree = ()=>{
        let oldTrains = [...Trains];
        let newTrains = oldTrains.filter((v ,i)=> v.name !== "arunachal");
        setTrains(newTrains);
    };

    

    const deleteCurrent = (selectedTrains) =>{
        let oldTrains =[...Trains];
        let newTrains = oldTrains.filter((v,i)=> v.name !== selectedTrains.name);
        setTrains(newTrains);
    };


    return(
        <>
            <h1> THE INFORMATION ABOUT TRAINS</h1>
            {Trains.map((v,i)=> {
                return(
                    <div key ={i}>
                        <ul> 
                        <li> name :{ v.name}</li>
                        <li> pnr: {v.pnr}</li>
                        <li>from: {v.from}</li>
                        <li>to:{v.to}</li>
                        <butoon  onClick={()=> deleteCurrent(v,i)} type="button"> {" "}
                        delete ME
                        </butoon>
                        </ul>
                    </div>
                );
            })}


            <button onClick ={() => deleteTrainsthree()} type ="button">
            {""} 
            delete arunachal
            </button>
            
           <button onClick ={() => deleteTrains()} type ="button">
            {""} 
            delete pushpak
            </button>
            <button onClick ={()=> deteteTrainstwo ()} type ="button">
                {""}
                delete gomti
            </button>



            <button onClick={()=>handleUpdatesTrains()} type="button">
                update Trains
            </button>
        </>
    );
};

export default ArrayObjects;