import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Vehicle = () => {
  const [vehicles, setVehicles] = useState([]);
  const [name,setName]=useState("")
  const[positionx,setPositionx]=useState("")
  const[positiony,setPositionY]=useState("")
  const[speed,setSpeed]=useState("")
  const[direction,setDirection]=useState("")
const[count,setCount]=useState([])
  const handleSubmit=(e) =>{
    e.preventDefault()

    const payload={
        name,
        positionx,
        positiony,
        speed,
        direction
    }
    axios.post("http://localhost:8080/Vehicle",payload)
    .then((res) =>{
        console.log(res.data)
        
    })
    .catch((err)=>
    {
        console.log(err);
      
    }
    )
    setName("")
    setPositionY("")
    setDirection("")
    setSpeed("")
    setDirection("")
}
useEffect(() => {
  axios.get("http://localhost:8080/scenario")
  .then((res) => {
      
      setCount(res.data)
  } )
  .catch((err) => console.log(err))
},[])



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <lable>Scenario List</lable>
          <select>
            
            { count.map((item) => (
               <option key={item.id}> {item.name} </option>
               ))}
           
          </select>
        </div>
        <div>
          <lable>Vehicle Name</lable>
          <input type="text"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div>
          <lable>Vehicle Speed</lable>
          <input type="number" 
          value={speed}
          onChange={(e)=>setSpeed(e.target.value)}
          />
        </div>
        <div>
          <lable>Position X</lable>
          <input type="number"
          value={positionx}
          onChange={(e)=>setPositionx(e.target.value)}
          />
        </div>
        <div>
          <lable>Position Y</lable>
          <input type="number"
          value={positiony}
          onChange={(e)=>setPositionY(e.target.value)}
          />
        </div>
        <div>
          <lable>Direction</lable>
          <select  value={direction}
          onChange={(e)=>setDirection(e.target.value)}>
            <option>Select Direction</option>
            <option value="Towards">Towards  </option>
            <option value="Backwards"> Backwards </option>
            <option value="Upwards"> Upwards </option>
            <option value="Downwards">Downwards  </option>
          </select>
        </div>

        <button type="submit">Add </button>
        <button type="submit">Reset </button>
        <button type="submit">Go Back </button>
      </form>
    </div>
  )
}

export default Vehicle